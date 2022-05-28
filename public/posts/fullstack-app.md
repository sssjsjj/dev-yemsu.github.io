풀스택 앱을 만들어보자!!!!!!!!
vue 프로젝트를 생성해서 작업하다가 데이터를 저장하고 보내고 받고 할 수 있는 데이터 베이스가 먼저 있어야겠다고 생각했다.
그래서 node.js express mongoDB로 백엔드를 구축할 수 있는 튜토리얼을 보고 했는데... 근데 배포는? 배포까지는 안나와있었다.
로컬로 돌려서 서비스쪽이 실행되면 클라이언트딴에서 그 로컬 경로를 http요청을 해서 데이터를 받아왔는데... 아직 내가 전체적인 프로세스를 완벽히 이해하질 못해서그런지 그 다음을 잘 모르겠다.

그래서 배포관련된 글을 찾아보다가 AWS라는 키워드가 많이 나왔다. AWS는 보기는 많이 봐봤는데 정확히 알진 못했다.
이것저것 찾아보다보니 프론트엔드 개발자가 풀스택 어플리케이션을 구축할 수 있도록 해주는 AWS Amplify를 알게됐고.
AWS사이트에 튜토리얼이 잘 나와있어서 따라해보기 시작했다. 
일단 Vue 튜토리얼은 없고 REACT IOS ANDROID Flutter 가 있어서 해당 튜토리얼로 시작했다.
https://aws.amazon.com/ko/getting-started/hands-on/build-react-app-amplify-graphql/?e=gs2020&p=frontend 

 Amplify 라이브러리 설치할때
 ```
 npm install aws-amplify @aws-amplify/ui-react
 ```

 설치했더니 

``` 
npm WARN ERESOLVE overriding peer dependency
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint@8.16.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-scope@7.1.1',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-plugin-testing-library@5.5.1',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0', npm: '>=6' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-visitor-keys@3.3.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'espree@9.3.2',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'jest-watch-typeahead@1.1.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/eslintrc@1.3.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@typescript-eslint/eslint-plugin@5.26.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@typescript-eslint/experimental-utils@5.26.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@typescript-eslint/parser@5.26.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@typescript-eslint/scope-manager@5.26.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@typescript-eslint/types@5.26.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@typescript-eslint/typescript-estree@5.26.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@typescript-eslint/utils@5.26.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@typescript-eslint/visitor-keys@5.26.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@typescript-eslint/type-utils@5.26.0',
npm WARN EBADENGINE   required: { node: '^12.22.0 || ^14.17.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.16.0', npm: '8.11.0' }
npm WARN EBADENGINE }
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated uglify-es@3.3.9: support for ECMAScript is superseded by `uglify-js` as of v3.13.0

added 1097 packages, removed 13 packages, changed 71 packages, and audited 2516 packages in 4m

216 packages are looking for funding
  run `npm fund` for details

16 vulnerabilities (10 moderate, 5 high, 1 critical) 

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
 ```

 쭉 따라하다가 로컬서버실행해보래서 했더니
 ```
 'AmplifySignOut' is not exported from '@aws-amplify/ui-react'
 ```
 에러가 떠서 검색해봤다. 튜토리얼이 너무 옛날꺼라 @aws-amplify/ui-react를 1.2.5로 다운그레이드 해야한다고한다. 지금 2.18.2인데,,,,
 https://stackoverflow.com/questions/70036160/amplifysignout-is-not-exported-from-aws-amplify-ui-react

튜토리얼 버전2ㄹ를 봐보라는 말도 있어서 확인해봤다. https://ui.docs.amplify.aws/react/components/authenticator

따라했고 브라우저에서 콘솔에러가 뜨고있어서 서치해봤따. 나랑 완전같은 에러.
https://stackoverflow.com/questions/63605779/autherror-error-amplify-has-not-been-configured-correctly
App.js에 이것저것 추가해야한대서 그대로 했다.

대박사꼰! 됐다!

배포해서 확인해보려했는데 자꾸 빌드에러가 떠서 보니까
Can't resolve './aws-exports'
요런 문제가 ㅠ 로컬에서는 잘되는데....
이렇게 저렇게 해보다가.....
여기 댓글에서 저 import하는 구문을 빼버렸는데 걍 문제없이 잘됐다고한다.
..!?!!?!?!?!?!?!/
바로시도해봄.
실패 ^^

그러다 또 .gitignore에 aws-exports.js가 있다고 그걸 제거하니까 됐다는 댓글이 있어서 시도!
그렇다! 그러면 로컬에서는 되고 원격에서는 안되는게 말이된다!
빌드해보니 성공!!!!!!!!!! ㅠ.ㅠ.ㅠㅠ.완전싱기

모듈 3: 인증추가 단계 끝!
https://aws.amazon.com/ko/getting-started/hands-on/build-react-app-amplify-graphql/module-three/ 





고다음 갑시다.
https://aws.amazon.com/ko/getting-started/hands-on/build-react-app-amplify-graphql/module-four/?e=gs2020&p=build-a-react-app-three

하 겉잡을 수 없는 에러.
최신 튜토리얼인가 이거..!? 내일 해보자.
https://docs.amplify.aws/start/getting-started/setup/q/integration/react/


엇 vue 튜토도 있어서 해본다.
https://docs.amplify.aws/start/q/integration/vue/?sc_icampaign=vue-start&sc_ichannel=docs-home

영어만 있어서 번역.
### Getting started
오픈소스인 Amplify Framework는 iOS, Android, Flutter, Web 그리고 React Native 의 fullstack 앱을 만들기 위해 아래 제품들을 제공합니다.
- Amplify [CLI](https://docs.amplify.aws/cli/): 간단한 커맨드 라인 인터페이스로 백엔드를 만드는데에 필요한 서비스들을 정의할 수 있습니다.
- Amplify [Libraries](https://docs.amplify.aws/lib/q/platform/js/): 선언적인 인터페이스를 사용한 백엔드와 당신의 앱 코드를 통합하기위해 케이스 중심 라이브러리들을 사용합니다.
- Amplify [UI Components](https://docs.amplify.aws/ui/q/framework/vue/): React, React Native, Angular, Ionic, Vue, Flutter에 대한 UI 라이브러리들 입니다.

Amplify [Console](https://aws.amazon.com/ko/amplify/hosting/)은 풀스택 웹 앱의 지속적인 배포&호스팅을 위해 git 기반의 워크플로우를 제공하는 AWS 서비스 입니다. Amplify CLI로 생성되는 클라우드 리소스들도 Amplify Console에서 볼 수 있습니다.

#### What we'll build
이 튜토리얼은 백엔드를 세팅하고 그 백엔드를 당신의 웹 앱과 통합하는 법에 대한 가이드입니다. 당신은 GraphQL API로 이루어져있고 클라우드 데이터 베이스에 아이템을 저장하고 검색할 수 있는 Todo 앱을 만들 것 입니다. 또 실시간으로 submit된 내용들을 update할 수 있습니다.

[GraphQL](https://graphql.org/)은 API로부터 데이터를 fetch하는 앱을 만들 수 있게 해주는 데이터 언어입니다. GraphQL은 선언적이고 자체 문서화가 가능한 스타일입니다. GraphQL 작업에서는 서버에서 return될 때 데이터가 어떻게 구조화되어야하는지 클라이언트가 지정해줍니다. 이런 방식은 필요한 형식으로, 필요한 데이터만 클라이언트가 가져올 수 있도록 해줍니다.