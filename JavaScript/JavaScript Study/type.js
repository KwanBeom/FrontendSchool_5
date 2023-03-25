// 객체 타입 5가지
const num = 10; //숫자
const myName = "최범관" //문자열
var str; // undefined

// boolean : 참과 거짓을 표현 (true or false)
// 주로 제어구조를 처리하는 로직에 쓰임
var firstNum = 10;
var secondNum = 11;
document.getElementById("result").innerHTML = (firstNum == secondNum);

if (secondNum){
    console.log('true')
} else {
    console.log('false')
}
//Number이므로 true를 반환했다.
// JS에서 false 값으로 판단하는 6가지는 undefined, null, 0, -0, NaN, "" // 빈 문자열이다.

// symbol : 유일하고 변경할 수 없는 타입, 객체의 프로퍼티를 위한 식별자로 사용
var symA = Symbol("javascript");
var symB = Symbol("javascript");

console.log(symA == symB);
console.log(symA === symB);
// 심볼은 중복되지 않는 고유한 값이므로 false를 반환했다.


//객체
var dog = {name: "happy", age: "3"};
console.log("강아지의 이름은" + dog.name + "이고" + dog.age + "살입니다");