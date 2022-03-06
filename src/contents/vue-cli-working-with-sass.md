## sass 설치
<code>sass</code>와 <code>sass-loader</code>를 설치합니다.
```
yarn add sass sass-loader@10 -D
```

## sass 설치
<code>sass-loader</code>에 <code>@10</code>을 붙여 버전 10을 설치하는 이유는 아래와 같습니다.

> <code>webpack</code> 버전 4(Vue ClI 4의 default)를 사용할때엔 loader가 호환되는지 확인해야 합니다. 그렇지 않으면 peer dependencies 충돌로 인한 에러가 발생합니다. 이럴때엔 <code>webpack</code> 4와 호환되는 예전 버전을 설치하세요.
>
> [Vue Cli](https://cli.vuejs.org/guide/css.html#pre-processors)

설치만 해주면 끝이예요.  
<code>Vue Cli</code> 내부에 <code>css</code> 전처리기에 대한 <code>webpack</code> 설정이 이미 되어있기 때문에 별다른 세팅은 필요없고  
vue 컴포넌트에서 아래와 같이 언어 설정만 해주면 됩니다.

```html
<style lang="scss">
@import '@/assets/style/common.scss';
</style>
```
- - -
언제 한번 저도 모르게 <code>@import url('')</code>로 했다가 컴파일이 안돼서 하안참을 삽질했던 기억이 ㅎ ^_ㅠ