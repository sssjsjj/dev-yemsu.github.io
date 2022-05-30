<code>dl</code>태그는 Definition List의 약자로, 이름 - 값의 그룹으로 이루어진 리스트이다.
이름-값은  용어-정의, 메타 데이터-값, 질문-답변 등 일 수 있다.  
가능한 예시들을 확인해 보자.

###  형태: <code>dt</code> 하나 -  <code>dd</code> 여러개

```html
<!-- 다음 예에서 한 항목 ( "Authors")은 두 값 ( "John"및 "Luke")에 연결됩니다. -->
<dl>
 <dt> Authors </dt>
 <dd> John </dd>
 <dd> Luke </dd>
 <dt> Editor </dt>
 <dd> Frank </dd>
</dl>
```

### 형태: <code>dt</code> 여러개 - <code>dd</code> 하나

```html
<!-- 다음 예에서 하나의 정의는 두 용어에 연결됩니다. -->
<dl>
 <dt lang="en-US"> <dfn>color</dfn> </dt>
 <dt lang="en-GB"> <dfn>colour</dfn> </dt>
 <dd> A sensation which (in humans) derives from the ability of
 the fine structure of the eye to distinguish three differently
 filtered analyses of a view. </dd>
</dl>
```

###  형태: <code>dl</code> 안에 <code>div</code>

```html
<!--
다음 예제에서는 dl요소를 사용하여 정렬 메타 데이터를 표시합니다. 
예제의 끝에서 한 그룹에는 두 개의 메타 데이터 레이블 ( "Authors"및 "Editors")과
두 개의 값 ( "Robert Rothman"및 "Daniel Jackson")이 있습니다.
이 예제는 또한 div그룹화 dt및 dd요소 주위 의 요소를 사용하여 스타일을 지원합니다.
-->
<dl>
 <div>
  <dt> Last modified time </dt>
  <dd> 2004-12-23T23:33Z </dd>
 </div>
 <div>
  <dt> Recommended update interval </dt>
  <dd> 60s </dd>
 </div>
 <div>
  <dt> Authors </dt>
  <dt> Editors </dt>
  <dd> Robert Rothman </dd>
  <dd> Daniel Jackson </dd>
 </div>
</dl>
```

### 의미: 용어의 정의

``` html
<!--
다음 스 니펫은 dl용어집으로 사용되는 요소를 보여줍니다.
dfn정의 된 단어를 나타내는 데 사용 합니다.
-->
<dl>
 <dt><dfn>Apartment</dfn>, n.</dt>
 <dd>An execution context grouping one or more threads with one or
 more COM objects.</dd>
 <dt><dfn>Flat</dfn>, n.</dt>
 <dd>A deflated tire.</dd>
 <dt><dfn>Home</dfn>, n.</dt>
 <dd>The user's login directory.</dd>
</dl>
```

### 의미:  케이스별 가이드

```html
<!--
다음 예는 dl일련의 지침을 제공하는 데 사용되는 요소 를 보여줍니다.
여기서 지침의 순서는 중요합니다 (다른 예에서는 블록의 순서는 중요하지 않았습니다).
-->
<p>Determine the victory points as follows (use the
first matching case):</p>
<dl>
 <dt> If you have exactly five gold coins </dt>
 <dd> You get five victory points </dd>
 <dt> If you have one or more gold coins, and you have one or more silver coins </dt>
 <dd> You get two victory points </dd>
 <dt> If you have one or more silver coins </dt>
 <dd> You get one victory point </dd>
 <dt> Otherwise </dt>
 <dd> You get no victory points </dd>
</dl>
```

### 의미: 메뉴

```html
<!--
이 예에서는 요소와 함께 요소의 마이크로 데이터 속성을 사용 하여
프랑스 식당에서 아이스크림 디저트에 주석을 답니다. dl div
-->
<dl>
 <div itemscope itemtype="http://schema.org/Product">
  <dt itemprop="name">Café ou Chocolat Liégeois
  <dd itemprop="offers" itemscope itemtype="http://schema.org/Offer">
   <span itemprop="price">3.50</span>
   <data itemprop="priceCurrency" value="EUR">€</data>
  <dd itemprop="description">
   2 boules Café ou Chocolat, 1 boule Vanille, sause café ou chocolat, chantilly
 </div>
 <div itemscope itemtype="http://schema.org/Product">
  <dt itemprop="name">Américaine
  <dd itemprop="offers" itemscope itemtype="http://schema.org/Offer">
   <span itemprop="price">3.50</span>
   <data itemprop="priceCurrency" value="EUR">€</data>
  <dd itemprop="description">
   1 boule Crème brûlée, 1 boule Vanille, 1 boule Caramel, chantilly
 </div>
</dl>
<!--
div요소가 없으면 마크 업은 다음과 같이
요소 itemref의 데이터를 dd항목과 연결 하기 위해 속성 을 사용해야합니다.
-->
<dl>
 <dt itemscope itemtype="http://schema.org/Product" itemref="1-offer 1-description">
  <span itemprop="name">Café ou Chocolat Liégeois</span>
 <dd id="1-offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
  <span itemprop="price">3.50</span>
  <data itemprop="priceCurrency" value="EUR">€</data>
 <dd id="1-description" itemprop="description">
  2 boules Café ou Chocolat, 1 boule Vanille, sause café ou chocolat, chantilly
 <dt itemscope itemtype="http://schema.org/Product" itemref="2-offer 2-description">
  <span itemprop="name">Américaine</span>
 <dd id="2-offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
  <span itemprop="price">3.50</span>
  <data itemprop="priceCurrency" value="EUR">€</data>
 <dd id="2-description" itemprop="description">
  1 boule Crème brûlée, 1 boule Vanille, 1 boule Caramel, chantilly
</dl>
```
<cite class="refer">[마이크로데이터](https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata)</cite>


### 의미: 질의응답

```html
<!--
이 예는 질문 dt요소와 답변 요소를 사용하여 표시되는
질문과 대답 (FAQ) 목록을 보여줍니다 dd.
-->
<article>
 <h1>FAQ</h1>
 <dl>
  <dt>What do we want?</dt>
  <dd>Our data.</dd>
  <dt>When do we want it?</dt>
  <dd>Now.</dd>
  <dt>Where is it?</dt>
  <dd>We are not sure.</dd>
 </dl>
</article>
```
- - -

<cite>[HTML Standard - dl element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element)</cite>
