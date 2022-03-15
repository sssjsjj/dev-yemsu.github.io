### router 설치
vue3부터는 <code>vue-router</code>가 아닌 <code>vue-router@next</code>를 설치해줘야한다.
```
npm i vue-router@next
```

### 폴더 / 모듈 생성
src 폴더 내부에 router 폴더를 생성하고 폴더 안에 index.js로 라우터 모듈을 생성해준다.
```
mkdir src/router
touch src/router/index.js
```

### 라우터 모듈 작성
아래와 같이 라우터 모듈을 작성한다.
##### 📃 src/router/index.js
```javascript
import { createWebHistory, createRouter } from "vue-router";
import PostList from "./views/Main.vue";
import PostDetail from "./views/PostDetail.vue";

const routes = [
  {
    path: "/",
    name: "Post List",
    component: Main,
  },
  {
    path: "/:title",
    name: "PostDetail",
    component: PostDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```
> #### 🔎 route 옵션
> - path : <code>route</code>를 찾을 수 있는 <code>url path</code>
> - name : <code>route</code>로 연결할 때 사용하는 이름(선택)
> - component : <code>route</code>에서 불러와질 컴포넌트
>
> 📌 참고 [vue-router-a-tutorial-for-vue-3](https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/)

> #### 🔎 history mode
> - HTML5 모드
>     - <code>history: createWebHistory()</code>
>     - 권장 history mode
>     - Vue 앱은 Client Side인 SPA앱이기 때문에 url로 다이렉트로 접속하게 되면 404에러가 뜬다. 이런 문제를 해결하기 위해서는 서버측에서 대응이 필요하다. 자세한 내용은 [공식 문서](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)에서 확인할 수 있다.  
>     - url 형태 - https://example.com/user/1
> - 해시 모드
>     - <code>history: createWebHashHistory()</code>
>     - hash 관련 내용은 서버로 보내지지 않기 때문에 서버측 대응이 필요하지 않다.
>     - 이런 점은 SEO에 매우 좋지 않다. SEO가 걱정이라면 HTML5모드를 사용해야한다.
>     - url 형태 - https://example.com/#home
>
> 📌 참고 [Vue Router - Different History modes](https://router.vuejs.org/guide/essentials/history-mode.html)

### 라우터 모듈 가져오기
라우터를 사용한다고 어플리케이션에게 알려준다.
##### 📃 /src/main.js
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).mount('#app')
```

### 라우터 영역 지정하기
라우터 영역을 지정해준다.
##### 📃 /src/App.vue
```javascript
<template>
  <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
```

### 동적 라우팅
위 소스에서 동적라우팅을 사용한 부분만 가져와보자.  
동적으로 적용할 부분은 콜론(:)이 앞에 붙는다.
```javascript
  {
    path: "/:title",
    name: "PostDetail",
    component: PostDetail,
  }
```

해당 부분은 나중에 <code>$route.params.title</code>과 같은 형태로 사용할 수 있다.
확인해보자.

##### 📃 src/router/views/PostDetail.vue
```
<template>
  <h1>PostDetail</h1>
  <p>{{ $route.params.title }}</p>ㅍ
</template>
```

결과는 아래와 같다.
<figure>
  <img src="/posts/images/vue3-dynamic-route-result-in-browser.jpg" alt="router params값 호출 화면">
  <figcaption><code>:title</code>로 지정한 부분이 <code>$route.params.title</code>로 불러와지고 있다.</figcaption>
</figure>