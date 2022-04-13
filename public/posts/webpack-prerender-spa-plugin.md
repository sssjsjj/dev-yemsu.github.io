<code>Vue.js</code>로 만들던 블로그가 어느정도 틀이 잡혔다. 블로그는 검색이 생명인데 SPA(Single Page Application)인 Vue App은 검색에 문제가 있다. SEO 문제를 [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)으로 해결하고 동적 <code>meta</code>태그를 적용하는 방법까지 알아보자.

- - -

#### SEO와 관련된 SPA의 특징
- 하나의 index.html에 <code>JavaScript</code>로 컨텐츠를 렌더링한다. 
- 어떤 페이지든 <code>index.html</code> 문서 내용이기 때문에 검색 크롤러에게 각 페이지 내용을 알려줄수가 없다.  
- 단, 구글은 <code>JavaScript</code>까지 실행한 결과 페이지를 크롤링할 수 있다. 하지만 [SSR 또는 사전 렌더링](https://developers.google.com/web/updates/2019/02/rendering-on-the-web?hl=ko)보다 웹사이트 로드 속도가 느리고 모든 봇이 자바스크립트를 실행할 수 없다.  
  <cite>[Google 검색 센터](https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics?hl=ko)</cite>

- - -

#### prerender-spa-plugin을 선택한 이유
위에서 언급되었던 [SSR 또는 사전 렌더링](https://developers.google.com/web/updates/2019/02/rendering-on-the-web?hl=ko)으로 SPA의 단점을 해결할 수 있다. 간단히 내용을 정리해 보았다.

##### SSR
- [Nuxt.js](https://nuxtjs.org/) : 기존 사이트에 추가하는 방식이 아니라 <code>Nuxt.js</code>로 다시 구축해야한다. 규모가 크고 복잡한 사이트에 적합. 
- Vanilla SSR : 직접 한땀한땀 코드를 작성하는 방법. 깊이있는 이해가 필요하고 복잡하다. 한번 해보고 싶으신 분들은 [Vue SSR 제대로 적용하기 (feat. Vanilla SSR)](https://zuminternet.github.io/vue-ssr/) 포스팅을 참고해서 해보시길!
#####  사전 렌더링
- [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin) : 컨텐츠 제공을 위주로 하는 소규모 웹에 적합하고 적용이 간편하다.

👉 그리하여 나는 사전 렌더링 방식을 선택하게 되었다.
이제 <code>prerender-spa-plugin</code>을 적용해보자!

- - -

### prerender-spa-plugin
#### 🔎 특징
- <code>Webpack</code> 플러그인으로 <code>Webpack</code>을 사용한 사이트라면 쉽게 적용할 수 있다.
- 라우터 모드가 <code>HTML5 mode</code>일 때 사용할 수 있다.
- 빌드 타임에 라우터 경로대로 폴더를 생성하고 폴더 하위에 <code>index.html</code>을 생성하는 방식이다.

#### 설치
<code>devDependency</code>로 설치한다.

```
yarn add -D prerender-spa-plugin
```

#### 기본 적용
기본적인 적용방식은 아래와 같다.

##### 📃 vue.config.js

```javascript
const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const postPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'docs'), // docs: output 디렉토리 명
    routes: [ // routes path
        "/routes1",
        "/routes2",
        "/routes3",
    ],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),
  }),
];

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...postPlugins); // 상단에서 정의한 postPlugins 내용 삽입
    }
  }
}
```

### 동적 routes 적용
<code>routes</code>를 동적으로 가져오도록 아래와 같이 코드를 변경했다.

##### 📃 vue.config.js

```javascript
const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const posts = require('./public/posts/index.json')
const routes = posts.map(post => `/${post.name}`)

const postPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'docs'), // docs: output 디렉토리 명
    routes,
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),
  }),
];

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...postPlugins); // 상단에서 정의한 postPlugins 내용 삽입
    }
  }
}
```

##### 📃 /public/posts/index.json
위에서 사용한 <code>posts.json</code>의 형태는 이렇다. 각 객체의 <code>name</code>값이 <code>route</code>명과 동일하기 때문에 가져와 사용했다. <code>name</code>값 외에는 이후 <code>meta</code> 태그에 대한 내용을 정의할 때 사용한다.

```javascript
[
  {
    "name": "webpack-prerender-spa-plugin",
    "title": "...",
    "date": "...",
    "keywords": [],
    "description": "..."
  },
]
```

### 동적 meta태그 적용
[SPA 에서 SEO 적용하기 :: 마이구미](https://mygumi.tistory.com/385) 포스트를 전반적으로 참고하여 적용하였다.

##### 📃 vue.config.js
웹팩 플러그인에 대한 정의가 분량이 많아져 파일을 분리했다.

```javascript
const webpackPlugins = require('./webpack.plugin')

module.exports = {
  outputDir: 'docs',
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...webpackPlugins)
    }
  }
}
```

##### 📃 webpack.plugin.js
분리된 웹팩 플러그인 정의에 대한 내용

```javascript
const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const posts = require('./public/posts/index.json')
const routes = posts.map(post => `/${post.name}`)

module.exports = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'docs'),
    routes,
    postProcess(renderedRoute) {
      let { html, route } = renderedRoute;
      const { title, description, keywords } = posts.find(post => route.includes(post.name))
      const titleText = title ? title.replace(/<br>/ig, '') : process.env.VUE_APP_TITLE
      const descriptionText = description || '우당탕탕 프론트엔드 개발 일지 Github pages 블로그'
      const keywordsText = keywords || '개발, 프론트엔드, 블로그, github pages, Vue3'
      const url = `${process.env.VUE_APP_BASE_URL}${route}`
      const imgUrl = `${process.env.VUE_APP_BASE_URL}/images/og_image.jpg`
      
      const metaData = `
        <title>${titleText}</title>
        <meta name="title" content="${titleText}" />
        <meta name="description" content="${descriptionText}" />
        <meta name="keywords" content="${keywordsText}" />
        <meta property="og:url" content="${url}" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="${titleText}" />
        <meta property="og:description" content="${descriptionText}" />
        <meta property="og:image" content="${imgUrl}" />
        <meta property="twitter:card" content="${imgUrl}" />
        <meta property="twitter:url" content="${url}" />
        <meta property="twitter:title" content="${titleText}" />
        <meta property="twitter:description" content="${descriptionText}" />
        <meta property="twitter:image" content="${imgUrl}" />
      `;
      const start = html.indexOf('<head>') + '<head>'.length;
      html = html.slice(0, start) + metaData + html.slice(start);
      renderedRoute.html = html;
      return renderedRoute;
    },
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),
  })
]
```

#### 결과
세팅이 완료되었으니 빌드하여 결과를 확인한다.

```
yarn build
```
output directory 내부에 아래와 같이 폴더와 <code>html</code>이 생성된다. 나는 git pages 블로그이기 때문에 output directory명이 <code>docs</code>이지만 기본은 <code>dist</code>이다.

```
docs
  ㄴ route1
    ㄴ index.html
  ㄴ route2
    ㄴ index.html
  ㄴ route3
    ㄴ index.html
```
<code>index.html</code>을 열어보면 <code>meta</code>태그가 잘 적용된 것을 확인할 수 있다.
