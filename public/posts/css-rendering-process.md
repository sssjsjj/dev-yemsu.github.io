아래 문서를 요약/번역한 포스팅입니다.

원문 - [How CSS works: Parsing & painting CSS in the critical rendering path - LogRocket Blog](https://blog.logrocket.com/how-css-works-parsing-painting-css-in-the-critical-rendering-path-b3ee290762d3 )

---

### 렌더링 단계 

초기 페이지를 렌더링 할 때 브라우저의 최소 단계는 이러하다.

1. 수신된 HTML에서 DOM 빌드
2. CSS 스타일 시트(임베디드 혹은 링크)가 발생하면 **CSSOM***을 작성
3. DOM을 빌드하는 동안 JS블록이 발생하면 CSSOM생성을 기다리고 DOM 생성을 중간하고 코드를 실행한다. JS실행이 DOM을 수정하고 CSSOM에 접근하여 수정할 수 있기 때문.

**CSSOM*** : CSS Object Model. DOM과 유사한 구조. DOM처럼 생성될때 렌더링이 차단됨. 


### HTML과 렌더링 경로

CSS는 근본적으로 스타일 마크업 언어이기 때문에 DOM과 상호작용하는 방식을 알아야 한다.
HTML이 주어지면 DOM을 생성한다. 그 과정에서 렌더링은 차단된다.

<figure>
  <img src="/posts/images/css-rendering-process/i42g-230103-144217.png" alt="DOM 트리">
  <figcaption>출처: https://blog.logrocket.com/how-css-works-parsing-painting-css-in-the-critical-rendering-path-b3ee290762d3</figcaption>
</figure>


### CSS 객체 모델

1. CSS가 주어지면 CSSOM이 생성된다.
2. CSS셀렉터를 파싱하여 아래 트리구조 처럼 각각 맞는 위치를 할당한다.
3. 단일 선택자는 해당 노드에 바로 연결되고,
4. 중첩 선택자는 오른쪽에서 왼쪽으로 읽히면서 올바른 노드에 있는지 확인 뒤 연결된다.

<figure>
  <img src="/posts/images/css-rendering-process/i43g-230103-144345.png" alt="CSSOM 트리">
  <figcaption>출처: https://blog.logrocket.com/how-css-works-parsing-painting-css-in-the-critical-rendering-path-b3ee290762d3</figcaption>
</figure>

CSS를 CSSOM으로 변환하는 것은 HTML에서 DOM을 생성하는 것처럼 렌더링 차단 단계로 간주된다.
CSSOM을 기다리지 않고 바로 픽셀로 렌더링 된다면 CSSOM이 분석,연결하는 동안 제대로 css가 적용되지 않은 못생긴 화면이 깜빡! 거리면서 보일 것이다.

### 렌더링 트리

브라우저는 위처럼 DOM, CSSOM을 생성한 후 얘네를 사용해서 "렌더링 트리"를 만든다.
즉, 렌더링 트리라는 것은 브라우저에서 페이지를 만들 때 필요한 모든 정보가 들어있다.

#### 렌더링 트리를 만드는 과정

1. DOM과 CSSOM을 가져옴
2. DOM에서 보이지 않는 것을 제외 시킨다. (<code>head</code>, <code>script</code>, <code>meta</code>, hidden속성의 html)
3. CSSOM을 살펴보면서 지금까지 렌더링된 트리의 어떤 요소가 CSS 선택자와 일치하는 지 확인 후 일치하는 렌더링 트리 해당 노드에 CSS 속성이 적용된다. 

다만, <code>display:none</code> 속성은 렌더링 트리에서 해당 요소를 완전히 제거한다.
따라서 존재는 하되 보이지만 않아야 한다면 <code>opacity:0</code> 과 같은 속성을 쓰면 된다.

<figure>
  <img src="/posts/images/css-rendering-process/i45g-230103-144506.png" alt="DOM 트리, CSSOM 트리, 렌더 트리">
  <figcaption>출처: https://blog.logrocket.com/how-css-works-parsing-painting-css-in-the-critical-rendering-path-b3ee290762d3</figcaption>
</figure>

### 레이아웃 그리고 나머지 픽셀 그리기
이렇게 렌더링 트리가 완료되면 실제 픽셀을 페이지에 넣을 준비가 완료 되었다. 레이아웃은 각 요소들의 위치와 그 친구들의 공간을 파악하는 것이다. 브라우저는 여백, 패딩, 너비, 포지션등을 고려한다. 레이아웃은 부모 노드의 위치나 크기에 영향을 받기 때문에 위에서부터 아래로 렌더링 된다.
이때, 픽셀들이 그려지기 전이기 때문에 페이지에는 아무것도 보이지 않는다. 레이아웃 단계가 완료되면 그 다음 바로 나머지 non-layout css들이 렌더링 되면서 픽셀들이 그려진다.

브라우저는 모든 CSS를 파싱 할 때까지 렌더링을 차단한다. 따라서 각 페이지에 적용되지 않는 css를 제거하면서 로드 시간을 향상시킬 수 있다.

또 중첩된 선택자는 CSSOM의 부모 노드를 확인 후 적용되기 때문에 중첩이 많을수록 성능이 약간 떨어질 수 있다.
