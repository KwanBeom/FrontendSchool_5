// 객체처럼 탐색 가능한 함수의 특성
function 함수(a, b){
    return a + b
}

console.dir(함수)
// length는 파라미터의 갯수

// array, object, function이 모두 같은 방식으로 접근하고 값을 수정할 수 있다
함수['location'] = 'hi'
console.dir(함수)
// console.dir(hi) 이렇게 호출은 안됨

함수['length'] = 5
console.dir(함수) // 변경이 되지 않는 프로퍼티도 있음


// 아규먼트가 순서대로 들어가는 함수의 특성

function 함수(a=10, b=20, c=30){
    return a + b + c
}

함수(c=300) // 330이 아니고 350, 순서대로 들어갑니다.

// roro기법
// 입력되는 아규먼트가 많은 함수의 경우 호출하는 쪽에서 어떤 값이 들어가는지 명확히 알기 어렵다
const 중요한변수 = hello("Title", 20, 50, 100, 50, 100, 200, 300, true);

// 어떻게 사용하나요
function 로그인정보({
    회원등급 = 'Gold',
    글쓰기 = true,
    글읽기 = false,
    채널관리 = true,
    백업 = '1주일 이내 가능',
    소셜로그인여부 = true
}){
    console.log('...함수 기능...')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
}

로그인정보({
    회원등급: 'Silver',
    소셜로그인여부: false, // 순서까지 바뀜
    백업: '3일 이내 가능' // 중간에 생략된 값도 있음
})

// 원리
// 변수명을 object의 key로 할당, 변수의 값은 value로 할당됨
// let {one, two, three} = {one:10, three:30, two:20};
let {one=100, two, three} = {three:30, two:20};

function 함수({
    a = 1,
    b = 2,
    c = 3
} = {}){
    console.log(a, b, c)
    return a + b + c
}

함수()
함수({})
함수({b: 100})