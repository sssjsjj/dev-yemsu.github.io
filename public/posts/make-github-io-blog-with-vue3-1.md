Tistory 블로그를 운영하다가 최근에 Velog로 마크다운을 사용해서 처음 포스팅을 해봤다.
마크다운을 사용하니 정보를 규칙적으로 나열할 수 있다는 점이 좋았고, 어느정도 시맨틱하게 포스팅을 작성할 수 있어서 SEO에도 좋을 것 같았다.
하지만 마크다운으로 작성하다보니 오히려 욕심이 생기면서 직접 블로그를 만들고 싶어졌다.
생각의 과정은 아래와 같다.

- Tistory
    - 장점: 자유롭게 커스텀이 가능하다. 그래서인지 아늑한 내 공간이라는 느낌이 있다.
    - 단점: 마크다운 미리보기 기능을 지원하지 않는다.
- Velog
    - 장점: 마크다운 미리보기 기능을 지원하고 단축키도 어느정도 지원한다.
    - 단점: 내 공간이라는 느낌보다는 SNS같은 느낌이 썩 좋진 않았다. 마크다운으로 작성하다보니 단축키를 더 자유롭게 쓰고 싶었고, 간격 조정과 같은 세부 스타일도 조정하고 싶었다.
- GitHub Pages블로그
    - 장점: 내 입맛에 맞게 설정해놓은 에디터 단축키를 자유롭게 쓸 수 있고 원하는대로 커스텀 가능하다는게 가장 큰 이유다. 걍 불가능한게 없다.
    - 단점: 학습 시간이 필요하고 제작 시간이 걸린다.

찾아보니 jekyll을 이용해 간단하게 GitHub Pages블로그를 만들 수 있었다.  
하지만 직접 블로그를 만들어서 이런 저런 기능도 직접 넣어보면 재밌을 것 같아서 Vue3로 블로그 만들기를 시작한다!

