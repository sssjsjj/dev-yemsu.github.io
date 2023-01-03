Vue3에서 <code>vue-meta</code>를 설치해서 사용하려고 하면 아래와 같은 에러가 난다.

```
Uncaught TypeError: Cannot set property '$meta' of undefined
```

Vue3에서는 아래와 같이 <code>vue-meta</code> 알파버전을 설치해줘야 하고 설정 방법도 조금 다르다.
(2022.03.17 기준)

### 설치
vue-meta 알파버전을 설치한다.

```
npm install vue-meta@alpha // npm
yarn add vue-meta@alpha // yarn
```

### main.js

Vue app에 <code>metaManager</code>를 추가해준다.

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'

createApp(App)
  .use(router)
  .use(createMetaManager())
  .mount('#app')
```

### App.vue

아래 주석 내용대로 <code>App.vue</code>에 내용을 추가한다.

```html
<template>
  <metainfo /> <!-- add component -->
  <header-comp />
  <router-view />
</template>

<script>
import HeaderComp from '@/components/layout/Header.vue'
import { useMeta } from 'vue-meta' // import useMeta 

export default {
  setup () {
    // useMeta를 이용하여 title, meta 태그 등을 설정
    useMeta({
      title: process.env.VUE_APP_TITLE,
      meta: [
        {vmid: 'description', name: 'description', content: '프론트엔드 개발 블로그'},
        {vmid: 'keywords', name: 'keywords', content: 'blog, frontend, vue3, vueCLI4'},
        {vmid: 'og:type', name: 'og:type', content: 'article'},
        {vmid: 'og:title', name: 'og:title', content: 'ENJOY DEV'},
        {vmid: 'og:description', name: 'og:description', content: '프론트엔드 개발 블로그'},
        {vmid: 'og:url', name: 'og:url', content: 'https://yemsu.github.io/'},
        {vmid: 'og:image', name: 'og:image', content: 'og:image 경로'}
      ]
    })
  },
  components: {
    HeaderComp
  }
}
</script>

<style lang="scss">
@import '@/assets/style/common.scss';
</style>
```
[<code>setup</code>은 Vue3에 추가된 훅](https://vuejs.org/api/composition-api-setup.html)으로 컴포넌트 인스턴스가 생성되기 전에 실행된다.  
<code>useMeta</code>는 꼭 <code>setup</code> 내부가 아니더라도 사용가능하다.

여기까지 세팅하고 실행해보면 아래와 같은 에러가 뜬다.

```
error  in ./node_modules/vue-meta/dist/vue-meta.esm-browser.min.js

Module parse failed: Unexpected token (8:7170)
You may need an appropriate loader to handle this file type,   
currently no loaders are configured to process this file.
```

### vue.config.js
vue.config.js에 아래와 같은 옵션을 추가하면 에러가 해결된다.

```
module.exports = {
  transpileDependencies: [
    'vue-meta',
  ],
}
```

<cite class="refer">
[stack overflow - How to use Vue 3 Meta with Vue.js 3?](https://stackoverflow.com/questions/66228340/how-to-use-vue-3-meta-with-vue-js-3)
</cite>

- - - 
### Modularize
위에 예시 코드에서 메타태그를 지정한 부분만 봐보자.  
오픈그래프 메타태그에도 사이트 메타값과 같은 내용들이 들어가고 패키지에서 지정해줘야하는 vmid 값에 name 값이 동일하게 들어간다.  
이런 중복되는 부분들이 많은 코드가 매번 view 컴포넌트에 들어가면 너무 지저분해지고 비효율적인 코드가 될 것 같다.  
때문에 중복되는 부분들을 최소화하고 재사용할 수 있도록 모듈로 만들어보려고 한다.

```
useMeta({
  title: process.env.VUE_APP_TITLE,
  meta: [
    {vmid: 'description', name: 'description', content: '프론트엔드 개발 블로그'},
    {vmid: 'keywords', name: 'keywords', content: 'blog, frontend, vue3, vueCLI4'},
    {vmid: 'og:type', name: 'og:type', content: 'article'},
    {vmid: 'og:title', name: 'og:title', content: 'ENJOY DEV'},
    {vmid: 'og:description', name: 'og:description', content: '프론트엔드 개발 블로그'},
    {vmid: 'og:url', name: 'og:url', content: 'https://yemsu.github.io/'},
    {vmid: 'og:image', name: 'og:image', content: 'og:image 경로'}
  ]
})
```

모듈로 사용할 setMeta.js파일을 생성했다.

##### 📃 src/utils/setMeta.js

```
import { useMeta } from 'vue-meta'

export default (params = {}) => {
  useMeta({
    title: params.title,
    meta: [
      {vmid: 'description', name: 'description', content: params.description},
      {vmid: 'keywords', name: 'keywords', content: params.keywords},
      {vmid: 'og:type', name: 'og:type', content: 'article'},
      {vmid: 'og:title', name: 'og:title', content: params.title},
      {vmid: 'og:description', name: 'og:description', content: params.description},
      {vmid: 'og:url', name: 'og:url', content: process.env.VUE_APP_BASE_URL + params.path},
      {vmid: 'og:image', name: 'og:image', content: `${process.env.VUE_APP_BASE_URL}/images/og_image.jpg`}
    ]
  })
}
```

App.vue의 스크립트 영역도 아래와 같이 수정해줬다.
<code>setup</code>훅에 있던 meta태그 지정 함수를 <code>beforeCreate</code>로 옮겼다.
<code>setup</code>에서는 <code>this</code>로 컴포넌트에 접근할 수 없기 때문이다.

##### 📃 App.vue

```html
<script>
import HeaderComp from '@/components/layout/Header.vue'
import setMeta from '@/utils/setMeta'

export default {
  components: {
    HeaderComp
  },
  beforeCreate() {
    setMeta({
      title: 'ENJOY DEV',
      description: '프론트엔드 개발 블로그',
      path: this.$route.path,
      keywords: 'blog, frontend, vue3, vueCLI4'
    })
  }
}
</script>
```

### 동적 라우트 Meta 적용 실패
동적 라우트에 대한 meta태그 내용이 제일 중요하다.
주요 컨텐츠는 포스팅 상세페이지에 있기 때에 동적 라우트에 대한 Meta를 추가하려고 아래와 같이 <code>setMeta</code>함수를 추가했다.

```
async created() {
  const postName = this.$route.params.title
  await this.$store.dispatch('GET_MD', postName)
  await this.$store.dispatch('GET_POST', postName)

  setMeta({
    title: this.post.title.replace('<br>', ''),
    description: this.post.description,
    path: this.$route.path,
    keywords: this.post.keywords
  })
},
```
그러나 아래와 같은 에러가 뜬다.  

```
Uncaught (in promise) Error: No manager or current instance
```
에러를 서치해보고, 원인이 무엇인지 이런저런 시도를 해봤지만 데이터를 호출한 뒤에 데이터 값을 <code>vue-meta</code>로 넘겼을때 위 에러는 사라지지 않았다. 물론 메타태그도 추가되지 않았다.  
Vue3에서 사용하기위해 <code>vue-meta</code> 알파 버전을 설치했는데 아직 안되는걸까? 관련 자료가 너무 부족해서 알아볼수가 없다.😭  
추후 알게되면 포스팅을 업데이트할 예정이다.

결국 그래서 나는 <code>webpack prerender-spa-plugin</code>의 <code>html</code>에 <code>meta</code>를 삽입하는 방식으로 진행했다.  
👉 [Webpack prerender-spa-plugin 사용하기 포스팅](webpack-prerender-spa-plugin)
