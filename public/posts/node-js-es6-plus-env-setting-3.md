
### Intro
Express가 많이 나와있지만 우선 Node.js로만 구축해보기로했다.
Node.js로만 서버 구축하는건 아래처럼 불편한점이 많다고 한다.
직접 느껴보고 나중에 Express 프레임워크를 써보기로 한다.

> 이렇게 HTML을 전송해보았는데요. 코드가 너무 반복되고, 페이지 별로 HTML을 따로 만들어야하며, 이를 각각 주소와 일일히 연결해야하는 단점이 있습니다. 페이지가 수십 페이지 이상 늘어난다고 생각해보세요. 매번 GET 요청인지 확인하고, 주소를 파악하고, fs로 매칭되는 파일을 읽어서 브라우저로 전송해야 합니다. 이렇게 해서는 실제 서비스는 무리겠죠? 다음 시간에는 이 귀찮은 과정을 간단히 해결해 줄 Express 프레임워크에 대해서 알아봅시다!  
> ...  
> Express 프레임워크는 코드의 양도 줄여주고 추후 유지보수가 쉽도록 만들어주기 때문에 사용합니다. 하지만 성능은 이전 시간의 생 코드보다는 떨어집니다. 하지만 크게 영향은 없기 때문에 사용해도 됩니다.
>
> <cite>[zerocho](https://www.zerocho.com/category/NodeJS/post/57774a8eacbd2e9803de0195)</cite>

### Node.js 서버 설정
💡 개발 서버 실행을 위해 세팅 했던 것으로, [다음 포스팅](node-js-es6-plus-env-setting-4)에서 webpack-dev-server로 대체됨 💡
프로젝트 루트에 <code>app.js</code> 파일 생성
```
$ touch app.js
```
[node.js 공식 문서](https://nodejs.org/ko/docs/guides/getting-started-guide/) 와 [zerocho 블로그](https://www.zerocho.com/category/NodeJS/post/57774a8eacbd2e9803de0195)를 참고해서 아래와 같이 작성했다.
##### 📃 app.js
```javascript
const http = require('http'); // 서버 만드는 모듈
const url = require('url'); // 주소 분석 모듈
const fs = require('fs'); // 파일을 읽고 쓰는 모듈

const hostname = '127.0.0.1';
const port = 3000;
/*
localhost주소를 입력하면 서버에 '정보'를 달라고 '요청'한다.
대기중이던 서버는 '요청'을 처리 후 클라리언트로 '정보'를 돌려준다.
> 요청(request)와 정보(response)에는 header와 body가 있다.
	* header - request, response에 대한 정보(종류, 크기, 캐시) 등
	* body - 주고 받고자 하는 메인 정보
*/
const server = http.createServer((req, res) => { // 서버 만드는 메소드
  // url모듈을 이용해서 url에 따라 다른 HTML을 전송하는 라우팅을 구현
  const path = url.parse(req.url, true).pathname; 
  if (req.method === 'GET') { // GET 요청이면 
    if (path.includes('.js')) {
      res.writeHead (200, 'Content-Type', 'text/javascript');
      // readFile 메소드로 HTML 파일을 읽어서 읽은 데이터를 브라우저로 보낸다.
      fs.readFile(__dirname + path, (err, data) => {
        if (err) {
          return console.error(err);
        }
        res.end(data);
      });
    } else if (path === '/') {
      res.writeHead (200, 'Content-Type', 'text/html');
      // __dirname - 현재 프로젝트의 경로
      fs.readFile(__dirname + '/index.html', (err, data) => {
        if (err) {
          return console.error(err);
        }
        res.end(data, 'utf-8');
      });
    } else {
      res.writeHead(404, 'Content-Type', 'text/plain; charset=UTF-8');
      res.end('주소가 없습니다', 'utf-8');
    }
  }
}).listen(port);

console.log(`Server running at http://${hostname}:${port}/`);
```

### 커맨드 지정
커맨드 지정 후 서버를 실행해봤다.
##### 📃 package.json

```json
{
  "scripts": {
    "dev": "node app.js", 				// NEW
    "build": "babel lib -w -d dist/js" 
    "test": "jest"
  },
}
```

### require is not defined
엇 그런데 <code>Uncaught ReferenceError: require is not defined</code> 에러가 떴다.  
요고 아까 바벨로 트랜스파일링한 파일에서도 봤엇는데. require에 대해 알아봤다.
#### 🔎 <code>require</code> ?
Node.js의 모듈시스템인 CommonJs에서 모듈을 불러오는 키워드라고 한다.  
CommonJs는 웹에서 쓰려면 Webpack같은 번들러를 사용해야 한다고한다.

그래서 설치하게된 Webpack은 다음 글에 계속!
