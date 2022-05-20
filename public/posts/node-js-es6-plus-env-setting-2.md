
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