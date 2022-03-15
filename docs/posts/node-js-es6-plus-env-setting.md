### 시작하기 전 🤔
#### ❓ node.js 쓰면 무엇이 좋을까
예전엔 폴더 하나 만들고 그 안에 <code>html</code>, <code>js</code>파일 만들어서 작업했었다.
이번엔 node.js 환경을 구축해서 작업해보고 싶었는데, 개념과 장점을 명확히 알고 쓰고싶었다.
> Node (또는 더 공식적으로는 Node.js) 는 오픈소스, 크로스 플랫폼이며, 개발자가 모든 종류의 서버 사이드 도구들과 어플리케이션을 JavaScript로 만들수 있도록 해주는 런타임 환경이다.런타임은 브라우져 영역 밖에서도 사용할수 있도록 의도했다.(예를들면 서버 OS 또는 컴퓨터에서 직접적으로 실행되는). 이와 같이,  이 환경에서 특정 브라우져에서의 자바스트립트 API들을 제외시키고 ,  HTTP 와 파일 시스템 라이브러리들을 포함하여 더 많은 전형적인 OS API들을 추가했다.  
> 
> <cite>[MDN](https://developer.mozilla.org/ko/docs/Learn/Server-side/Express_Nodejs/Introduction#express%EC%99%80_node%EB%9E%80)</cite>

장점은 많지만 현재 내 기준에서는
- **node.js와 친해지는 기회💚**
- es6사용을 위한 라이브러리를 간편하게 설치할 수 있음
- 새로운 라이브러리와 패키지 설치가 용이하고 package.json에 보기 좋게 정리됨
- 간편하게 서버 구축이 가능

#### ❓ yarn or npm
그리고 node.js 관련 이것저것 찾아보다가 <code>npm</code>보다 <code>yarn</code>이 더 업그레이드된 패키지 관리 도구라고해서 <code>yarn</code>을 사용하려고 한다.

>Yarn은 Facebook이 개발한 패키지 매니저다. 점점 거대해지는 프로젝트에서 npm을 사용하며 일관성, 보안, 빌드 시 성능 등에 문제를 겪은 Facebook은 npm을 대체할 새로운 패키지 관리 도구인 Yarn을 개발했다. 이 글에서도 프로젝트의 생성과 관리에 Yarn을 사용할 것이다.
>
> <cite>[NAVER D2 - 간단하게 구축해 보는 JavaScript 개발 환경](https://d2.naver.com/helloworld/2564557)</cite>

#### ❓ 테스트 코드
테스트 코드는 한번도 작성해 본적이 없다.
기능 추가 및 리팩토링이 수월해진다고 보았는데 이번 기회에 해보기로 한다.
[위 참고 페이지](https://d2.naver.com/helloworld/2564557)에 시작하는 방법이 나와있으니 따라서 해본다! 아주 옛날 글이지만 정리가 굉장히 잘 되어있다.

- - -

### 프로젝트 생성
<code>yarn</code>을 설치한적 없다면 먼저 설치
```
npm install -g yarn
```
<code>yarn</code> 프로젝트를 생성
```
yarn init -y
```
<code>-y</code> 플래그를 사용하여 기본 설정으로 생성

package파일이 생성됐다.
##### 📃 package.json
```json
{
  "name": "vanilla-poll-graph",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}

```

생성된 프로젝트를 git 원격 저장소에 연결하고
<code>.gitignore</code>에 <code>node_modules</code>를 추가했다
- - -

### Jest로 테스트 환경 설정하기
#### 폴더 생성

아래 폴더들을 루트 경로에 생성하고 파일들을 각 폴더 안에 생성했다.
이번에 그래프 기능을 개발할거라 graph로 네이밍 해줬다.
- 📁 **\__test__** // 테스트 코드를 저장할 폴더 
- 📁 **lib** // 구현 코드를 저장할 폴더
- 📃 **graph.test.js** // 테스트 코드 파일
- 📃 **graph.js** // 구현 코드 파일

아래는 폴더, 파일을 생성하는 명령어.
마우스로 손을 움직이고 커서를 또 폴더 경로로 이동시키고 우클릭 등등... 의 수고를 많이 줄여준다.
```
$ mkdir __tests__ lib
$ touch __tests__/graph.test.js lib/graph.js
```

#### Jest 설치/NPM 커맨드 지정
패키지 설치
```
yarn add -D jest
```

<code>scripts</code>속성에 테스트 명령어 지정

##### 📃 package.json
```json
{
  "scripts": {
    "test": "jest"	// Jest CLI 명령문 설정
  },
}
```

#### 임시 소스 삽입/테스트

우선 참고할 수 있는 소스를 [Jest 공식문서](https://jestjs.io/docs/getting-started)에서 가져와 넣어두었다.
##### 📃 \__test__/graph.test.js 
```
// 임시 확인용 소스
const sum = require('../lib/graph');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});    
```
##### 📃 lib/graph.js
```javascript
// 임시 확인용 소스
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```
커맨트 입력하여 테스트 실행
```
yarn test
```
PASS! 이렇게 뜨는구나.
테스트 코드에 대해 감이 좀 잡히면 포스팅에 업데이트해야지😋
![Jest 실행 성공](https://images.velog.io/images/sssjsjj/post/f10a877f-222d-48c1-967a-1aea133294f8/image.png)
- - -
### [Babel](https://babeljs.io/docs/en/usage)로 ES6+ 환경 설정하기
#### Babel CLI 설치
```
yarn add -D @babel/core @babel/cli @babel/preset-env
```

- <code>@babel/core</code> : babel이 트랜스파일 할 수 있게 해준다.
- <code>@babel/cli</code> : CLI에서 babel을 실행할 수 있게 해준다.
- <code>@babel/preset-env</code> : <code>.babelrc</code>의 <code>targets</code> 옵션에 선언된 환경에 대응할 수 있는 plugin들을 모아놓은 preset 라이브러리. 가장 많이 쓰인다.

##### 📃 package.json
```json
{
  "devDependencies": {
    "@babel/cli": "^7.17.3",			// NEW
    "@babel/core": "^7.17.5",			// NEW
    "@babel/preset-env": "^7.16.11",	// NEW
    "jest": "^27.5.1"
  }
}
```
#### Babel 설정
프로젝트 루트에 <code>.babelrc</code> 파일 생성
```
$ touch .babelrc
```
아래와 같이 <code>@babel/preset-env</code> preset을 사용하겠다고 설정하고
어떤 브라우저에 대응할지 <code>targets</code> 옵션에 선언했다. ([바벨 공식 문서](https://babeljs.io/docs/en/usage)에 있는 옵션)
##### 📃 .babelrc
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {        
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        }
    ]
  ]
}
```

#### NPM 커맨드 지정
##### 📃 package.json

```json
{
  "scripts": {
    "build": "babel lib -w -d dist/js"  // Babel CLI 명령어
    "test": "jest"
  }
}
```
#### 🔎 Babel CLI 명령어
```
babel src/lib -w -d dist/js
```
- <code>lib</code> : 해당 경로의 폴더 안에 있는 JS파일을 트랜스파일링
- <code>-w</code> : 파일들의 변경 감지 (--watch 축약형)
- <code>-d dist/js</code> : 트랜스파일링된 파일 저장 경로 (--out-dir 축약형)

#### Babel 실행
테스트 해보기 위해 graph.js에 <code>arrow function</code>과 <code>Set</code>을 사용 후 빌드해보았다.
그러나 아래와 같이 상단에 <code>"use strict";</code>만 추가되고 변한게 없다.
##### 📃 lib/graph.js
```javascript
function graph(num) {
  const setInstance = new Set([1, 2, 3, 4, 5]);
  const hasNum = () => setInstance.has(num)
  return hasNum
}
module.exports = graph
```
##### 📃 dist/js/graph.js
```javascript
"use strict";

function graph(num) {
  const setInstance = new Set([1, 2, 3, 4, 5]);

  const hasNum = () => setInstance.has(num);

  return hasNum;
}

module.exports = graph;
```
<code>"ie": "11"</code>을 <code>targets</code>에 추가하고 빌드해봤더니 <code>const</code>와 <code>arrow function</code>이 바뀐 것을 볼 수 있다.

##### 📃 dist/js/graph.js

```javascript
"use strict";

function graph(num) {
  var setInstance = new Set([1, 2, 3, 4, 5]);

  var hasNum = function hasNum() {
    return setInstance.has(num);
  };

  return hasNum;
}

module.exports = graph;
```

그런데 <code>Set</code>은 여전하다. <code>Set</code>같은 ES6의 객체들은 ES5로 구문 변환만 해서는 안되고 해당 객체들을 정의하는 polyfill을 추가해줘야 한다.
- - -

### Babel Polyfill 설정하기
#### 🔎 polyfill이란?
polyfill이 정확히 무엇이고 왜 바벨 폴리필을 가져오는 방식이 바뀌었는지 아래 글에 잘 설명되어있다.

>폴리필(Polyfill)은 구형 브라우저에서 지원하지 않는 기능을 제공하는 코드를 의미합니다. ES6의 Promise 같은 객체들은 ES5에 존재하지 않으므로 구문 변환 뿐만 아니라 해당 객체들을 정의하는 코드인 바벨 폴리필(babel polyfill)을 추가해야 합니다. 
> ...
폴리필(polyfill)은 충전솜이라는 의미를 가지고 있습니다.
ES5에 비어있는 ES6 객체, 메소드들을 충전솜처럼 폴리필이 채워줍니다
> ...
과거에는 <code>@babel/polyfill</code> 패키지를 직접 전역 스코프에 가져오는(import) 방식으로 바벨 폴리필을 추가했지만 deprecated 되었습니다. 현재는 <code>core-js/stable</code>과 <code>regenerator-runtime/runtime</code> 패키지를 직접 전역 스코프에 삽입합니다. 이러한 바벨 폴리필 삽입 방법은 웹채팅처럼 고객 페이지에 삽입되는 애플리케이션인 경우 고객의 전역 스코프를 오염시키는 문제가 있습니다.
>
> <cite>[kakao Tech](https://tech.kakao.com/2020/12/01/frontend-growth-02/)</cite>

**전역 스코프를 오염시키는 문제**가 있어서 오염시키지 않고 적용하는 방법이 있다고 하지만, 아직 완벽히 이해가 되진 않는다. 나중에 오류를 만나게되면 그때 해결하면서 이해하기로 했다.
요번엔 전역으로 우선 설정한다.

#### useBuiltIns 옵션 설정
><code>preset-env</code> 프리셋의 폴리필 삽입 방식을 설정하는 옵션입니다. 옵션 값으로 <code>usage</code>, <code>entry</code>, <code>false</code>를 사용할 수 있습니다. <code>false</code> 이외의 옵션을 사용하면 최신 자바스크립트 폴리필이 포함된 standard javascript library인 <code>core-js</code> 모듈을 가져오는(import) 코드를 타깃 브라우저에 맞게 삽입/수정합니다. 옵션 값에 따른 폴리필 삽입 방식을 살펴보겠습니다.
>
> <cite>[kakao Tech](https://tech.kakao.com/2020/12/01/frontend-growth-02/)</cite>

#### 🔎  useBuiltIns 옵션 종류
- <code>**usage**</code>
: 실제 사용한 폴리필만 삽입된다. import 문 변경이 아닌 삽입이므로 폴리필 모듈을 전역 스코프에 삽입하지 않아도 된다.
  ```javascript
  //before transpiling
  Promise.resolve().finally();

  //after transpiling
  require("core-js/modules/es.promise.finally");

  Promise.resolve().finally();
  ```
- <code>**entry**</code>
: 폴리필 모듈을 전역 스코프에 직접 삽입하면 타깃 환경에 필요한 폴리필만 전역 스코프에 추가된다.
- <code>**false**</code>
: default 값. 사용 안함.

실제 사용한 폴리필만 삽입되는 <code>usage</code>옵션이 있으면, 전역으로 타깃 환경에 필요한 폴리필을 미리 추가하는 <code>entry</code>를 사용할 일은 없지않나 싶었다.
<code>entry</code>의 사용해도 되고 사용하면 얻을 수 있는 이점이 무엇인지 궁금했다.
하지만 이쪽을 계속 파자니 한도 끝도 없어서 우선 나는 여기까지만 알아보고 <code>usage</code>를 사용하기로 결정!💃

#### corejs 옵션 설정
>corejs 옵션은 useBuiltIns 옵션과 함께 사용해야 합니다. 해당 옵션은 삽입되는 core-js 모듈의 버전을 설정합니다. default 값은 2이고, version 2는 업데이트가 중단되었기 때문에 현재는 version 3를 사용해야 합니다.
>
> <cite>[kakao Tech](https://tech.kakao.com/2020/12/01/frontend-growth-02/)</cite>

꼼꼼하게 정리된 kakao Tech 글을 보면서 차근차근 따라했다.
테스트를 위해 넣었던 ie는 타겟옵션에서 제거했다.

##### 📃 .babelrc
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3"  // NEW
      }
    ]
  ]
}
```
#### Babel 실행 
모듈이 추가 된 것을 확인할 수 있다.🕵️‍♀️
##### 📃 dist/js/graph.js
```javascript
"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

function graph(num) {
  const setInstance = new Set([1, 2, 3, 4, 5]);

  const hasNum = () => setInstance.has(num);

  return hasNum;
}

module.exports = graph;
```
- - -
### 로컬 서버 구축하기
Express가 많이 나와있지만 우선 Node.js로만 구축해보기로했다.
Node.js로만 서버 구축하는건 아래처럼 불편한점이 많다고 한다.
직접 느껴보고 나중에 Express 프레임워크를 써보기로 한다.

> 이렇게 HTML을 전송해보았는데요. 코드가 너무 반복되고, 페이지 별로 HTML을 따로 만들어야하며, 이를 각각 주소와 일일히 연결해야하는 단점이 있습니다. 페이지가 수십 페이지 이상 늘어난다고 생각해보세요. 매번 GET 요청인지 확인하고, 주소를 파악하고, fs로 매칭되는 파일을 읽어서 브라우저로 전송해야 합니다. 이렇게 해서는 실제 서비스는 무리겠죠? 다음 시간에는 이 귀찮은 과정을 간단히 해결해 줄 Express 프레임워크에 대해서 알아봅시다!
> ...
> Express 프레임워크는 코드의 양도 줄여주고 추후 유지보수가 쉽도록 만들어주기 때문에 사용합니다. 하지만 성능은 이전 시간의 생 코드보다는 떨어집니다. 하지만 크게 영향은 없기 때문에 사용해도 됩니다.
>
> <cite>[zerocho](https://www.zerocho.com/category/NodeJS/post/57774a8eacbd2e9803de0195)</cite>

#### Node.js 서버 설정
💡 개발 서버 실행을 위해 세팅 했던 것으로, 뒤쪽에서 webpack-dev-server로 대체됨 💡
프로젝트 루트에 <code>app.js</code> 파일 생성
```
$ touch app.js
```
[node.js 공식 문서](https://nodejs.org/ko/docs/guides/getting-started-guide/) 와 [zerocho 블로그](https://www.zerocho.com/category/NodeJS/post/57774a8eacbd2e9803de0195)를 참고해서 아래와 같이 작성했다.
##### 📃 app.js
```javascript
const http = require('http'); // 서버 만드는 모듈
const url = require('url'); // 주소 분석 모듈
const fs = require('fs'); // 파일을 읽고 쓰는 모듈

const hostname = '127.0.0.1';
const port = 3000;
/*
localhost주소를 입력하면 서버에 '정보'를 달라고 '요청'한다.
대기중이던 서버는 '요청'을 처리 후 클라리언트로 '정보'를 돌려준다.
> 요청(request)와 정보(response)에는 header와 body가 있다.
	* header - request, response에 대한 정보(종류, 크기, 캐시) 등
	* body - 주고 받고자 하는 메인 정보
*/
const server = http.createServer((req, res) => { // 서버 만드는 메소드
  // url모듈을 이용해서 url에 따라 다른 HTML을 전송하는 라우팅을 구현
  const path = url.parse(req.url, true).pathname; 
  if (req.method === 'GET') { // GET 요청이면 
    if (path.includes('.js')) {
      res.writeHead (200, 'Content-Type', 'text/javascript');
      // readFile 메소드로 HTML 파일을 읽어서 읽은 데이터를 브라우저로 보낸다.
      fs.readFile(__dirname + path, (err, data) => {
        if (err) {
          return console.error(err);
        }
        res.end(data);
      });
    } else if (path === '/') {
      res.writeHead (200, 'Content-Type', 'text/html');
      // __dirname - 현재 프로젝트의 경로
      fs.readFile(__dirname + '/index.html', (err, data) => {
        if (err) {
          return console.error(err);
        }
        res.end(data, 'utf-8');
      });
    } else {
      res.writeHead(404, 'Content-Type', 'text/plain; charset=UTF-8');
      res.end('주소가 없습니다', 'utf-8');
    }
  }
}).listen(port);

console.log(`Server running at http://${hostname}:${port}/`);
```

#### 커맨드 지정/서버 실행
##### 📃 package.json

```json
{
  "scripts": {
    "dev": "node app.js", 				// NEW
    "build": "babel lib -w -d dist/js" 
    "test": "jest"
  },
}
```
엇..! 그런데 <code>Uncaught ReferenceError: require is not defined</code> 에러가 떴다.
요고 아까 바벨로 트랜스파일링한 파일에서도 봤엇는데.
#### 🔎 <code>require</code> ?
Node.js의 모듈시스템인 CommonJs에서 모듈을 불러오는 키워드라고 한다.
CommonJs는 웹에서 쓰려면 번들러를 사용해야 한단다.



### Webpack 사용하기


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

#### Webpack 설치

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
#### Webpack 설정

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

#### 🔎 plugins
- <code>plugins</code>	
    - 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성.
    - 로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다.
    - 플러그인의 배열에는 생성자 함수로 생성한 객체 인스턴스만 추가될 수 있다.

#### 🔎 HtmlWebpackPlugin
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

#### 🔎 devServer

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

#### webpack.config.js

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