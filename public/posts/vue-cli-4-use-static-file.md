이전 포스팅 - [Vue CLI 4 마크다운 파일을 불러와 HTML로 변환하기](vue-cli-4-import-markdown-convert-to-html)  

이전에 나는 md파일을 <code>import</code>하기 위해 <code>webpack</code>에서 md파일에 대한 <code>loader</code>설정을 했었다.  
또 <code>loader</code>설정을 위해 <code>raw-loader</code>라는 패키지도 설치했었다.  
그렇다 보니 빌드를 하게되면 해당 <code>md</code>파일을 <code>js</code>파일로 컴파일 후 배포하는 과정을 거치게 된다.
따라서 <code>static</code> 파일들은 불필요한 컴파일 과정을 거치지 않도록 <code>public</code>폴더로 옮기고 파일 호출 로직을 변경하려고 한다.  

### static 파일은 public 폴더로
> #### 🔎 <code>public</code> 폴더 ?
> - <code>static</code> 파일들을 위해 <code>Vue CLI</code>에서 제공하는 폴더이다. Vue 프로젝트를 생성하면 root 경로에 자동으로 함께 생성된다.  
> - <code>Webpack</code> 영향 범위에 들어가지 않고 <code>build</code> 후에 <code>output > directory</code>에 그대로 복사된다.
> - <code>public</code> 폴더에 있는 파일들은 <code>HTTP</code>요청을 통해 사용할 수 있다.
>
><cite class="refer">
>  - [Vue CLI - HTML and Static Assets](https://cli.vuejs.org/guide/html-and-static-assets.html)
>  - [How to access a static JSON file in Vue CLI 3?](https://medium.com/@negarjf/how-to-access-a-static-json-file-in-vue-cli-3-8943dc343f95)
></cite>

<code>static</code> 파일인 <code>md</code>, <code>json</code>을 <code>public</code>폴더로 옮긴다.
옮긴 폴더 구조는 아래와 같다.

```
ㄴ src
ㄴ public
  ㄴ posts
    ㄴ images
      ㄴ post-image.jpg
    ㄴ index.json
    ㄴ post.md
  ㄴ index.html
  ㄴ favicon.ico
```


### Axios를 이용해 Static 파일 호출하기
<code>public</code>폴더로 옮긴 <code>static</code>파일은 <code>http</code>요청을 통해 사용한다.  
<code>HTTP</code>요청에 사용할 <code>axios</code>를 설치한다.

```
yarn add axios
```

> #### 🔎 <code>axios</code> ?
> - 뷰에서 권고하는 HTTP 통신 라이브러리
> - Promise 기반
> - 상대적으로 다른 HTTP 통신 라이브러리들에 비해 문서화가 잘되어 있고 API가 다양하다.
> - JSON 데이터 자동 변환  
> 
> <cite class="refer">
>   - [AXIOS](https://axios-http.com/kr/docs/intro)
>   - [joshua1988 - Cracking Vue.js](https://joshua1988.github.io/vue-camp/vue/axios.html#%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%89%E1%85%B5%E1%84%8B%E1%85%A9%E1%84%89%E1%85%B3-%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5)
> </cite>

<code>Main.vue</code>와 <code>PostDetail.vue의</code> <code>import</code>구문을 <code>axios</code>로 아래와 같이 변경했다.

##### 📃 src/router/views/Main.vue

```html
<template>
  <container-comp>
    <post-list :posts="posts" />
  </container-comp>
</template>

<script>
import axios from 'axios'
import ContainerComp from '@/components/layout/Container.vue'
import PostList from '@/components/PostList.vue'

export default {
  components: {
    ContainerComp,
    PostList
  },
  data() {
    return {
      posts: [],
      baseUrl: process.env.VUE_APP_BASE_URL,
    }
  },
  created() {
    axios.get(`${this.baseUrl}/posts/index.json`)
      .then(res => this.posts = res.data)
      .catch(e => console.log(`ERROR🙄 ${e.response.status} : ${e.request.responseURL}`))
  }
}
</script>
```

##### 📃 src/router/views/PostDetail.vue
```html
<template>
  <div v-html="contents"></div>
</template>

<script>
import axios from 'axios'
import htmlConverter from "@/utils/htmlConverter";

export default {
  data() {
    return {
      contents: null,
      baseUrl: process.env.VUE_APP_BASE_URL,
    }
  },
  created() {
    const param = this.$route.params.title
    axios.get(`${this.baseUrl}/posts/${param}.md`)
      .then(res => this.contents = htmlConverter(res.data))
      .catch(e => console.log(`ERROR🙄 ${e.response.status} : ${e.request.responseURL}`))
  },
}
</script>
```
여기서 <code>process.env.VUE_APP_BASE_URL</code>은 환경 설정 파일에 내가 설정한 base url이다.  

<code>baseUrl</code>없이 <code>axios.get(`/posts/index.json`)</code>로 입력해도 json 파일을 호출할 수 있긴하나 [baseUrl을 삽입하는것을 추천](https://medium.com/@negarjf/how-to-access-a-static-json-file-in-vue-cli-3-8943dc343f95)한다고 한다.  
환경 설정은 루트 경로에 .env파일을 생성해 작성 할 수 있다.

### 환경 파일 설정하기

> #### 🔎 <code>.env</code> ?
> - 환경 설정 변수들을 지정하여 어플리케이션 로직, 웹팩 빌드 옵션에 활용할 수 있다.
> - 환경 설정 변수를 활용하기 위해서는 webpack에 추가 설정이 필요하나, Vue Cli 3 이상부터는 변수 앞에 <code>VUE_APP_</code>를 붙여주면 Vue Cli가 자동으로 설정해준다.
> - 종류
>    - .env : 모든 케이스에 적용
>    - .env.local : 모든 케이스에 적용, git에서는 제외됨
>    - .env.[mode] : 특정 모드에서만 적용 (development / test / production)
>    - .env.[mode].local : 특정 모드에서만 적용, git에서는 제외됨
> 
> <cite class="refer">
>   - [Vue CLI - Environment Variables](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables)
>   - [joshua1988 - Cracking Vue.js](https://joshua1988.github.io/vue-camp/deploy/env-setup.html#env-%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF)
> </ci>

따라서 나는 로컬에서만 사용할 <code>.env.local</code>과 <code>.env.production</code> 파일 두개를 생성해 아래와 같이 작성했다.

##### 📃 .env.local
```
VUE_APP_TITLE=local | DEV BLOG
VUE_APP_BASE_URL=http://localhost:6060
PORT=6060
```

##### 📃 .env.production
```
VUE_APP_TITLE=DEV BLOG
VUE_APP_BASE_URL=https://sssjsjj.github.io
```
나는 <code>VUE_APP_TITLE</code>도 지정해놨는데 <code>public/index.html</code>에서 <code>title</code>값을 해당 변수명으로 아래와 같이 지정해주면 사이트 타이틀값이 해당 변수 값으로 적용된다.

##### 📃 public/index.html
```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= VUE_APP_TITLE %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= VUE_APP_TITLE %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

이렇게 <code>static</code> 파일들을 <code>axios</code>로 가져오도록 로직을 변경하고,
더이상 필요없어진 <code>raw-loader</code> 패키지를 제거하고 <code>vue.config.js</code>에 관련 설정을 제거해줬다.

### Next
HTTP 요청을 위해 컴포넌트 마다 axios를 import하고있다.  
또 PostDetail.vue에서도 현재는 md만 내용을 가져왔지만, 포스팅의 정보도 상단에 표시해야하기때문에 특정 포스팅의 정보를 가져와야한다.  
그렇게 되면 Main.vue와 겹치는 로직이 더 많아지게된다.  
따라서 다음 포스팅에서는 HTTP 요청 관련 모듈을 만들어보려고 한다.
- - -

<cite class="refer">
[How to access a static JSON file in Vue CLI 3?](https://medium.com/@negarjf/how-to-access-a-static-json-file-in-vue-cli-3-8943dc343f95)
</cite>
