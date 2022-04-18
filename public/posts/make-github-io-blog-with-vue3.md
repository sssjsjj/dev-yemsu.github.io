

#### 검색 엔진에 등록하기
어느정도 기본 틀이 잡혔으니 검색엔진에 블로그를 등록해보려고 한다.

아래 블로그를 보고 진행하였다!
<cite>[워드퍼블 - 구글 블로거 네이버 웹마스터 도구 등록](https://wordpubl.com/%EA%B5%AC%EA%B8%80-%EB%B8%94%EB%A1%9C%EA%B1%B0-%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%9B%B9%EB%A7%88%EC%8A%A4%ED%84%B0-%EB%8F%84%EA%B5%AC-%EB%93%B1%EB%A1%9D/)</cite>

##### 네이버
[네이버 Search Advisor](https://searchadvisor.naver.com/)에 접속


vuepress도 시도, nuxt에 대해서도 알아봤으나
규모가 크지않고 정적인 웹사이트에 사용할 용도라 prerenderer, vue-meta사용하기로 결정.
prerenderer셋팅하고.
sitemap 생성기로 vue-cli-plugin-sitemap 적용하려고함.
그런데 routes를 가져와서 써야해서
router 내부에 routes를 es모듈로 분리하고
vue.config.js에서 불러오려고 하는데 esm이 commonjs방식에서 호출이 안되는것같음 
Unexpected token 'export' 이란 에러가 뜸. (require = require('esm')(module);)
가이드 방식이 옛날껀가..?
좀더 알아보다가. vue-router-sitemap을 알게됐고 star수도 더 많다.
이것도 안됨.
vue-cli-4라서 그런지 관련 문서나 패키지가 많이 없다.
확실히 리액트는 패키지나 문서도 훨씬 많구나.
구글링 하다가 vue가 아닌 webpack 플러그인으로 sitemap.xml생성기가 있다. 좀더 세부적으로 내용을 적어줘야하는것같긴하지만..?
테스트해봤고 생성이 잘 됐다.
https://stackoverflow.com/questions/68460745/adding-a-sitemap-to-a-vuejs-application

테스트를 위해 값을 직접 입력했지만 자동으로 끌어올 수 있게 리팩토링 해보자.

세상에 ㅠ_ㅠ
public에 있는 posts.json을 가져와서 prerender랑 sitemap에 가공된 값을 넘겨주려고 했다.
그런데 posts.json http콜로 가져와야 한다고 생각해서 온갖 삽질을 다했다.
왜 그렇게 생각했지? 진짜 뭐가 씌었었나보다.
build과정에 비동기가 들어가니까 모든 절차가 끝난뒤에 비동기 함수들이 실행됐다.
온갖 에러를 검색해보고 점점 나는 산으로 갔다.

그러다가 그냥 플러그인 적용 사례를 찾아보면 그 중에 하나는 동적으로 routes값을 삽입하지않겠나 하는 생각이 들었고 찾아보다가. 그것도 엄청 찾아보다가
우연히 json을 그냥 require로 가져오는 코드를 봤다.
그렇게 허무하게 코드는 잘 돌아갔다.
세상에 시작이 틀어져서 몇시간을 고민했는줄 모른다.

또 지금 해놓은 방식도 좋은 방식인지 잘 모르겠다.
후. 우선 포스팅이 추가되면 파일 하나만 수정하면 된다는것에 정말 감사하다 ㅠ_ㅠ


무턱대고 하고싶은거 하려니까 정말 삽질이 말도못한다.
이 방식대로 개발하는게 맞는건지도 의심된다.
강의를 먼저듣고 강의내용을 바탕으로 나만의 프로젝트를 만드는게 가장 효율적이려나..?

이제 vue-meta를 ! 이건 아마 금방 되지않을까!!!!!!

postDetail에 작업중.
https://pozafly.github.io/html/meta-tag-and-vue-meta/
e
대박.vue-meta는 vue2까지만 된단다 열심히 해놓고보니까안됨
vue-3-meta로 버전3용은 따로 있다.
https://www.npmjs.com/package/vue-3-meta

그런데 설치는 vue-meta로 똑같다.
vue-meta로 메타태그적용하려고 하였으나 데이터를 불러온 후 데이터값 삽입이 안됐다.
(자세한 내용 vue-meta 포스팅)

며칠동안 파도 안되길래 prerender 설정에서 뭔가 할 수 있지 않을까해서 찾아봤다.
https://mygumi.tistory.com/385
위 블로그 보고 적용했고 빌드해서 확인해보니 잘된다.

이모지 파비콘 등록했다
https://css-tricks.com/emoji-as-a-favicon/