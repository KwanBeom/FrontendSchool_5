// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가 사용하겠다
function 가장작은값의두배(a, b){
    z = b(...a) * 2
    return z
}

가장작은값의두배([10, 20, 11, 21, 19, 17],  Math.min)

let arr = [10, 20, 11, 21, 19, 17]
arr.map((v, i) => v * 2)