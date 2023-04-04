// 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics

// 일반적 함수형태 // 함수 선언문 // 파선아실
function one(a, b){
    let z = a + b;
    return z ** 2;
}

one(1, 2)

// 화살표 함수
const two = (a,b) => (a + b) ** 2
two(1, 2)

// 익명 함수 // 함수 표현식
const three = function(a, b){
    let z = a + b;
    return z ** 2;
}

three(1, 2)


// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가 사용하겠다
function four(a, b, c){
    let z = c(a, b) + c(a, b)
    return z * 2
}

four(7, 3, one)

function hello(para){
    console.log(para)
    console.log('hello')
    return 100
}
console.log(hello(10))

let x = console.log('hello')
x // undefined

// 함수, 메서드(클래스 안에 들어간 함수)
// .을 찍어서 접근할 수 있는 함수 => 메서드
// 함수를 호출할 수 있는 이름은 결국 변수
let cl = console.log;
cl('hello')

// 3개는 같은 코드
function hello1(){
    console.log('hello');
}
function hello2(){
    console.log('hello');
    return
}
function hello3(){
    console.log('hello');
    return undefined
}

function hello5(){
    if (true){
        if (false){
            if(true){
                return
            }
        }
    }
    console.log('hello')
}
// return을 하더라도 1회 반복만 종료되는 것이지, 전체 반복이 종료되는 건 아님
const y = [10,20,30,40];
y.forEach(el => {
    console.log(el)
    return
    console.log('world')
})

// 함수를 사용하면 유지보수하기 용이함
// 재사용성, 구조파악

function 함수1(a, b, c){
    return a + b + c
}

// 에러를 반환하지 않음 JS의 문제
함수1(10, 20, 30, 40) // 60
함수1(10, 20) // NaN


function 함수1(a=10, b=20, c=30){
    return a + b + c
}
// a와 c에 들어갈 거라 예상했지만 a와 b에 들어갑니다
함수1(a=1, c=1)

// 화살표 함수 다양한 예제
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
    return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = x => x + 10

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = x => x + 10

let 결과 = 함수3(2);

console.log(결과);

// 즉시 실행 함수
(function() {
    console.log('즉시 실행 함수는 함수를 괄호로 감싸주면 바로 실행됩니다')
})();

