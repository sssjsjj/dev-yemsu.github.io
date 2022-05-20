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