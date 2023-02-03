드디어 4장 타입스크립트!

---

### 타입스크립트를 위한 환경 설정

#### 📃 tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES5",
    "module": "CommonJS",
    "alwaysStrict": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "sourceMap": true,
    "downlevelIteration": true
  }
}
```

compilerOptions에 대한 내용은 공식문서에 나와있고, 엄청나게 많다. 당장 다 보기에는 내용이 너무 방대하니 나중에 디테일이 필요할때 확인해보는 것을 추천한다.

- **strict: false** : 점진적으로 javascript를 typescript로 전환할 수 있는 환경을 제공해줌. true 로하면 타입스크립트가 엄격해지긴하지만 알려주는 사항들이 많아서 편리하다.
- **noImplicityAny: true** : `any` 사용을 금지하고 명확한 타입을 요구한다.
- **sourceMap: true** : 설정은 브라우저에서도 타입스크립트 실행에 대한 정보를 얻을 수 있는 map파일을 생성해주는 옵션이다. - 개발환경과 실행환경을 일치시킬 수 있는 설정


### 변수에 타입 작성하기
하나씩 타입 바꿔보는중.
`for`문에서 `let i`에 타입을 지정하지 않아도 뭐라고 하지 않는다? → 타입 추론. 타입스크립트가 기본적으로 코드를 보고 타입을 추론한다. 

> 타입은 보통 몇 개의 표현식(코드)을 바탕으로 타입을 추론합니다. 그리고 그 표현식을 이용하여 가장 근접한 타입을 추론하게 되는데 이 가장 근접한 타입을 Best Common Type이라고 합니다.

> 📌 출처 [TypeScript: Documentation - Type Inference](https://www.typescriptlang.org/ko/docs/handbook/type-inference.html)

### 함수의 규격 작성하기

함수 타입을 설정해본다. 함수는 객체를 반환할때가 많은데 여러 객체에 대한 타입을 지정하다보면 중복되는 값들이 있다.

이때 공통된 타입들을 따로 빼서 이용할 수 있는데, **인터섹션**이라고 하는 **타입 알리아스**의 기능을 이용한다.

```typescript
type Board = {
  id: number;
  title: string;
  url: string;
  user: string;
  content: string;
}

type NoticeList = Board & {
  comments_count: number;
  points: number;
  read?: boolean; // 물음표는 선택속성 이라는 뜻
}

type NoticeDetail = Board & {
  contents_count: number;
  comments?: NoticeComment[];
}

