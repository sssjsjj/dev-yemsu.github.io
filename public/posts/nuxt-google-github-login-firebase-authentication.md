


### Firebase Authentication 설정하기

[Firebase 메인](https://firebase.google.com/?hl=ko)에서 시작하기 버튼 클릭

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i50g-230125-105020.png" alt="Firebase 웹사이트 메인 화면" />
  <figcaption>클릭!</figcaption>
</figure>

프로젝트가 없다면 프로젝트를 추가하고 이미 생성되어 있다면 해당 프로젝트를 선택한다.

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i1g-230125-110159.png" alt="Firebase 프로젝트 리스트 페이지" />
  <figcaption>저는 이미 2개가 있어요</figcaption>
</figure>

프로젝트 개요페이지에서 Authentication '시작하기' 버튼 클릭

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i46g-230125-104635.png" alt="Firebase 프로젝트 개요 페이지" />
  <figcaption>Authentication 기다려</figcaption>
</figure>

#### 이메일/비밀번호 인증 설정

이메일/비밀번호는 사용 설정만 활성화 시켜주면 된다.

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i17g-230125-111703.png" alt="Firebase Authentication 인증 설정 페이지" />
  <figcaption>이메일/비밀번호 클릭</figcaption>
</figure>

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i18g-230125-111827.png" alt="이메일/비밀번호 사용 설정 페이지" />
  <figcaption>사용 설정 활성화 후 저장</figcaption>
</figure>

#### 구글 인증 설정

구글은 사용 설정 활성화 후 이메일 기입 후 저장.

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i19g-230125-111939.png" alt="Firebase Authentication 인증 설정 페이지" />
  <figcaption>사용 설정 활성화 후 저장</figcaption>
</figure>

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i20g-230125-142056.png" alt="구글 사용 설정 페이지" />
  <figcaption>'프로젝트의 공개용 이름'은 자동으로 생성되고, '프로젝트 지원 이메일'만 기입해준다.</figcaption>
</figure>


#### 깃헙 인증 설정

깃헙은 클라이언트 ID와 클라이언트 보안 비밀번호를 기입해줘야 하는데, 요건 깃헙에서 별도 설정을 해줘야한다.

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i36g-230125-143622.png" alt="깃헙 사용 설정 페이지" />
  <figcaption>'프로젝트의 공개용 이름'은 자동으로 생성되고, '프로젝트 지원 이메일'만 기입해준다.</figcaption>
</figure>

깃헙 우측 상단에 본인 프로필 클릭 후 'Setting' 메뉴 선택 > 'Developer settings' 메뉴 선택
<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i48g-230125-144806.png" alt="" />
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i48g-230125-144839.png" alt="" />
  <figcaption>메뉴 선택, 선택</figcaption>
</figure>

'OAuth Apps' 메뉴 선택 후 'Register application' 버튼 클릭

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i50g-230125-145029.png" alt="" />
  <figcaption>'프로젝트의 공개용 이름'은 자동으로 생성되고, '프로젝트 지원 이메일'만 기입해준다.</figcaption>
</figure>

>  **OAuth란** 다른 사이트의 계정 정보의 접근 권한만 받아 해당 계정을 이용해 로그인할 수 잇게 해주는 기능. 즉, 구글이나 깃허브 계정으로 가입한 사용자에게는 별도의 아이디나 비밀번호를 가입자에게 요구하지 않아도 된다.

아래 화면 처럼 어플리케이션 정보를 입력하는 폼을 만나게 되는데, 'Authorization callback URL'은 Firebase 깃헙 사용 설정에 있던 승인 콜백 URL을 복사하여 붙여넣어주면 된다. 

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i53g-230125-145336.png" alt="" />
  <figcaption>입력후 Register application!</figcaption>
</figure>

이제 'Client ID'와 'Client secrets'를 카피하여

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i0g-230125-150028.png" alt="" />
  <figcaption>깃헙! 참 귀찮았다. 하지만 고마워</figcaption>
</figure>

아래와 같이 Firebase 깃헙 사용 설정 폼에 입력 후 저장해주면 된다.

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i2g-230125-150233.png" alt="" />
  <figcaption>후후</figcaption>
</figure>

#### SDK 설정 및 구성

이제 프로젝트 설정에 들어가서

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i39g-230125-153903.png" alt="" />
  <figcaption>후후</figcaption>
</figure>

프로젝트의 SDK 설정에 대한 내용을 확인할 수 있다.

<figure>
  <img src="/posts/images/nuxt-google-github-login-firebase-authentication/i40g-230125-154012.png" alt="" />
  <figcaption>후후</figcaption>
</figure>

> **SDK?**

> 소프트웨어 개발 키트(Software Development Kit, SDK)는 (일반적으로) 하드웨어 플랫폼, 운영 체제(Operating System, OS) 또는 프로그래밍 언어 제작사가 제공하는 일련의 툴입니다.

> 소프트웨어 개발자는 SDK를 활용하여 특정 플랫폼, 시스템 또는 프로그래밍 언어에 따라 애플리케이션을 개발할 수 있습니다. 이를 직접 조립할 수 있는 옷장에 포함되어 있는 도구 키트라고 생각하시면 쉬울 것 같습니다. SDK는 애플리케이션 개발에 사용된다는 것만 다를 뿐입니다. 작업 완료에 필요한 요소 또는 개발 툴은 제공되지만 키트에 포함된 내용물은 제작사마다 다릅니다. 

> 📌 출처 [SDK의 개념, 플랫폼, 차이점, 개발, 사용언어 및 사용법 | Red Hat](https://www.redhat.com/ko/topics/cloud-native-apps/what-is-SDK)

### 프로젝트에 기능 추가

이제 프로젝트에 Firebase를 세팅하고 기능을 구현해본다.

#### Firebase 설치/세팅

firebase 패키지를 설치해주고

```
yarn add firebase
```

위에서 확인했던 Firebase SDK 설정 코드를 그대로 복사해서 프로젝트에 새파일로 생성한다. 나는 plugins 폴더에 생성했다.

보안 키값들은 그대로 노출되면 안되니, 환경 변수로 설정해준다.

Nuxt에서는 nuxt.config.js에 환경변수를 설정해야하는데, nuxt.config.js도 github에 올라가는 파일이니,
.env파일에 환경변수 설정 후 다시 nuxt.config.js에서 .env파일에 정의한 환경변수를 값으로 지정해줬다.

#### 📃 src/plugins/firebase.js

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.fbApiKey,
  authDomain: process.env.fbAuthDomain,
  projectId: process.env.fbProjectId,
  storageBucket: process.env.fbStorageBucket,
  messagingSenderId: process.env.fbMessagingSenderId,
  appId: process.env.fbAppId,
  measurementId: process.env.fbMeasurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
```

그리고 원하는 곳에 로그인 버튼과 기능을 구현해준다. 러프하게 기능만 구현해 본 내용이다.

#### 📃 src/pages/login/index.vue

```html
<template>
  <section>
    <h2>로그인</h2>
    <template v-if="!isLogin">
      <button @click="onClickLogin('google')">구글 로그인</button>
      <button @click="onClickLogin('github')">깃헙 로그인</button>
    </template>
    <template v-else>
      <p>{{ userEmail }}</p>
      <p>{{ userName }}</p>
      <button @click="onClickLogout()">로그아웃</button>
    </template>
  </section>

</template>

<script>
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/plugins/firebase"

export default {
  data() {
    return {
      emailInputValue: '',
      userEmail: null,
      userName: null,
      isLogin: false
    }
  },
  methods: {
    async onClickLogin(serviceName) {
      const LoginData = await this.snsPopupLogin(serviceName)      
      if(!LoginData) return
      this.isLogin = true
      this.userEmail = LoginData.user.email
      this.userName = LoginData.user.displayName
    },
    async snsPopupLogin(serviceName) {
      let provider
      if(serviceName === 'google') {
        provider = new GoogleAuthProvider()
      } else if(serviceName === 'github') {
        provider = new GithubAuthProvider()
      }

      try {
        const res = await signInWithPopup(auth, provider)
        return res
      } catch(e) {
        if(e.code.includes('popup-blocked')) {
          alert('팝업 차단 해제 후 로그인 해주세요!')
        } else {
          console.error('snsPopupLogin : ', e, e.code)
        }
      }    
    },
    onClickLogout() {
      try {
        auth.signOut()
        this.isLogin = false
        this.userEmail = null
        this.userName = null
      } catch(e) {
        console.error('로그아웃 실패 : ', e)
      }
    },
  }
}
</script>
```

firebase auth 관련하여 더 많은 기능들은 [api 명세](https://firebase.google.com/docs/reference/js/v8/firebase.auth)를 참고하면된다.

### 마주쳤던 이슈들

#### 팝업 차단

아무래도 sns 로그인 진행이 페이지가 넘어가는 것보다는 팝업이 띄워지는게 자연스럽다고 생각했기 떄문에 팝업으로 설정했는데,
사이트 팝업 설정이 차단되어 있으면 그대로 에러가 발생하게 된다.

이때 예외처리가 필요한데, <code>signInWithPopup</code> 메서드에서 에러가 발생했을때 뱉는 에러 코드를 확인해서 케이스별로 처리할 수 있다.

에러코드 종류가 궁금하다면 [API 명세에 signInWithPopup 메서드](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithpopup)를 확인하면 된다. 미처 예상치 못한 에러코드들도 확인하고 예외처리 할 수 있어 좋을 듯 하다.

#### auth/account-exists-with-different-credential

내 경우는 깃헙 계정이 구글 이메일이라서 구글 로그인 후, 깃헙 로그인을 하려고 하면 이미 존재하는 이메일이라고 에러가 났다. [공식문서에 예외처리 코드](https://firebase.google.com/docs/auth/web/google-signin?hl=ko#handling-account-exists-with-different-credential-errors)까지 잘 정리되어있으니 참고하면 좋겠다.


---

### 참고

- [Do it! 클론 코딩 트위터](http://www.yes24.com/Product/Goods/103190780)
- [Firebase 공식 문서](https://firebase.google.com/docs/auth/web/start?hl=ko)