### Import Markdown

우선 마크다운 파일 호출을 위해 Webpack 일반 텍스트 파일 로더인 [raw-loader](https://v4.webpack.js.org/loaders/raw-loader/)를 설치한다.

```
yarn add raw-loader -D
```


##### 📃 vue.config.js
md파일 <code>loader</code>로 <code>raw-loader</code>를 지정해준다.

```
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md?$/)
      .use('raw-loader')
        .loader('raw-loader')
        .end()
  },
}
```

Vue 컴포넌트에서 테스트로 md파일을 하나 import하고 template에 데이터를 바인딩한다.

```html
<template>
  <div>
    {{ contents }}
  </div>
</template>

<script> 
import post from "../../public/posts/make-github-io-blog-with-vue3.md";

data() {
  return {
    contents: post
  }
}
</script>
```

마크다운 내용이 정상적으로 호출 된다.

<figure>
  <img src="/posts/images/vue-cli-4-import-markdown-convert-to-html/success-load-md-file.jpg" alt="정상적으로 호출되고 있는 마크다운">
  <figcaption>정상적으로 호출되고 있는 마크다운</figcaption>
</figure>

> #### Inline으로 md파일을 호출하고싶다면?
> 만약 vue.config.js파일에서 <code>loader</code>설정없이 파일 하나만 얼렁 호출하고싶다면 경로 앞에  <code>raw-loader!</code>를 붙여주는 방법도 있다.
> ```
> import post from "raw-loader!../../public/posts/make-github-io-blog-with-vue3.md";
> ```

❗ <code>loader</code>설정을 하고 앞쪽에 <code>raw-loader!</code>까지 붙이면 설정이 중복되어
<code>import</code>한 내용이 아래와 같이 <code>export default ""</code>로 한번 감싸진다. 두 방식 중 하나만 적용해야한다.

```
export default "md파일 내용" 
```

- - -

### Convert Markdown to HTML

이제 md파일을 html로 변환하기 위해 [showdown](https://www.npmjs.com/package/showdown)을 설치한다.  
<code>HTML converter</code> 중 star 수가 가장 많았다.

```
yarn add showdown
```


##### 📃 src/utils/htmlConverter.js

패키지 가이드 참고해서 esModule을 임시로 작성했다.

```javascript
import showdown from "showdown";
import post1 from "../../public/make-github-io-blog-with-vue3.md";

const converter = new showdown.Converter()
const postHTML1 = converter.makeHtml(post1)

export {
  postHTML1
}
```

vue컴포넌트 template 내부에서 v-html 디렉티브 사용해서 데이터를 바인딩했다.

```html
<template>
  <div v-html="contents"></div>
</template>

<script> 
import post from "@/utils/htmlConverter";

data() {
  return {
    contents: post
  }
}
</script>
```
html로 잘 노출된다.
<figure>
  <img src="/posts/images/vue-cli-4-import-markdown-convert-to-html/success-convert-md-to-html.jpg" alt="html로 잘 변환된 마크다운">
  <figcaption>html로 잘 변환된 마크다운</figcaption>
</figure>

### 동적으로 import하기
이제 기능은 대략 확인했고, router값에 해당하는 md파일을 불러오도록 코드를 확장했다.
##### 📃 src/utils/htmlConverter.js

우선 테스트용으로 작성했던 <code>htmlConverter</code>는 converter기능만 하도록 수정했다.

```javascript
import showdown from "showdown";

const htmlConverter = (md) => {
  const converter = new showdown.Converter()
  return converter.makeHtml(md)
}

export default { htmlConverter }
```
route.params값에 해당하는 md파일을 가져올거다.
route.params 설정에 대한 자세한 내용은 ["Vue3 Router 사용하기  (+ 동적 라우팅)](vue3-router) 포스팅에 정리해두었다.)

> 첫 번째 제약은 import문에 동적 매개변수를 사용할 수 없다는 것이었습니다.
>
> 두 번째 제약은 런타임이나 조건부로 모듈을 불러올 수 없다는 점이었습니다.
>
> 이런 제약사항이 만들어진 이유는 import/export는 코드 구조의 중심을 잡아주는 역할을 하기 때문입니다. 코드 구조를 분석해 모듈을 한데 모아 번들링하고, 사용하지 않는 모듈은 제거(가지치기)해야 하는데, 코드 구조가 간단하고 고정되어있을 때만 이런 작업이 가능합니다.
>
> import(module) 표현식은 모듈을 읽고 이 모듈이 내보내는 것들을 모두 포함하는 객체를 담은 이행된 프라미스를 반환합니다. 호출은 어디서나 가능합니다.
>
> 코드 내 어디에서 동적으로 사용할 수도 있습니다.
>
> _출처 - [동적으로 모듈 가져오기](https://ko.javascript.info/modules-dynamic-imports)_

몇가지 제약이 있지만 <code>import()</code>라는 표현식으로 코드 내 어디서든 사용할 수 있다고한다.

포스트 상세 페이지 컴포넌트에서 <code>route.params.title</code>값과 동일한 <code>md</code>파일을 <code>import</code>하도록 했다.
<code>import()</code>는 <code>promise</code>객체를 반환하고 <code>.default</code>로 데이터에 접근할 수 있다.
해당 값을 html로 convert해서 <code>this.contents</code>에 할당하도록 작성했다.

promise 객체를 객체 구조 분해 할당으로 바로 default에 담아보려고 했으나 default라는 변수명은 작성할 수 없는 것 같다.

#### 📃 src/router/views/PostDetail.vue
```javascript
<template>
  <div v-html="contents"></div>
</template>

<script>
import htmlConverter from "@/utils/htmlConverter";

export default {
  data() {
    return {
      contents: null
    }
  },
  async created() {
    try {
      const param = this.$route.params.title
      const post = await import(`@/contents/${param}.md`)
      this.contents = htmlConverter(post.default)
    } catch (e) {
      console.log(e)
    }
  },
}
</script>
```


### Next
이렇게 마크다운 파일을 import하고 HTML로 convert 해보았다.  
그런데 마크다운, 이미지같이 별다른 가공이 필요하지 않은 static 파일들은 컴파일 과정이 필요없다.  
따라서 나는 raw-loader로 마크다운을 import하는 방법에서 public폴더로 옮기고 axios로 마크다운파일을 가져오도록 변경했다.  
자세한 내용은 다음 포스팅에 정리하도록 하겠다.

다음 포스팅 - [Vue CLI 4 static 파일 사용하기](vue-cli-4-use-static-file)  