console.log(3 + 4); // 덧셈 연산
console.log("3" + "4"); // 문자열 결합 연산
console.log(3 + "문자")// 문자열 결합 연산

// 삼항 연산자
const x = 10, y = 20;
console.log((x > y) ? x : y);
// 짧은 if/else 문 대용

//쉼표 연산자
for (var i = 0; i <= 9; i++) {
    console.log(i);
}

//delete 연산자
var arr = [1, 2, 3];          // 배열 생성
delete arr[2];                // 배열의 원소 중 인덱스가 2인 요소를 삭제함.
document.write(arr + "<br>"); // [1, 2, ]
// 배열에 빈자리가 생긴 것으로 undefined 값으로 직접 설정된 것은 아님.
document.write(arr[2] + "<br>");
// 배열의 요소를 삭제하는 것이지 배열의 길이까지 줄이는 것은 아님.
document.write(arr.length);

//typeof 연산자
console.log(typeof 32)

//instanceof 연산자
var str = new String("이것은 문자열입니다.");

console.log(str instanceof Object);  // true
console.log(str instanceof String);  // true
console.log(str instanceof Array);   // false
console.log(str instanceof Number);  // false
console.log(str instanceof Boolean); // false