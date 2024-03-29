// 현재 리액트 대세는 함수형 컴퍼넌트이다
// 리액트는 UI 컴퍼넌트를 만들고 
// 생성된 컴퍼넌트를 통해 사용자와 인터랙션하고
// 화면을 업데이트 하는데 최적화 되어있다

// 리액트의 Virtual Dom
// 바닐라 JS로 컴퍼넌트를 만들고 사용자와 인터랙션을 통해
// 화면에 업데이트가 일어나게 되면 필연적으로 repaint, reflow가 일어나게 된다.


// 리액트는 이러한 과부하를 줄이기 위해 메모리에만 존재하는 가상돔
// Virtual DOM을 만들어 변화를 미리 가상돔에 반영하고, 이를 한번에 화면에 반영하는 전략을 사용하고 있다.
// 마치 바닐라 JS의 DocumentFragment를 이용하는 방식과 비슷하다고 볼 수 있음

// JSX(JS + XML) : const element = <h1>hello world</h1>와 같은 형태로 
// 우리가 만들고자 하는 컴포넌트 안에 들어가는 HTML 요소들을 
// JS 안에서 실제 HTML의 모습과 동일하게 사용할 수 있도록 고안된 JSX를 지원합니다. 
// 이는 후에 JS에 등장한 template literal과 매우 유사하다고 볼 수 있습니다.
// 브라우저에서 실행하기 전에 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.
// if 구문과 for 루프는 JavaScript 표현식이 아니기 때문에 JSX 내부 자바스크립트 표현식에서는 사용할 수 없다.
// 조건부에 따라 다른 렌더링 시 JSX 주변 코드에서 if문을 사용하거나, {}안에서 삼항 연산자(조건부 연산자)를 사용 한다.

// JSX를 사용하기 위해서는 script의 type을 text/babel로 명시해주어야 함
// babel: JavaScript 코드를 변환하기 위한 도구입니다.


// Babel은 ECMAScript 2015(ES6) 이상의 최신 JavaScript 문법을 사용한 코드를 구형 브라우저에서도 동작할 수 있는 ES5 코드로 변환해주는 역할을 합니다. 또한, 
// Babel은 TypeScript, JSX, Flow와 같은 다양한 문법 확장을 지원하여 이를 변환해줄 수 있습니다.

// 리액트의 목적은 페이지 구성 요소를 컴포넌트화 하기 위함 // 컴포넌트를 사용자 정의 요소로 표현하는 것


// {} 중괄호를 통해 JSX 내부에서 JavaScript 표현식 사용 가능
