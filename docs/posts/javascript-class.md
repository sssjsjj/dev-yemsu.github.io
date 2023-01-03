아래 문서를 번역한 포스팅입니다.   

원문 - [Understanding Classes in JavaScript  | DigitalOcean](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)

---

Javascript는 [prototype](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)기반의 언어이다. 자바스크립트의 모든 객체는 내부에 [[Prototype]] 이라는 숨겨진 property를 가지고 있다. 이 [[Prototype]]으로 객체의 property나 method를 확장할 수 있다.


최근까지만해도 많은 개발자들은 객체지향프로그래밍을 할 때 생성자함수(constructor function)를 사용했다. ECMAScript 2015(ES6)는 Javascript언어로 <code>class</code>를 소개했다. javascript의 <code>class</code>는 사실 추가적인 기능을 제공하진 않는다. 다만 더 깨끗하고 우아한 구문을 제공한다는 점에서, prototype과 상속(inheritance)에 설탕을 살짝 뿌린것으로 묘사되곤 한다.
다른 프로그래밍 언어들에서는 <code>class</code>를 사용하기 때문에, Javascript에서 <code>class</code>라는 문법은 개발자들이 다른 언어들을 습득하기 편하게 해준다.

### Class는 함수이다!

Javascript에서 class는 function(함수)의 일종이다. class는 class라는 키워드로 선언한다.

```javascript
// Initializing a function with a function expression
const x = function() {}

// Initializing a class with a class expression
const y = class {} 
```

우리는 객체의 [[Prototype]]에 Object.getPrototypeOf()라는 메서드를 사용하여 접근할 수 있다. 테스트를 위해 우리가 생성한 비어있는 function을 사용해보자.

```javascript
Object.getPrototypeOf(x);

//Output
ƒ () { [native code] }
```

방금 만든 <code>function</code>과 <code>class</code> 둘다 함수의 [[Prototype]]을 반환한다. prototype이라는 기능으로, 어떤 함수든 new키워드를 사용하여 생성자 인스턴스(constructor instance)가 될 수 있다.

```javascript
const x = function() {}

// Initialize a constructor from a function
const constructorFromFunction = new x();

console.log(constructorFromFunction);

//Output
x {}
constructor: ƒ ()
```

똑같이 class에도 적용할 수 있다.

```javascript
const y = class {}

// Initialize a constructor from a class
const constructorFromClass = new y();

console.log(constructorFromClass);

//Output
y {}
constructor: class
```

이 prototype 생성자 예제들은 어떤 의미에서는 비어있다. 하지만 구문 내부를 콘솔로 찍어봤을때, 두 메서드들은 같은 결과를 반환한다는 것을 우리는 확인할 수 있다.

### Class 정의

[prototype과 상속 예제](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)에서, 우리는 텍스트 기반의 롤플레잉 캐릭터게임 예제를 만들었었다. 그 예제에서 <code>function</code>을 <code>class</code>로 바꿔보자.

생성자함수는 몇가지 인자(parameter)로 시작된다. 이 인자들은 <code>function</code> 내부에서 다시 언급되면서, this의 property를 지정해주는데 사용될것이다. 생성자함수의 이름 첫글자는 대문자를 사용하는것이 통상적인 룰이다.

```javascript
/* * * constructor.js * * */
// Initializing a constructor function
function Hero(name, level) {
    this.name = name;
    this.level = level;
}
```

요거를 class문법으로 바꿔본다고 했을때, 아래와 같이 구조가 굉장히 비슷하다는걸 볼 수 있다.

```javascript
/* * * class.js * * */
// Initializing a class definition
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}
```

class도 객체를 설계했다는 것을 직관적으로 알아볼 수 있도록, function과 같이 첫글자는 대문자로 이름짓는다.

### Method 정의

일반적인 생성자함수 작업들은 메서드를 처음에 선언하지않고, prototype에 직접 접근하여 생성한다.

아래 greet()메서드를 보자.

```javascript
/* * * constructor.js * * */
function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}
```

class를 사용하여 이 구문을 단순화할 수 있다. 그리고 메서드들은 class내부에 바로 선언할 수 있다. 

ES6의 [짧은 함수 선언하는 방식](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)을 사용하여, 훨씬 더 간결한 방식으로 메서드를 정의할 수 있다.

```javascript
/* * * class.js * * */
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}
```

