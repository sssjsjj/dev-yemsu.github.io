생각만 하고있다가 이번에 드디어 블로그에 코드 하이라이트 기능을 넣었다. 
먼저 관련 패키지를 알아보다가 가장 유명한 패키지로 보이는 [highlight.js 패키지](https://www.npmjs.com/package/highlight.js)를 선택했다.
Vue 프로젝트는 [@highlightjs/vue-plugin](https://www.npmjs.com/package/@highlightjs/vue-plugin) 플러그인을 추가로 설치하여 컴포넌트처럼 사용할수도 있다. 나는 마크다운 텍스트를 가져와서 최종 텍스트를 v-html로 삽입할거니까 생략했다.  
먼저 Highlight.js 모듈에 대해 알아보자.

- - -
### Highlight.js 알아보기
패키지 설명을 보면서 차근차근 적용했다.
#### 설치

```bash
yarn add highlight.js
```

#### 기본적인 사용법
##### 브라우저
웹페이지에서 highlight.js를 사용하는 간단한 방법은 라이브러리와 테마를 삽입하고 <code>highlightAll</code> 함수를 사용하는 것이다.

```html
<link rel="stylesheet" href="/path/to/styles/default.min.css">
<script src="/path/to/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
```

이 소스를 적용하면 &lt;pre&gt;&lt;code&gt;영역을 찾아서 하이라이트를 해줄것이다. 언어도 자동으로 감지한다. 자동 감지 기능이 제대로 동작하지 않거나 그냥 명백하게 언어를 지정하고 싶다면, <code>class</code> 속성을 이용하여 직접 언어를 지정해줘도 된다.

```html
<pre><code class="language-html">...</code></pre>
<!--
  language-plaintext : highlighting 없이 일반적인 텍스트를 원할 때
  nohighlight : 해당 코드 블럭 자체를 감지하지 않고 건너 뜀
-->
```


#### Importing the Library 
##### Node.js - <code>require</code>
라이브러리 최상위를 requiring하면 모든 언어가 로드된다.

```javascript
const hljs = require('./highlight.js');
```

용량을 좀 싶다면 줄이고 인기있는 언어들만 하이라이트해주는 common subset만 불러와도된다. 

```javascript
hljs = require('highlight.js/lib/common');
```

용량을 최소한으로 줄이고 싶다면, 필요한 언어만 불러올 수 있다.

```javascript
const hljs = require('highlight.js/lib/core');
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

const highlightedCode = hljs.highlight('<span>Hello World!</span>', {language: 'xml'}).value
```

##### ES6 Modules - <code>import</code>
default import는 모든 언어가 등록된다.
```javascript
import hljs from 'highlight.js';
```
코어 라이브러리만 호출하고 필요한 언어는 따로 등록할 수 있다.

```javascript
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
```
build tool이 css import도 가능하다면, 테마도 모듈로 바로 import할 수 있다.

```javascript
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
```

💡 어떤 언어를 지원하는지, 어떤 테마가 있는지 궁금하다면: [highlight.js demo](https://highlightjs.org/static/demo/)
### 블로그에 적용하기
#### highlight or highlightAll ?
블로그는 마크다운으로 작성된 컨텐츠를 html로 변환한 뒤 v-html 디렉티브 값에 삽입하는 방식으로 되어있었다.  

<code>highlightAll</code>을 사용하면 가장 편했겠지만 터미널 커맨드에 하이라이팅이 이상하게 적용된다.

<figure>
  <img src="/posts/images/code-syntax-highlight-package/highlight-all-terminal-command.jpg" alt="highlightAll 메서드 사용 시 터미널 커맨드에 이상하게 적용되는 하이라이팅">
  <figcaption><code>highlightAll</code> 메서드 사용 시 터미널 커맨드에 이상하게 적용되는 하이라이팅</figcaption>
</figure>

그래서 개별적으로 언어를 지정해주기로했다.  
평소에 마크다운으로 코드블럭 작성하면서 언어 지정을 열심히 해주고 있었기 때문에 그걸 사용하면 되겠다 싶었다. 

#### 로직을 어디에 삽입할까
html로 변환이 된 이후에할지 이전에할지 고민했었는데 html 변환 과정에서 코드블럭 언어설정(ex. ```javascript)은 사라지고 <code>code</code>태그만 남아서 이전에 해야만 했다.  

##### 📃 src/utils/htmlConverter.js
htmlConverter.js에서 마크다운 텍스트를 넘겨받아 html로 변환하는데 이과정에 하이라이팅 로직을 삽입했다.
<code>highlighter</code> 모듈을 생성했고 모듈 내 <code>mdHighlighter</code> 함수를 가져와 텍스트를 넘겨주면 하이라이팅이 완료된 텍스트를 반환해준다.

```javascript
import showdown from "showdown";
import { mdHighlighter } from "./highlighter";

const htmlConverter = (md) => {
  const converter = new showdown.Converter()
  return converter.makeHtml(mdHighlighter(md))
}

export default htmlConverter
```

#### 다크모드 체크
먼저 highlighter.js의 상단 영역이다.  
다크모드, 라이트모드도 지원이 필요했기 때문에 util/index.js에 작성해놓은 <code>isDarkMode</code>함수를 가져와 다크모드를 체크해서 그때 그때 다른 css를 import하도록 작업했다.  

🗨 원래는 다크모드 여부에 따라 url 스트링값을 변수에 저장해놓고 그 변수를 <code>import()</code> 인자로 넣었었다. 그런데 자꾸 해당 경로에 module이 없다고 에러가 떠서 인자값을 변수가 아니라 직접 스트링 값으로 넣으니까 잘 됐다. <code>import()</code>는 변수를 인자로 사용할 수 없는것인가..?
##### 📃 src/utils/highlighter.js (상단)

```javascript
import hljs from 'highlight.js';
import { isDarkMode } from '@/utils'

isDarkMode
  ? import('highlight.js/styles/atom-one-dark.css')  
  : import('highlight.js/styles/atom-one-light.css')

// 이건안될까 왜?
// const highlightCss = isDarkMode
//   ? 'highlight.js/styles/atom-one-dark.css'
//   : 'highlight.js/styles/atom-one-light.css'
// import(highlightCss)
```
#### 마크다운 highlight
함수는 언제나 사용할 수 있는 <code>highlighter</code>와 마크다운에만 사용할 수 있는 <code>mdHighlighter</code> 두가지로 분리했다.  
highlight.js는 <code> pre > code</code>태그를 감지해서 내부 코드를 마크업으로 감싸는 방식이다. 그래서 마크다운 파일에서 코드블럭 영역만 미리 <code> pre > code</code>태그로 감싸서 <code>highlight()</code>메서드에 넘겨줘야했다 . 그리고 그 과정에서 마크다운에 작성해놨던 코드블럭 언어 설정도 클래스명으로 삽입하도록 작업했다.
##### 📃 src/utils/highlighter.js (하단)

```javascript
export const highlighter = (code, codeType) => {
  return hljs.highlight(code, {language: codeType}).value
}
export const mdHighlighter = (md) => {
  const splittedMd = md.split('\n```')
  const splittedMdLength = splittedMd.length
  const highlightSplittedMd = []

  // no code block
  if(splittedMdLength === 1) return

  for(let i = 0; i < splittedMdLength / 2; i++) {
    const index = i * 2
    // last part
    if(index+1 === splittedMdLength) { 
      highlightSplittedMd.push(splittedMd[splittedMdLength - 1])
      break
    }

    const codeArea = splittedMd[index+1] 
    const codeStartIndex = codeArea.indexOf('\n')
    const codeType = codeArea.substr(0, codeStartIndex).trim()
    const code = codeArea.substr(codeStartIndex).trim()
    const highlightCode= codeType ? highlighter(code, codeType) : code

    highlightSplittedMd.push(splittedMd[index])
    highlightSplittedMd.push(`<pre><code${codeType ? ` class="language-${codeType}"` : ''}>`)
    highlightSplittedMd.push(highlightCode)
    highlightSplittedMd.push(`</code></pre>`)
  }

  return highlightSplittedMd.join('')
}
```

#### 적용 확인
<figure>
  <img src="/posts/images/code-syntax-highlight-package/highlight-code-screen.jpg" alt="코드 하이라이트가 잘 적용된 포스팅">
  <figcaption>잘 적용이 되었다</figcaption>
</figure>


##### 배포 이슈