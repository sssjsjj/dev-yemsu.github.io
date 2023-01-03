자바스크립트는 프로토타입 기반으로 만들어진 언어라는 말을 많이 들어봤다.

개념을 확실히 차근차근 짚어 나가고 싶어서 여기저기 돌아다니다가,
정리가 아주 잘 되어있는 글을 발견했다!

_[javascript prototype에 대하여 - JavaScript - 자바스크립트 개발자 포럼](https://jsdev.kr/t/javascript-prototype/2853)_

### 요약 

<figure>
  <img src="/posts/images/javascript-prototype/i54g-230103-135425.png" alt="javascript - function - prototype - instance 관계도 ">
  <figcaption>예전에 저장해두었던 이미진데 출처를 찾을 수가 없네요 ㅠ.ㅠ</figcaption>
</figure>

- 프로토타입의 사전적 의미는 원형.
- 자바스크립트에서 함수를 생성하면 **함수객체**와 함께 **프로토타입**이라는 객체가 동시에 생성.
- 각 객체는 분리되어 있고, 각각 해당되는 참조변수(prototype, constructor)를 사용하여 접근 할 수 있다.
- 각 객체는 분리되어 있는 것이기 때문에 함수 스스로는 프로토타입 값을 가질 수 없다.
- new 키워드를 사용하여 함수로 **인스턴스**를 찍어내면 this 객체가 함께 생성되고, 인스턴스에서 해당 객체를 사용할 수 있게 된다.
- 이때 this는 프로토타입을 가르키게 된다. 함수객체와 다르게 프로토타입에 접근 가능.
- 인스턴스에서 함수의 프로토타입에 접근하여 값을 수정하면, 인스턴스에 **새로운 메모리가 할당**되고 수정된 값을 저장한다. (함수의 프로토타입 값은 그대로다.)
- 프로토타입 체인이란 프로토타입이 다른 프로토타입을 참조 하는 것.
- 인스턴트가 자신이 상속받을 프로토타입 체인을 선택할수도 잇음.
- 객체 스스로가 프로토타입을 바꿔 타는 행위는 삼가.


글 하나만 읽고는 완벽히 이해가 되질 않아서 여러개 찾아서 읽어봤다.
이제서야 좀 알 것 같은 느낌이다.

### 함께 읽어보면 좋을 글들

- [상속과 프로토타입 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

- [[Javascript] 프로토타입 이해하기 | by 오승환 | Medium](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)

- [Javascript 기초 - Object prototype 이해하기 |  Insanehong's Incorrect Note](http://insanehong.kr/post/javascript-prototype/)

- [JavaScript : 프로토타입(prototype) 이해 | nextree](http://www.nextree.co.kr/p7323/)