이 property들을 실제 사용하면서 확인해보자.

우리는 new 키워드를 이용하여 Hero인스턴스를 만들것이다. 그리고 몇가지 값들을 지정해줘보자.

```javascript
const hero1 = new Hero('Varg', 1);
```

console.log(hero1)로 우리는 class생성과 관련된 다양한 디테일들을 확인할 수 있다.

```javascript
//Output
Hero {name: "Varg", level: 1}
__proto__:
  ▶ constructor: class Hero
  ▶ greet: ƒ greet()
```

여기서 우리는 constructor()과 greet() 함수들이 hero1의 __proto__혹은[[Prototype]]에 저장되어있는 것을 볼 수 있다. 이 함수들은 hero1에 직접적으로 저장되어있지 않다. 이런점은 생성자 함수를 만들 때는 깔끔하지만, 클래스를 만들때는 직관적이지 못하다. class는 더 간결하고 단순한 문법을 사용하지만 전체적인 프로세스에서 약간의 명확성을 희생해야한다.

### Class의 확장

생성자함수와 class의 장점은 생성된 new object로 확장할 수 있다는 것이다. 이것은 비슷하지만 약간의 추가나 변화가 필요할 때 같은 코드가 반복되는 것을 막아준다.

 

새로운 생성자 함수는 부모에 call()메서드를 사용하여 생성할 수 있다.

아래 예시와 같이, 우리는 좀더 디테일한 class인 Mage를 생성할 것이다.

Hero를 call()하여 기본적인 property값들을 내부에 지정해준 뒤, Mage에 추가가 필요한 새로운 property값도 지정해준다.

```javascript
/* * * constructor.js * * */
// Creating a new constructor from the parent
function Mage(name, level, spell) {
    // Chain constructor with call
    Hero.call(this, name, level);

    this.spell = spell;
}
```

요로케, 우리는 공통된 property들은 Hero를 사용하였고, 새로운 property도 추가하여 Mage라는 새로운 인스턴스를 만들었다.

```javascript
const hero2 = new Mage('Lejon', 2, 'Magic Missile');
```

hero2를 console로 찍어보자. 생성자 기반으로 만든 Mage를 확인할 수 있다.

```javascript
//Output
Mage {name: "Lejon", level: 2, spell: "Magic Missile"}
__proto__:
    ▶ constructor: ƒ Mage(name, level, spell)
```

ES6의 class에서, call대신 super라는 키워드를 사용하여 부모 함수에 접근할 수 있다. 우리는 extends라는 문법을 사용하여 부모 클래스를 지정할 수 있다.

```javascript
/* * * class.js * * */
// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}
```

이제 우리는 Mage 인스턴스를 같은 방식으로 생성할 수 있다.

```javascript
const hero2 = new Mage('Lejon', 2, 'Magic Missile');
```

hero2를 console로 찍어보면 아래와 같이 나온다.

```javascript
//Output
Mage {name: "Lejon", level: 2, spell: "Magic Missile"}
__proto__: Hero
    ▶ constructor: class Mage
```

결과는 거의 비슷하지만, class에서는 [[Prototype]]이 부모와 연결되어있다. 여기에선 hero에 연결되어 있는 것을 볼 수 있다.

아래, 전체적인 과정이 들어간 코드를 나란히 놓아 전체적으로 비교 확인할 수 있다.

```javascript
/* * * constructor.js * * */
function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

// Creating a new constructor from the parent
function Mage(name, level, spell) {
    // Chain constructor with call
    Hero.call(this, name, level);

    this.spell = spell;
}



/* * * class * * */
// Initializing a class
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}
```

문법이 조금 다르지만, 두 메서드의 결과값은 거의 같다.

class는 객체를 복사할때 더 간결한 방법을 사용할 수 있게 해준다.

생성자 함수는 더 확실하게 무슨일이 일어나고 있는지 묘사해준다.

 
### 결론

이 튜토리얼을 통해, 우리는 생성자 함수와 class의 공통점 및 차이점을 배웠다.

둘 다 자바스크립트의 포로토타입 기반 상속의 객체 지향 모델이다.

포로토타입기반의 상속을 이해하는 것은 자바스크립트 개발자에게는 가장 중요하다.

유명한 자바스크립트 라이브러리인 React에서 class를 사용하기도 하니, class와 친해지는 것은 아주 도움이 될 것이다.

 