- - -
### Vue3 프로젝트 생성
Vue3 프로젝트를 생성했다.
```
$ vue create yemsu.github.io
```
GitHub에 repository를 생성하고 remote add 해주었다.
```
$ git remote add origin https://github.com/sssjsjj/yemsu.github.io.git
```
생성된 프로젝트 첫 커밋을 하고 푸쉬했다.
- - -
### 폴더 구조 잡기
[[Vue] 🌱우아한 프로젝트 구조 짜기](https://velog.io/@cindy-choi/Vue-%EC%9A%B0%EC%95%84%ED%95%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%A1%B0-%EC%A7%9C%EA%B8%B0)를 참고했다. 좋은 글이다!
```
src
  ㄴ assets
    ㄴ images
    ㄴ style
  ㄴ components
    ㄴ layout
  ㄴ contents
    ㄴ images
  ㄴ router
    ㄴ views
  ㄴ utils
  main.js
  App.vue
```
- - -
### 마크다운을 불러와 HTML로 변환하여 렌더링
블로그 포스팅을 마크다운으로 입력할거니까 요 컨텐츠를 HTML로 렌더링 시키는 방법에 대해 먼저 고민했다.

[GitHub API](https://docs.github.com/en/rest/reference)에서 제공하는 기능이 있길래 시도해봤다. 

#### 삽질 log. Github API Octokit 시도
[@octokit/core](https://github.com/octokit/core.js#readme) 라이브러리 패키지를 먼저 설치하고
```
yarn add @octokit/core
```
[@octokit/core](https://github.com/octokit/core.js#readme)와 [GitHub API](https://docs.github.com/en/rest/reference)를 보면서 쭉 따라해봤다.  
API 사용을 위해 먼저 access token을 발급받아야 한다. [Octokit 토큰 발급 페이지](https://github.com/settings/tokens/new?scopes=repo)로 이동해서  
- **Note**에는 토큰 사용이 필요한 어플리케이션 이름을 입력  
- **Expiration**은 30days로 되어있었는데 그때마다 재생성하긴 귀찮아서 90days로 했다.    
- **Scopes**는 쭉 읽어봤는데 딱히 필요없을 것 같고 나중에 수정이 가능할 것 같아서 default 체크 항목 그대로 토큰을 생성했다. 
<figure>
  <img src="./images/octokit-new-token-page.jpg" alt="Octokit 토큰 발급 페이지">
  <figcaption>위와 같이 정보를 입력하고 Octokit 토큰을 발급 받았다</figcaption>
</figure>

3. 생성한 토큰을 아래와 같이 넣고 테스트를 위해 마크다운을 입력해서 실행해봤다. <code>html</code>로 변환된 결과는 <code>htmlContents</code> 데이터 값에 저장하고 <code>template</code>의 <code>v-html</code> 디렉티브에 값을 넣어 확인해봤다.
##### 📃 App.vue
```javascript
<template>
  <div v-html="htmlContents"></div>
</template>

<script>
import { Octokit } from "@octokit/core";

export default {
  data() {
    return {
      htmlContents: null,
    }
  },
  async created() {
    const octokit = new Octokit({ auth: 생성한토큰값 })

    const { data } = await octokit.request('POST /markdown', {
      text: `
        ### title
        text
        [link text](url)
      `
    })
    this.htmlContents = data
  },
}
</script>
```
html로 잘 들어간 것을 확인했다!
<figure>
  <img src="./images/octokit-markdown-to-html-test-result.jpg" alt="markdown을 html로 변환한 결과 화면">
  <figcaption>html로 잘 변환된 markdown</figcaption>
</figure>

- - -
### 마크다운 파일 가져오기
작성된 파크다운 파일 하나를 vue파일 상단에서 import 해봤다.
```javascript
import text from "./contents/make-github-io-blog-with-vue3.md";
```
에러가 떴다.
```
Failed to compile.

./src/contents/make-github.io-blog-with-vue3.md 1:2
Module parse failed: Assigning to rvalue (1:2)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
```
해당 파일 타입에 대한 로더를 설정해줘야 한다. 서치해보고 [vue-markdown-loader](https://www.npmjs.com/package/vue-markdown-loader) 패키지를 설치했다.
```
yarn add vue-markdown-loader -D
``` 
<code>vue.config.js</code> 파일을 루트 경로에 생성하고
패키지 공식 가이드에서 **With Vue CLI3**에 대한 내용 그대로 넣었다.
##### 📃 vue.config.js
```javascript
module.exports = {
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}
```
그래 에러야.. 안녕
```
[vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.
```
<code>vue-template-compiler</code>가 <code>peer dependency</code>로 꼭 깔려있어야 하거나 호환되는 컴파일러 실행을 옵션에 설정해줘야된다는 것 같다.  

<code>vue-template-compiler</code>는 <code>Vue2</code>까지 사용하던 컴파일러이고 <code>Vue3</code>부터는 <code>@vue/compiler-sfc</code>를 설치해야한다고 한다.  

그래도 안된다. 더 찾아보니 <code>vue-markdown-loader</code> 자체가 <code>Vue3</code>까지는 지원이 안된다고한다.
더 뒤져서 <code>Vue3</code>까지 지원하는 [markdown-to-vue-loader](https://www.npmjs.com/package/markdown-to-vue-loader?activeTab=dependencies)를 찾았고 가이드 대로 <code>vue.config.js</code>를 작성했다.
##### 📃 vue.config.js
```javascript
module.exports = {
  chainWebpack: config => {
    config.module.rule('md$')
      .test(/\.md/)
      .use('vue-loader')
      .loader('markdown-to-vue-loader')
      .end()
  },
}
```
그리고 에러를 또 만났다.
```
Syntax Error: TypeError: this.getOptions is not a function
```
호환되지 않는 패키지 일때 뜨는 에러라고 한다.  
구글링으로 원하는 패키지를 찾기가 많이 힘들다. 생각해보니 npm 공식 사이트에서 서치해보는게 훨씬 정확할 것 같았다. 그렇게 찾은 [@mdx-js/loader](https://www.npmjs.com/package/@mdx-js/loader).
설치를하고 공식문서대로 loader 설정했다.
```javascript
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('mdx')
      .test(/\.mdx?$/)
      .use('babel-loader')
        .loader('babel-loader')
        .options({plugins: ['@vue/babel-plugin-jsx'], /* Other options… */})
        .end()
      .use('@mdx-js/loader')
        .loader('@mdx-js/loader')
        .options({jsx: true, /* otherOptions… */})
        .end()
  },
}
```
역시 계속 에러 떠서 공식문서도 보고 구글링도 하면서 오만 삽질하다가 생각해보니까 md파일 로더가 꼭 필요한건 아니고 md파일 내용을 그냥 <code>String</code>으로 가져와서 <code>Octokit</code>에 전달하면 되는거였다.  

텍스트 파일 로더인 <code>Webpack raw loader</code>를 알게 되어 선택했다.
그리고 여러 서치 과정들을 통해 <code>Octokit</code>은 내가 원하는 기능에 비해 너무 거창해서 삭제하고, 마크다운을 <code>html</code>로 변환하는 목적에만 부합하는 패키지로 선택하여 적용했다.
자세한 과정은 [Vue CLI 4 마크다운 파일을 불러와 HTML로 변환하기](vue-cli-4-import-markdown-convert-to-html)에 정리해두었다.

- - -
### 동적 라우팅 적용
라우터를 설치/설정 한다. 자세한 과정은 ["Vue3 Router 사용하기  (+ 동적 라우팅)](vue3-router)에서!

이제 <code>$route.params.title</code>값을 이용하여 원하는 마크다운 파일을 불러들이도록 작업하면되겠다.
