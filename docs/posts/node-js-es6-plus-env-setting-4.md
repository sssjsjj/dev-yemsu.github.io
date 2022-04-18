
### Intro

> 웹팩이란 최신 프런트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러(Module Bundler)입니다. 모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미합니다. 그럼 모듈과 모듈 번들링에 대해서 조금 더 살펴보겠습니다.
>...
>
웹팩의 등장 배경에서도 살펴봤지만 웹팩에서 해결하고자 하는 기존의 문제점은 다음 4가지 입니다.
>- 자바스크립트 변수 유효 범위
- 브라우저별 HTTP 요청 숫자의 제약
- 사용하지 않는 코드의 관리
- Dynamic Loading & Lazy Loading 미지원
>
> <cite>[joshua1988 - 웹팩 핸드북](https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html#%EC%9B%B9%ED%8C%A9%EC%9D%B4%EB%9E%80)</cite>


아래 페이지들을 참고해서 세팅하였다.
- [webpack 공식 문서](https://webpack.kr/configuration)
- [joshua1988 - 웹팩 핸드북](https://joshua1988.github.io/webpack-guide/getting-started.html#%EC%8B%A4%EC%8A%B5-%EC%A0%88%EC%B0%A8-%EC%9B%B9-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9E%90%EC%9B%90-%EA%B5%AC%EC%84%B1)
- [poiemaweb](https://poiemaweb.com/esel-webpack-2)

### Webpack 설치

Webpack V4는 webpack-cli 설치가 필요하다.

```
$ yarn add --D webpack webpack-cli
```

Webpack이 모듈을 번들링할 때 Babel을 사용하여 ES6+ 코드를 ES5 코드로 트랜스파일링하도록 babel-loader를 설치한다.

```
$ yarn add --D babel-loader
```

패키지가 아래와 같이 설치되었다.
<code>scripts</code> 의 <code>build</code>를 babel에서 webpack으로 수정한다.

##### 📃 package.json

```json
{
  "scripts": {
    "dev": "node app.js",
    "build": "webpack -w",		//NEW
    "test": "jest"
  },
  "devDependencies": {
    "@babel/cli": "^7.17.3",
    "@babel/core": "^7.17.5",
    "@babel/preset-env": "^7.16.11",
    "babel-loader": "^8.2.3",
    "jest": "^27.5.1",
    "webpack": "^5.69.1",		//NEW
    "webpack-cli": "^4.9.2"		//NEW
  },
}
```
### Webpack 설정

webpack.config.js 파일을 생성한다.

```
$ touch webpack.config.js
```
webpack 설정은 내용이 많아 단계별로 정리하려고 한다.
먼저 <code>entry</code>와 <code>output</code>이다.  

#### 🔎 entry & output 
- <code>entry</code>: 해당 파일 대상으로 웹팩이 빌드를 수행
- <code>output</code>: 빌드된 파일에 대한 옵션	
    - <code>path</code>: 빌드된 파일이 저장될 경로. dist 폴더가 범용적으로 쓰임
    	- <code>path.resolve()</code>: 인자로 넘어온 경로들을 조합하여 유효한 파일 경로를 만들어주는 Node.js API
    - <code>filename</code>: 빌드된 파일명 옵션
    	- <code>[name].bundle.js</code>: 결과 파일 이름에 entry 속성을 포함하는 옵션 
      - <code>[id].bundle.js</code> : 결과 파일 이름에 웹팩 내부적으로 사용하는 모듈 ID를 포함하는 옵션
      - <code>[name].[hash].bundle.js</code> : 매 빌드시 마다 고유 해시 값을 붙이는 옵션
      - <code>[chunkhash].bundle.js</code> : 웹팩의 각 모듈 내용을 기준으로 생생된 해시 값을 붙이는 옵션

##### 📃 webpack.config.js

```javascript
const path = require('path');

module.exports = {
  entry: './index.js', 
  output: {
    path: path.resolve(__dirname, 'dist/js'), 
    filename: 'bundle.js'
  },
}
```

#### 🔎 module & module.rules

- <code>module</code>:로더(Loader)는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성.
엔트리나 아웃풋 속성과는 다르게 module라는 이름을 사용.
- <code>module.rules</code>
    - <code>test</code>: 로더를 적용할 파일 유형 (일반적으로 정규 표현식 사용)
    - <code>include</code>: 해당 로더를 사용해서 컴파일할 파일을 지정
    - <code>exclude</code>: 컴파일에서 제외할 폴더나 파일
    - <code>use.loader</code>: 컴파일을 실행할 로더 지정
    - <code>use.options</code>: 로더에 대한 옵션. 현재는 어떤 프리셋을 사용할지 지정
    	- <code>modules</code>: <code>false</code>로 해야 최신 묘듈 시스템이 그대로 유지되어 트리쉐이킹(사용하지 않는 코드를 제거하는 방식)이 된다. ES2015 모듈 시스템에서 import되지 않은 export들을 정리해주는 기능. 용량이 많이 줄어들기 때문에 사용하는 것이 좋다. 단, commonJS나 AMD, UMD같은 모듈 시스템을 사용해야하는 클라이언트에서 쓰면 제대로 처리되지 않는다.

##### 📃 webpack.config.js

```javascript
const path = require('path');

odule.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'index.js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', {
              modules: 'false',
            }],
          }
        },
      }
    ],
  },
}
```

#### 🔎 devtool

- 소스맵 생성 여부와 방법을 제어하는 옵션.
- Source Map?
    - 배포용으로 빌드한 파일과 원본 파일을 서로 연결시켜주는 기능
    - 보통 서버에 배포를 할 때 성능 최적화를 위해 HTML, CSS, JS와 같은 웹 자원들을 압축한다. 이때, 배포 파일에서 디버깅이 어렵다. 그래서 소스맵을 이용해 배포용 파일의 특정 부분이 원본 소스의 어떤 부분인지 확인 가능하게 해준다. 

##### 📃 webpack.config.js

```javascript
module.exports = {
  // ...
  devtool: 'source-map',
}
```
#### 🔎 mode options
- <code>development</code>: 개발 모드
- <code>production</code>: 배포 모드. 모듈 번들링 과정에서 자체적으로 코드 최적화 (default) 
- <code>none</code>: 기본 최적화 옵션 설정 해제

##### 📃 webpack.config.js
```javascript
module.exports = {
  // ...
  mode: 'development'
}
```

### Webpack plugins
- <code>plugins</code>	
    - 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성.
    - 로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다.
    - 플러그인의 배열에는 생성자 함수로 생성한 객체 인스턴스만 추가될 수 있다.

#### HtmlWebpackPlugin
나는 <code>HtmlWebpackPlugin</code>을 사용했다.
webpack 번들을 호출하는 HTML 파일을 자동으로 생성해준다.
사용하기 위해서는 package 설치가 필요하다.
```
yarn add -D html-webpack-plugin
```
그리고 webpack.config.js파일 상단에서 모듈을 가져와 사용한다.

##### 📃 webpack.config.js

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ],  
}
```

#### devServer

사용하기 위해서는 package 설치가 필요하다.
```
yarn add -D webpack-dev-server
```
- 웹팩 데브 서버에서 output은 파일 생성/수정 없이 메모리에 저장된다.(컴퓨터 자원이 덜 소모됨)
- <code>hot</code> 옵션으로 코드 수정 후 저장하면 브라우저를 자동으로 새로고침해준다.

##### 📃 webpack.config.js

```javascript
module.exports = {
  // ...
  devServer: {
    hot: true,
    port: 5500
  },  
}
```

##### 📃 package.json

webpack dev server 사용으로 package.json의 scripts 옵션을 수정했다.
기존에 <code>dev</code> 값에 지정되어 있던 Node.js 서버 실행 커맨드를 <code>webpack serve</code>로 바꾸고, <code>build</code>의 <code>watch</code>옵션을 제거했다.
```json
"scripts": {
  "dev": "webpack serve",
  "build": "webpack",
  "test": "jest"
},
```

### 완성된 Webpack 설정
##### 📃 webpack.config.js
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js', 
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        include: [
          path.resolve(__dirname, 'index.js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ],
  devServer: {
    hot: true,
    port: 5500
  },
  devtool: 'source-map',
  mode: 'development'
}
```