type NoticeComment = Board & {
  comments?: NoticeComment[];
  level: number;
}
```

`getData`같이 범용으로 쓰이는 함수는 그때마다 리턴하는 객체가 다른데, 그 객체의 타입을 아래처럼 하나 하나 입력해주는 것은 말이 안될 것이다.

```typescript
function getData(url: string): NoticeList[] | NoticeDetail[] {
  ajax.open('GET', url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}
```

이런 상황에서 유용한 **generic**이라는 기술이 있다. 많은 언어들에서 지원하는 기능이나, 유연한 기능이고 난이도가 상황에 따라 매우 높아질 수 있는 기술이다. 그래서 심플하게 이 예제에 맞게만 설명을 해주심.

- 어떤 데이터가 리턴되는지 굉장히 모호한 상황을 해결해주는것.
- 입력이 n개일때 출력도 n개인 유형을 정의하는 것이 제네릭. 입력이 a이면 출력도 a ….

#### 제네릭 관련 글
- [TypeScript: Documentation - Generics](https://www.typescriptlang.org/ko/docs/handbook/2/- generics.html)
- [TypeScript: 제네릭(Generic) | DailyEngineering](https://hyunseob.github.io/2017/01/14/typescript-generic/)


`T`라는 유형을 받고 해당 함수가 `T`유형의 값을 반환하는 것. (반환 타입을 인자로 받는 느낌?)

아래 실제 사용할때 함수명과 괄호 사이에 꺽쇠를 작성하고 그 안에 return되는 값의 타입을 전달해줌.

호출부에서 타입을 지정하면 실제 실행될 때 타입을 그대로 받아서 해당 타입으로 반환.

```typescript
function getData<T>(url: string): T {
  ajax.open('GET', url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

makeNoticeList(getData<NoticeList[]>(NEWS_URL))
```
보통 제네릭 이름을 `T`로 많이 사용하기도하고, 명시적인 이름을 사용하기도 한다. 선생님은 명시적은 이름을 선호하신다고.

#### vscode extension 추천 : REST Client

hm.http 파일을 생성하고 아래와 같이 입력하면 Send Request 버튼이 활성화 된다.

#도 꼭 입력!

Send Request버튼을 클릭하면 오른쪽 패널처럼 응답을 확인할 수 있다.

```
###
GET https://api.hnpwa.com/v0/notice/1.json HTTP/1.1
```

<figure>
  <img src="/posts/images/fastcampus-javascript-typescript-essential-2/i41g-230203-154150.png" alt="vxcode extension - REST Client 실행 화면" />
  <figcaption>이야! 신기</figcaption>  
</figure>

### 타입과 인터페이스

지금까지 타입 알리아스라고 하는 기능을 사용해서 타이핑을 해왔다.

타입 알리아스 말고 인터페이스라는 기능도 있는데.

코드 가독성이 좋아지는 것 같다. 확장되는 형식의 타입들에는 특히 인터페이스를 선호한다고 한다.

#### 타입 알리아스

위에서 작성했던 방식이 타입 알리아스.

```typescript
type Board = {
  id: number;
  title: string;
  url: string;
  user: string;
  content: string;
}

type NoticeList = Board & {
  comments_count: number;
  points: number;
  read?: boolean; // 물음표는 선택속성 이라는 뜻
}

type NoticeDetail = Board & {
  contents_count: number;
  comments?: NoticeComment[];
}
```

#### 인터페이스

```typescript
interface Board = {
  id: number;
  title: string;
  url: string;
  user: string;
  content: string;
}

interface NoticeList extends Board {
  comments_count: number;
  points: number;
  read?: boolean; // 물음표는 선택속성 이라는 뜻
}

interface NoticeDetail extends Board {
  contents_count: number;
  comments?: NoticeComment[];
}
```

유니온 타입인 Atype | Btype 형식으로 타입을 지정해야한다면, 인터페이스는 지원되지 않는 기능이기 때문에 타입 알리아스를 사용해야한다. 그 외에는 인터페이스를 주로 많이 사용하는 경향이 있다고 한다.

바뀌면 안되는 읽기만 하는 속성은 `readonly`로 수정 불가능하게 할 수 있다.

```typescript
interface Board = {
  private id: number;
  private title: string;
  private url: string;
  private user: string;
  private content: string;
}
```

### 상속과 믹스인

api 를 통해 데이터를 가져와 리턴하는 함수를 `extends`를 이용한 클래스 상속으로 리팩토링. 

```typescript
function getData<AjaxResponse>(url: string): AjaxResponse {
  ajax.open('GET', url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

// ...
noticeList = store.noticeList = makeFeeds(getData<NoticeList[]>(NEWS_URL))
```

#### 믹스인
- `class`를 마치 함수처럼, 단독 객체처럼 바라보면서 필요할때마다 확장해나가는 기법
- `class`를 훨씬 독립적인 주체로 바라보기때문에 `class`들을 상하위 관계로 바라보지않는다
- 믹스인은 언어의 문법으로 제공되는게 아니라, 코드 테크닉으로 전개되는 기법이다
- 유연성이 필요할때 믹스인을 사용함.
- 상위 클래스가 여러개이고 싶을때 믹스인을 사용함

#### extends
- 기존 `extends`라는 상속방법은 코드에 적시되어야 하는 상속 방법이다.
- 상속의 관계를 바꾸고 싶으면 코드 자체를 바꿔야한다는 말이다. → 관계를 유연하게 가져갈 수 없음
- `class extends`문법은 다중 상속을 지원하지 않음




타입 스크립트 공식 페이지에도 나와있는 믹스인 함수

믹스인을 구현하는 방법은 여러가지고 있고 요건 그 중 한가지.

```typescript
function applyApiMixins(targetClass: any, baseClasses: any[]) {
  baseClasses.forEach(baseClass => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
      const descriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, name)

      if(descriptor) {
        Object.defineProperty(targetClass.prototype, name, descriptor)
      }
    })
  })
}
```

그리고 `extends`에서 바꾼 `class`들

```typescript
class Api {
  getRequest<AjaxResponse>(url: string): AjaxResponse {
    const ajax = new XMLHttpRequest()
    ajax.open('GET', url, false);
    ajax.send();
  
    return JSON.parse(ajax.response);
  }
}

class NoticeListApi {
  getData(): NoticeList[] {
    return this.getRequest<NoticeList[]>(url);
  }
}

class NoticeDetailApi {
  getData(id: string): NoticeDetail {
    return this.getRequest<NoticeDetail>(id);
  }
}
// typescript에게 두개의 클래스를 합쳤다는 것을 알려줘야. this.getRequest를 사용할 수 있다.
interface NoticeListApi extends Api {}
interface NoticeDetailApi extends Api {}

applyApiMixins(NoticeListApi, [Api])
applyApiMixins(NoticeDetailApi, [Api])
```

믹스인은 좀 번거로운 측면이 있어 일반적인 프로젝트에서는 클래스만 사용해도 큰 문제가 없고, 실제로도 클래스가 많이 사용되고 있다. 하지만 유연성이 필요한 프로젝트에서는 믹스인을 많이 사용하고 개발자 성향에 따라 믹스인을 적극적으로 사용하는 프로젝트도 있다고 한다.


### View class로 코드 구조 개선

일단 클래스를 만들고, 클래스로 만들 함수의 내용들을 일단 `constructor`에 넣어본다.

그리고 `constructor`에 남아야될것, 메서드로 빼야할것들을 위치를 옮겨보며 의사코드를 작성한다.

디테일들을 다듬어준 뒤, 하나씩 디버깅하면서 완성했다.

> **의사코드**: 대략 이런흐름으로 코드가 전개되면 좋을것 같아 라고 문법도 크게 신경쓰지않고 작성해놓은 코드를 말한다.


그리고 코드 디테일. 외부로부터 접근할 속성/함수가 아닌경우엔 

외부라는 범주도 2개로 나눌수있다. 이 2가지 케이스에 대한 속성 접근자가 다르다.

- 클래스 내부 까지:  **private** (자식에서도 접근 불가)
- 상속받은 자식 class 까지: **protected**
- 아예 관련없는 바깥쪽까지: **public** (default)

이부분은 흐름이 좀 빠르기도하고, 완벽히 이해가 안된 부분들도 있어서 다시 봐봐도 좋을 것 같다.


### 파일의 분리, 더욱 성장할 앱을 위한 준비

폴더에 index.ts파일을 만들어서

```javascript
export { default as NoticeDetailView } from './notice-detail-view'
export { default as noticeListView } from './notice-feed-view'
```

이런식으로 하위 모듈들의 `default`를 가져와 이름만 내보낸다.

이랬던 `import`문들이

```javascript
import NoticeDetailView from './page/notice-detail-view'
import NoticeListView from './page/notice-feed-view'
```

이렇게 바뀐다.

```javascript
import { NoticeDetailView, NoticeListView } from './page'
```

이렇게 하면 page 하위 디렉토리 구조에 대해 전혀 신경쓰지 않아도 된다.

추후 페이지가 많아져서 파일명등 경로가 바뀌었다고 하더라도 index.ts에서 경로만 바꾸면 되니까 `import` 하는쪽에서 하나하나 다 바꿔주지않아도 된다는 장점이있어서 많이 사용된다고한다.


### 안전한 전역 상태 관리

`store`를 전역 객체인 `window` 속성으로 지정해둔 상태.

모든 `class`에서 접근가능. 전역 속성은 편리하지만 위험하기도 하다. 어딘가에서 의도치않은 수정. 버그 발생.

때문에  전역 속성은 가능한 사용하지 않는 것이 좋다.

그래서 기존에 전역 속성으로 지정한 `store`를 `class`로 분리한다.

```typescript
export default class Store {
  noticeList: NoticeList[]
  currentPage: number

  constructor() {
    this.noticeList = []
    this.currentPage = 1
  }
}
```

이렇게만 작업되면 다른 클래스에서 `store`의 속성값들을 수정하는 것은 여전히 제어가 안되고있다.

원천적으로 잘못 세팅되는것을 방어해야한다.

```typescript
export default class Store {
  private noticeList: NoticeList[]
  private currentPage: number

  constructor() {
    this.noticeList = []
    this.currentPage = 1
  }
}
```

이렇게 `private` 키워드로 외부에 노출되지 않도록 바꿀 수 있다.

하지만 외부 `class`에서 이 데이터들을 세팅도 하고 읽기도 해야 하는데 현재는 불가능하다.

이럴 때, **세팅과 데이터 읽기에 해당하는 기능을 별도로 제공**해줄 수 있다.

`currentPage`에 대한 내용부터 처리해본다.

해당 데이터를 읽을 수 있는 `getCurrentPage`라는 메서드를 생성할 수 있겠지만, 고작 숫자 하나 가져오는데 메서드가 장황하다.

이럴때 내부에서는 함수로 작동하지만 외부에서는 속성처럼 보이게 하는 `getter`/`setter` 문법이 존재한다.

```typescript
export default class Store {
  private noticeList: NoticeList[]
  private currentPage: number

  constructor() {
    this.noticeList = []
    this.currentPage = 1
  }

  get currentPage() {
    return this._currentPage
  }
}
```

이렇게 `currentPage`에 대한 `getter`를 생성했다.

자세히 보면 속성값에 언더바가 추가되어있는데, `getter`와 속성값이 동일하면 안되기도하고 내부에서 쓰이는 속성은 보통 언더바를 붙인다고 한다.

`currentPage` 는 url의 해시값을 통해, 데이터를 세팅하기도 하기 때문에 `setter`도 설정해줘야한다.

외부에서는 마치 속성인것처럼 대입문으로 세팅도 하거나 속성 값으로 읽어갈 수도 있다. 하지만 내부에서는 함수이기 때문에 잘못된 값으로 세팅되거나 특정한 범위 내의 값으로만 한정시키는 조건들을 지정해줄 수 있다.

예를들면 이렇게.

```typescript
set currentPage(page: number) {
    if(page <= 0) return
    this._currentPage = page
  }
```

대입문으로 값을 넣을 수 없기 때문에 일종의 `readOnly` 데이터라고 볼 수 있다.

이런식으로 필요한 메서드들을 차근차근 추가 후, app.ts에서 `store`를 불러오고 `store`가 필요한 인스턴스에 인자로 `store`를 넘겼다.

각 `class`에 `store` 인수를 추가하고 데이터를 설정하는데, 이때 해당 `store`의 타입을 지정해줘야 하기때문에 또 새로운 인터페이스를 만들어줘야한다.

```typescript
export interface NoticeStore {
  getAllNoticeList: () => NoticeBoard[]
  getNoticeBoard: (position: number) => NoticeBoard
  setNoticeList: (feeds: NoticeBoard[]) => void
  makeRead: (id: number) => void
  hasNoticeList: boolean
  currentPage: number
}
```

이렇게 만들었던 메서드들에 대한 타입을 지정해주는데, 아까 만들었어 `getter`/`setter를` 함수로 만들었다고해서 인터페이스쪽에 함수로 작성하면 안된다. 외부로 드러나는 형식을 기준으로 작성해줘야한다.

이렇게 작성한 인스턴스의 인터페이스를 `Store` 클래스랑 연결시켜줘야한다.

실제 이 인터페이스를 구현한 `class`다 라는 의미로 `implements NoticeStore` 라고 작성해주면된다.

```typescript
export default class Store implements NoticeStore {
  // ...
}
```

어떤 데이터를 수정하는 코드들은 그 역할에 충실할 수 있는 class를 만들어서 제공하면 훨씬 더 안전한 코드를 제공할 수 있다.

코드도 깔끔해지고 코드 양도 줄어들고!

### XHR to Fetch & Promise

- 동기 실행으로 설정되어있던 `XMLHttpRequest`를 비동기 실행으로 설정하고, `getRequest` 메서드를 데이터 return에서 콜백함수를 인자로 받도록 변경했다.
- 해당 메서드를 사용하는 곳에서 데이터를 응답받아 실행되어야하는 로직들을 `getRequest` 콜백함수로 넘겨줬다.
- 하지만 이렇게 콜백으로 실행되면 호출해야하는 api 갯수가 많아질때 콜백지옥이 열릴 수 있기 때문에 Promise를 사용해서 이 문제를 해결해볼 수 잇다.
- xhr이 여러 단점들을 가지고 있어서 그 단점들을 보완하여 이후에 나온 Promise 베이스의 fetch라는 api를 사용한다.
- `fetch`는 `Promise`를 반환하는데 `Promise`는 then이라는 메서드를 제공한다. 요걸 이용해서 콜백헬을 일자로 쭉 펼쳐서 해결할 수 있다.
- `fetch`에서 받은 응답은 json을 parse하는 메서드를 가지고 있다. `JSON.parse` 메서드도 있는데 왜 따로 제공하냐면, **`JSON.parse`는 동기적으로 작동**하기 때문에 데이터가 양이 많을때 parse하는동안 어플리케이션이 멈추게 된다. 하지만 **`fetch` 응답의 json parse메서드는 비동기적**으로 실행된다.
- 비동기 함수를 다루는 패턴은 아주 다양하고, 꾸준한 공부가 필요하다. 여러 문서, 샘플들을 참고하길 바란다.

### 콜백 함수 없는 비동기 코드 작성법

비동기 코드를 어떻게하면 잘 처리할 수 있을까에 대해 많은 고민들이 오랫동안 있어왔다.

그것을 해결하기 위한 방법 중 하나가 위에서 했던 Promise 이고, 또 하나는 `async`/`await` 가 있는데 비동기 방식이지만 코드 형태는 동기와 비슷하다.

typescript에서 `async`/`await`를 설정하려면 tsconfig 설정을 해주야 한다.

target을 없애고 lib을 추가해준다.

```json
{
  "compilerOptions": {
    "strict": true,
		//"target": "ES6", 제거
    "module": "CommonJS",
    "alwaysStrict": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "sourceMap": true,
    "downlevelIteration": true,
    "lib": [ //추가
      "es6",
      "dom"
    ]
  }
}
```

기존 함수 앞에 `async`를 붙여주면 이제 그 함수는 비동기 함수가 된다. `Promise` 객체를 리턴하는 함수가 된다는 뜻.

함수 반환 타입을 `Promise`로 교체하고, `fetch` 앞에 `await` 오퍼레이터를 붙여준다.

```typescript
async request<AjaxResponse>(cb: (data: AjaxResponse) => void): Promise<AjaxResponse> {
    const response = await fetch(this.url)
    return await response.json() as AjaxResponse
}
```

비동기 함수를 호출하는 함수도 비동기 함수여야 한다.

따라서 `request`를 호출 하는 하위 `class`의 `getData`메서드 앞에도 `async`를 붙여주고 반환타입 `Promise`로 설정

```typescript
async getData(): Promise<NoticeList[]> {
  return this.request<NoticeList[]>()
}
```

`async` 함수는 반환값이 없더라도 `Promise` 로 꼭 감싸줘야 한다.

```typescript
async render(): Promise<void> {
  const api = new NoticeDetailApi()
  const { title, content, comments } = await api.getData()

  //...
}
```

이제 함수가 동기 코드화 됐으니까, 기존에 비동기 코드라서 renderView를 따로 만들어서 분리했었던걸 다시 render로 이동시킬 수 있다.

async await는 아주 강력한 기능인데, promise에 대한 이해를 충분히 하고 써야 문제없이 사용할 수 있다.

---

### 후기

- 이번에는 코드를 이관하고 리팩토링하는 작업들이 많아서 그런지 속도가 좀 빨라서 다시 되돌려가며 여러번 봤다.

- generic, implements, as... 바로 이해안되는 개념들도 있었지만, 깊게 파지 않고 우선 대략적으로 이해하고 쭉 진도 나갔다. 나중에 더 보기 표시 해뒀다. 아직 깊게 팔 짬은 아니다.

- 알고 있던 개념들도 뭔가 지식이 더 채워지는 기분! 좋았다.

- 감은 좀 잡히는 기분인데, 토이프로젝트 typescript 쪼꼼씩 이관 도전!?
