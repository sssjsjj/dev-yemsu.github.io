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
  <img src="posts/images/vue-cli-4-import-markdown-convert-to-html/success-load-md-file.jpg" alt="정상적으로 호출되고 있는 마크다운">
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
  <img src="posts/images/vue-cli-4-import-markdown-convert-to-html/success-convert-md-to-html.jpg" alt="html로 잘 변환된 마크다운">
  <figcaption>html로 잘 변환된 마크다운</figcaption>
</figure>

- - -

이렇게 마크다운 파일을 import하고 HTML로 convert 해보았다.  
그런데 마크다운, 이미지같이 별다른 가공이 필요하지 않은 static 파일들은 컴파일 과정이 필요없다.  
따라서 나는 raw-loader로 마크다운을 import하는 방법에서 public폴더로 옮기고 axios로 마크다운파일을 가져오도록 변경했다.  
자세한 내용은 다음 포스팅에 정리하도록 하겠다.
