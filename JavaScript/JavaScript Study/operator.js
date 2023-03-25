var x = 10, y = 2;
// 산술 연산자
console.log(x + y);
console.log(x - y);
console.log(y / x);
console.log(x * y);
console.log(x % y);

//대입 연산자
console.log(x = y); // x가 y가 됨
var x = 10, y = 2;
console.log(x += y); // x = x+y
console.log(x -= y); // x = x-y
console.log(x *= y); // x = x*y
console.log(x /= y); // x = x/y;
console.log(x %= y); // x = x&y;


//증감 연산자
var x = 10, y = 5;
console.log(++x + 3); // (x + 1) - 3
console.log(x++ + 3); // (x - 3) + 1
console.log(--y + 3); // (y - 1) - 3
console.log(y-- + 3); // (y - 3) - 1

//비교 연산자
var x = 1, y = "1";
console.log(x == y); 
console.log(x != y); // not ==
console.log(x === y);
console.log(x !== y); // not ===
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

// 논리 연산자
// && : and 연산자 (*)
// || : or 연산자  (+)
// ! : not

//비트 연산자
// & : 비트 and (*)
// | : 비트 or (+)
// ^ : 비트 XOR 연산 [not(!) or(+)]
// ~ : 비트 not 연산
// << : left shift 연산
// >> : right shift 연산
// >>> : right shift 연산 후 새로운 비트는 0이 됨


