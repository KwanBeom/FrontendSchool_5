//타입 변환
var num = 20;
num = "이십";
var num; 
// 한 변수에 여러 번 대입은 가능하나 재선언은 할 수 없다. 무시됨

// 묵시적 타입 변환
console.log(10 + num); // 문자열 연결을 위해 숫자 10이 문자열로 변환
console.log("3" * "9") // 곱셉 연산을 위해 문자열이 모두 숫자로 변환
console.log(1 - num) // Not a Number

// 명시적 타입변환
console.log(String(5));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(1));
console.log(Object(5));
console.log(new Number(5));


//숫자 > 문자열 변환
console.log(String(3));

// 불리언 > 문자열 변환
console.log(String(true)); // 문자열 true
console.log(false.toString()); // 문자열 false

var date = new Date();
var d = date.getDate();
console.log("현재 날짜 : " + d + "일");
var d = date.getDay();
console.log("현재 요일 : " + d);
var d = date.getFullYear();
console.log("현재 년도 : " + d + "년");
var d = date.getMonth();
console.log("이번 달 : " + d + "월");
var d = date.getTime();
console.log(d); //1970년 1월 1일부터 현재까지 시간을 밀리초 단위 숫자로 반환
var d = date.getHours();
console.log("현재 시각 : " + d + "시");
var d = date.getMinutes();
console.log("분 : " + d + "분");
var d = date.getSeconds();
console.log(d + "초");
var d = date.getMilliseconds();
console.log(d); //초를 밀리초 단위 숫자로 반환


// 문자열 > 숫자 변환
var myName = "123.34최범관입45니123123다";

console.log(parseInt(myName));
console.log(parseFloat(myName));