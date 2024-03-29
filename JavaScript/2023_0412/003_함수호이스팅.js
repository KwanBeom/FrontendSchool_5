// JavaScript에서 호이스팅(hoisting)이란, 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다. 
// var로 선언한 변수의 경우 호이스팅 시 undefined로 변수를 초기화합니다. 
// 반면 let과 const로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않습니다.

// 호이스팅을 설명할 땐 주로 "변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮기는" 것으로 말하곤 합니다. 
// 따라서 변수를 정의하는 코드보다 사용하는 코드가 앞서 등장할 수 있습니다. 
// 다만 선언과 초기화를 함께 수행하는 경우, 선언 코드까지 실행해야 변수가 초기화된 상태가 됨을 주의하세요.