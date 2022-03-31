이전 포스팅 - [Vue CLI 4 - static 파일 사용하기](vue-cli-4-use-static-file)

이전 포스팅에서 static파일을 http요청으로 호출하기 위해 axios를 이용했다.  
두개의 컴포넌트에서 에서 axios를 import해 http요청을 하고있다.  
비슷한 코드가 반복되어 http 요청과 관련된 내용을 모듈로 만들었다.  

### 모듈 공통 로직
현재 get 요청밖에 없기 때문에 get에 대한 내용만 넣었다.
처음엔 Https 클래스로 할까 고민하다가 굳이 그럴 필요가 없을 것 같아 객체로 만들었다.

##### 📃 src/utils/http.js
``` javascript
import axios from 'axios'

const $axios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})

const Https = {
  async get(url = '', params = {}) {
    return $axios.get(url, params)
      .then(res => res.data)
      .catch(e => console.log(e))
  }
}
```

### 세부 요청 로직
공통 로직 아래쪽에 아래처럼 각 요청에 대한 함수를 만들어 export했다.
이것도 파일을 따로 분리할까 고민했지만 아직 소스분량이 얼마되지 않기 때문에 한 파일안에 작업했다.

##### 📃 src/utils/http.js (모듈 세분화)
```javascript
export const importPostsInfo = () => {
  return Https.get('/posts/index.json')
}

export const getPostInfo = (param = {}) => {
  const key = Object.keys(param)[0]
  const value = Object.values(param)[0]
  const getPostInfo = importPostsInfo()
    .then((data) => data.filter(info => info[key] === value))
  return getPostInfo
}

export const importMD = (param = '') => {
  return Https.get(`/posts/${param}.md`)
}
```

### 컴포넌트에 적용
이제 모듈을 만들었으니 각 view 컴포넌트 내부를 정리해보자.    
아래는 Main.vue의 script태그에 대한 내용이다. 모듈화 이전 소스를 as-is, 이후 소스를 to-be로 표시했다.  
훨씬 코드가 깔끔해졌다. 뿌듯!  

##### 📃 src/router/views/Main.vue 
```html
<script>
// import axios from 'axios'  // as-is
import ContainerComp from '@/components/layout/Container.vue'
import PostList from '@/components/PostList.vue'
import { importPostsInfo } from '@/utils/https' // to-be

export default {
  components: {
    ContainerComp,
    PostList
  },
  data() {
    return {
      posts: [],
      // as-is
      // baseUrl: process.env.VUE_APP_BASE_URL,
    }
  },
  created() {
    // as-is
    // axios.get(`${this.baseUrl}/posts/index.json`)
    //   .then(res => this.posts = res.data)
    //   .catch(e => console.log(e))
    
    // to-be
    importPostsInfo()
      .then(data => this.posts = data)
  }
}
</script>
```