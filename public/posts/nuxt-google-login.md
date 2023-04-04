사이드 프로젝트에 로그인 기능을 추가했다. 구글 아이디 없는 사람은 없다고 판단되어 우리는 구글 로그인만 구현하기로 했다. 로그인 구현이 처음인만큼 프론트엔드와 백엔드의 통신 흐름과 `Access Token`/`Refresh Token`에 대해 이해하기 위해 많은 글들을 찾아보았다. `Refresh Token`을 이해하고 구현해보고 싶었지만 아래와 같은 이유로 `Refresh Token`은 추후에 도입하기로 했다. 

- 최대한 빠른 시일내 서비스 오픈
- 중요한 유저 정보를 다루지 않음
- 서비스 규모가 작음


### 🧐 로그인 상태 유지에 대한 고민

자동 로그인이 아닐때 유저의 로그인 상태는 보통 언제까지 지속되어야 할지 고민이됐다. 

#### 1. 다른 사이트들은 어떻게 하나?
사용자가 많은 다른 사이트들은 어떻게 처리하는지 궁금해서 네이버, Github, Netlify 각 사이트에서 테스트해보았다.

- **네이버**
    - 새 탭 생성 시 로그인 유지
    - 브라우저 일괄 종료 시 로그아웃
    - 자동 로그인 옵션 있음
- **Github, Netlify**
    - 직접 로그아웃, 캐시 삭제를 하기 전까지는 로그인 상태가 유지
    - 재부팅해도 로그인 유지
    - 자동 로그인 옵션 없음

Github과 Netlify에서는 쿨하게 그냥 로그인 상태가 계속 유지되는데, 이게 괜찮은걸까 의심이되었다. 중요한 작업은 비밀번호를 확인하기 때문에 괜찮다고 판단한걸까?

우리 사이트는 공용 PC에서 여러명이 들어올 가능성을 고려할만큼 사용자가 많지는 않을테지만, 그래도 로그인 상태가 계속 유지되는것은 아무래도 찝찝하기 때문에 네이버의 방식을 참고하기로 했다.

#### 2. sessionStorage 탭 간 데이터 전송

