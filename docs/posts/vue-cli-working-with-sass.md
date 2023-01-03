### 설치
<code>sass</code>와 <code>sass-loader</code>를 설치합니다.

```
yarn add sass sass-loader@10 -D
```

#### 🔎 sass-loader@10?
<code>sass-loader</code>에 <code>@10</code>을 붙여 버전 10을 설치하는 이유는 아래와 같습니다.

> Webpack 버전 4(Vue CLI 4의 default)를 사용할때엔 loader가 호환되는지 확인해야 합니다. 그렇지 않으면 peer dependencies 충돌로 인한 에러가 발생합니다. 이럴때엔 Webpack 4와 호환되는 예전 버전을 설치하세요.
>
> <cite>[Vue CLI - Pre-Processors](https://cli.vuejs.org/guide/css.html#pre-processors)</cite>

### 사용
Vue CLI 내부에 Css 전처리기에 대한 Webpack 설정이 이미 되어있기 때문에 별다른 세팅은 필요없고 컴포넌트 내부에서 아래와 같이 <code>style</code>태그에 어 설정만 해주면 됩니다.

```html
<style lang="scss">
  @import '@/assets/style/common.scss';
</style>
```

### 전역 스타일
전역으로 지정한 scss 파일은 모든 컴포넌트마다 호출됩니다.
##### 📃 vue.config.js

```
module.exports = {
  outputDir: 'docs',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/style/global.scss";`
      }
    }
  }
}
```

##### 📃 src/assets/style/global.scss

```
@import './var.scss';
@import './mixins.scss';
```

vs code에서 <code>import</code>가 자동완성 되길래 그대로 썼었는데 css로 컴파일이 안돼서 한참을 삽질했었는데
알고보니 <code>@import url('')</code>로 되어있었답니다. ㅎ

<cite class="refer">[Vue CLI - Passing Options to Pre-Processor Loaders](https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders)</cite>

#### Global !== Common
전역 스타일은 사이트 공통 스타일과 동일한 개념으로 생각하면 안됩니다.  
전역 스타일은 변수나 <code>mixin</code> 같은 특정한 값에 대한 정의들을 매번 <code>import</code> 없이 간편히 꺼내쓰기 위함입니다.
<code>common.scss</code>, <code>reset.scss</code>같은 공통 스타일을 전역 스타일로 적용하면 컴포넌트마다 해당 코드가 불필요하게 삽입됩니다.  
공통 스타일은 <code>App.vue</code>에 <code>scoped</code> 설정 없이 삽입하면 됩니다.  
