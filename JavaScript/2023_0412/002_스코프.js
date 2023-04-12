// 전역 스코프

// 블록레벨 스코프 let const

// 함수 스코프 var
// var 키워드로 선언한 변수는 오로지 함수의 코드블록만을
// 지역스코프로 인정한다
var i = 0;
{ // 지역스코프
    var i = 0;
}

////////////////////////////////////

{
    let x = 10, y = 20; // 블록레벨 함수
}
console.log(x, y) // reference error

// 지역변수와 전역변수

let x = 100; // 전역변수
function 함수(){
    let y = 20; // 지역변수
    console.log(x) // 스코프 체이닝, 계속해서 상위 스코프를 따라 올라감
    // 전역까지 올라갔는데도 변수가 없다면 에러 발생
}
함수()

function 함수1(){
    let x = 20
    function 함수2(){
        function 함수3(){
            let x = 30
            console.log(x)
        }
        함수3();
    }
    함수2();
}
함수1();

let a = 10
let b = 10
function 함수1() {
    let a = 20
    let b = 20
    function 함수2() {
        let a = 30
        console.log(a, b)
    }
    함수2()
}
함수1()


// 함수의 호이스팅
함수(10)

function 함수(x){
    return x + 100;
}
// error
함수(10)

let 함수 = x => x + 100;
// error
함수(10)

const 함수 = function(x) {
    return x + 100;
}