sessionStorage는 브라우저 탭 단위로 존재하고, localStorage는 캐시 삭제를 하기 전까지는 살아있다. 
그렇다면 **브라우저를 모두 종료했을때는 로그아웃되고, 새 탭을 생성했을때는 로그인이 유지되도록** 어떻게 구현할 수 있을까? 고민하며 구글링해보다가 좋은 글을 발견했다. [sessionStorage 탭 간 데이터 전송](https://medium.com/@ablestor/sessionstorage-%ED%83%AD-%EA%B0%84-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EC%86%A1-b12087d30bff)

`window` 객체에서 스토리지의 변화를 감지할 수 있는 `onstorage`라는 이벤트가 존재했다.
`onstorage`는 다른 탭에서 `localStorage`의 데이터를 변경했을때 감지되는 이벤트이다. 이런 특성을 이용해서 기본적으로 데이터는 `sessionStorage`에 저장하고, `localStorage`는 잠깐 탭간 데이터 전달자로 사용할 수 있었다.
자세한 내용은 위 글에 잘 나와있으니 참고하면 좋을 듯 하다.


### ⚙️ 로그인/회원가입 흐름

우리 사이트의 로그인/회원가입 흐름은 이러하다. 글을 작성하고 있는 나는 프론트를 개발했기 때문에 프론드 위주로 정리되어있다.

#### 1. 로그인/회원가입 공통 흐름

1. _**FE🔸**_ 구글 로그인 버튼 클릭하여 구글 로그인 윈도우 팝업이 뜨면 원하는 계정을 선택한다.
2. _**FE🔸**_ 우리 사이트에 처음 로그인한 구글 계정이라면 개인 정보 제공 동의 여부에 대해 묻고, 허용하면 구글 로그인 api가 토큰을 발급해준다. 
3. _**FE🔸**_ 넘겨 받은 토큰값을 백엔드에 보낸다.
4. _**BE🔹**_ 백엔드에서 해당 토큰값을 바탕으로 유저의 가입 상태를 응답해준다. (`'join'`, `'login'`, `'ban'` 3가지 케이스 사용)

#### 2. 회원가입

5. _**FE🔸**_ 서버로부터 `{type: 'join'}`을 응답 받았다면 회원가입 절차가 시작된다. 
6. _**FE🔸**_ 2번 절차에서 구글에게 발급받은 토큰값을 임시로 `sessionStorage`에 저장한 후, 회원 가입 페이지로 이동시킨다.
7. _**FE🔸**_ 회원 가입 페이지에서 추가적으로 필요한 유저 정보를 입력 받는다. (ex. 닉네임)
8. _**FE🔸**_ 밸리데이션 체크 후 닉네임과 `sessionStorage`에 저장해놨던 구글 로그인 토큰값을 백엔드에 보낸다.
9. _**BE🔹**_ 구글 로그인 토큰값으로 구글 api에게 유저정보를 받아 닉네임과 함께 회원 DB에 추가한다.
10. _**BE🔹**_ 로그인 `Access Token`을 발급해준다.
11. _**FE🔸**_ 발급받은 `Access Token`값을 이용하여 로그인을 처리한다.
12. _**FE🔸**_ `sessionStorage`에 저장해놓았던 구글 로그인 토큰값은 제거한다.

#### 3. 로그인
5. _**FE🔸**_ 서버로부터 `{type: 'login', token: ####}`을 응답 받았다면 로그인 절차가 시작된다.
6. _**FE🔸**_ 발급받은 `Access Token`값을  `sessionStorage`에 저장한다. (새로 고침 시에 해당 값을 체크하여 로그인 상태 유지)
7. _**FE🔸**_ 매 요청마다 `Authorization Header`에 `Access Token`값을 담아서 보낼 수 있도록 세팅한다. 백엔드에서는 해당 값을 바탕으로 로그인한 유저를 판단한다.
8. _**FE🔸**_ `Access Token`이 담긴 인증 헤더를 가지고, 백엔드에 유저 정보를 요청한다.
9. _**BE🔹**_ `Authorization Header`값을 체크하여 해당 유저 정보를 반환해준다. 
10. _**FE🔸**_ 응답 받은 유저 정보를 이용해 로그인 상태 화면을 구현한다.








### 📃 Nuxt 작성 코드

참고를 위해 작성한 코드를 주석과 함께 남겨둔다.

##### 📃 nuxt.config.js

```javascript
export default {
  env: {
    AuthClientId: process.env.OAUTH_CLIENT_ID
  },
  script: [
    { type: 'text/javascript', src: 'https://accounts.google.com/gsi/client', async: true, defer: true }
  ]
}
```


##### 📃 src/components/layout/GoogleLoginButton.vue

```html
<template>
  <div>
    <div v-show="!isLogin" id="googleLogin"></div>
    
    <div v-show="isLogin" class="wrap-dropdown" >
      <button
        v-if="userInfo && userInfo.siteNick"
        class="btn-dropdown"
      >{{ userInfo.siteNick }}</button>
      <button
        @click="onClickLogout('로그아웃이 완료되었습니다.')"
      >로그아웃</button>
    </div>
  </div>
</template>

<script>
import { postGoogleCredential } from "@/plugins/utils/https"
import { setDefaultHeader } from "@/plugins/utils/https"
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      authClientId: process.env.AuthClientId,
      jToken: null,
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'auth/getIsLogin',
      userInfo: 'auth/getUserInfo',
    }),
    isDevEnv() {
      return process.env.NODE_ENV === 'development'
    }
  },
  watch: {
    isLogin(crr, prev) {
      // 회원 가입 페이지에서 isLogin값 true로 하면 여기서 로그인 처리
      if(crr && crr !== prev && !this.userInfo) this.fnLogin()
    }
  },
  async mounted() {
    this.jToken = sessionStorage.getItem('JUID')
    this.initGoogleLogin()
    this.sendTokenToNewTab()

    if(this.jToken) {
      this.fnLogin()
    } else {
      setTimeout(() => {
        this.renderGoogleLoginBtn()
      }, 200)
      // 로그인 상태에서 새 탭으로 열었을때, 탭끼리 로그인 상태 공유 후 체크하여 실행될 수 있도록 setTimeout 설정
      setTimeout(() => {
        if(this.jToken) return
        this.initGoogleOneTap()
      }, 1000)
    }
  },
  methods: {
    ...mapMutations({
      setIsLogin: 'auth/SET_IS_LOGIN',
      setUserInfo: 'auth/SET_USER_INFO'
    }),
    ...mapActions({
      getUserInfo: 'auth/GET_USER_INFO'
    }),
    sendTokenToNewTab() {
      const TRIGGER_NAME = 'trigger--new-tab'
      
      // localStorage 데이터 변화 감지
      addEventListener('storage', (e) => { 
        const { storageArea: { JUID }, newValue } = e
        if(!newValue) return // localStorage.removeItem 됐을때는 실행되지 않도록 초기 반환
        const isSender = this.jToken && !JUID // 기존 탭
        const isReceiver = !this.jToken && JUID  // 새 탭
        
        if(isSender) {
           // 기존 탭에서 token값을 localStorage에 저장하면
          localStorage.setItem('JUID', this.jToken)
        } else if (isReceiver) {          
           // 새 탭에서 localStorage에 저장된 token값을 sessionStorage에 저장 후 localStorage 데이터 삭제
          this.setJToken(localStorage.getItem('JUID'))
          localStorage.removeItem('JUID')
          this.fnLogin()
        }
      })
      // 기존 탭들의 storage 이벤트 실행을 위해 localStorage 데이터 추가/삭제
      localStorage.setItem(TRIGGER_NAME, '1')
      localStorage.removeItem(TRIGGER_NAME)
    },
    initGoogleLogin() {
      // 구글 로그인 세팅
      google.accounts.id.initialize({
        client_id: this.authClientId,
        callback: this.onClickLogin,
        context: 'signin'
      })
    },
    initGoogleOneTap() {
      // 구글 로그인 One Tap 창 띄우기
      google.accounts.id.prompt()
    },
    renderGoogleLoginBtn() {
      // 구글 로그인 버튼 렌더링
      google.accounts.id.renderButton(
        document.getElementById('googleLogin'),
        { 
          type: 'standard',
          size: 'small',
          text: 'signin',
          shape: 'rectangular',
          logo_alignment: 'center',
          width: 60
        }
      )
    },
    async fnLogin() {
      // 매 요청마다 `Authorization Header`에 `Access Token`값을 담아서 보낼 수 있도록 세팅
      setDefaultHeader('Authorization', this.jToken)
      // 헤더 영역에 유저 닉네임을 노출 시키기 위해 유저 정보를 요청한다.
      const userInfo = await this.getUserInfo()
      // 토큰 값이 없는 경우 백엔드에서 아래 에러 메세지를 반환해준다.
      if(!userInfo || userInfo === 'not found token') {
        // 에러 내용을 확인할 수 있는 console.error를 띄우고
        console.error('getUserInfo : no Authorization : ', this.jToken)
        // 에러 얼럿을 띄우고 로그아웃 처리 한다.
        alert('유저 정보를 가져올 수 없습니다!')
        this.onClickLogout()
        return
      }
      // 유저 정보를 정상적으로 가져왔다면 store isLogin 데이터를 true로 변경한다.
      this.setIsLogin(true)
    },
    async onClickLogin(googleUser) {
      const res = await postGoogleCredential({
        idToken: googleUser.credential 
      })
      
      switch (res.type) {
        case 'join':
          // 구글에게 발급받은 토큰값을 임시로 `sessionStorage`에 저장한 후, 회원 가입 페이지로 이동시킨다.
          sessionStorage.setItem('GCID', googleUser.credential)
          this.$router.push('/join')
          break
        case 'login':
          // 발급받은 `Access Token`값을 `sessionStorage`에 해당 값을 저장한다. (새로 고침 시에 해당 값을 체크하여 로그인 상태 유지)
          this.setJToken(res.token)
          this.fnLogin()
          break
        case 'ban':
          // 정지 유저는 아직 구현 전
          console.log('login_limit', res.login_limit)
          break
        default:
          console.error('onClickLogin: 로그인 결과 응답 type 확인 필요')
          break
      }
    },
    setJToken(token) {
      this.jToken = token
      sessionStorage.setItem('JUID', token)
    },
    onClickLogout(alertMsg) {
      // 토큰값 제거
      sessionStorage.removeItem('JUID')
      // store user data reset
      this.setIsLogin(false)
      this.setUserInfo({})
      // render google login button
      setTimeout(() => {
        this.renderGoogleLoginBtn()
      }, 100)
      // 로그인 관련 페이지에서 로그아웃 했다면 메인으로 이동
      if(this.$route.path.includes('/auth/')) this.$router.push('/')
      // 로그아웃 후 alert message 띄우기
      // 
      alertMsg && alert(alertMsg)
    }
  }
}
</script>
```

### 📌 참고

- [JWT의 개념, 프론트엔드에서 해야 할 일](https://han-um.tistory.com/17)
- [Jwt Refresh Token 적용기](https://velog.io/@jkijki12/Jwt-Refresh-Token-%EC%A0%81%EC%9A%A9%EA%B8%B0)
- [sessionStorage 탭 간 데이터 전송](https://medium.com/@ablestor/sessionstorage-%ED%83%AD-%EA%B0%84-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EC%86%A1-b12087d30bff)