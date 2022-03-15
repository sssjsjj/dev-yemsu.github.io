### Sass 설치
<code>sass</code>와 <code>sass-loader</code>를 설치합니다.
```
yarn add sass sass-loader@10 -D
```

### sass-loader@10?
<code>sass-loader</code>에 <code>@10</code>을 붙여 버전 10을 설치하는 이유는 아래와 같습니다.

> Webpack 버전 4(Vue CLI 4의 default)를 사용할때엔 loader가 호환되는지 확인해야 합니다. 그렇지 않으면 peer dependencies 충돌로 인한 에러가 발생합니다. 이럴때엔 Webpack 4와 호환되는 예전 버전을 설치하세요.
>
> [Vue CLI - Pre-Processors](https://cli.vuejs.org/guide/css.html#pre-processors)

### Sass 적용하기
Vue CLI 내부에 Css 전처리기에 대한 Webpack 설정이 이미 되어있기 때문에 별다른 세팅은 필요없고 컴포넌트 내부에서 아래와 같이 <code>style</code>태그에 어 설정만 해주면 됩니다.

```html
<style lang="scss">
  @import '@/assets/style/common.scss';
</style>
```
#### 삽질.log 💦
- <code>@import url('')</code>로 import 했다가 css로 컴파일이 안돼서 한참을 삽질. ^.ㅠ   
