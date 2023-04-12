// 재귀함수 => 내가 나를 호출하는 것
// 반복문으로 반복할 수 있는 것은 재귀함수로 만들 수 있음
// 재귀함수로 만들 수 있는 것은 반복문으로 만들 수 있음

// 알고리즘 문제에서는 간혹 재귀를 호출해야 하는 상황이 있음



// 누적합(이렇게 일일이 순회하지 않고 구할 수 있는 값이기 때문에 2개다 비효율 적인 코드입니다. 특히 소수 구하는 문제 같은 곳에서 2중 for문 사용하는 것도 매우 비효율 적입니다.)
result = 0
for (let i = 1; i < 1001; i++) {
    result += i
}
result

function factorial(n){
    if(n <= 1){ // 종료조건이 없으면 무한반복
        return n
    }
    return n * factorial(n-1)
}


// 아래처럼 수학 수식 사용
const n = 1000
console.log(n * (n + 1) / 2)

// 문자열 뒤집기
result = ''
for (const i of 'hello wolrd') {
    result = i + result;
}