const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function(el){
    return el % 2 === 1;
})

function solution(n){
    return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0);
}

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))

// reduce
// 0을 항상 넣어주세요
const arr1 = [1, 2, 3]
arr1.reduce((a, c) => a + c, 0)

// includes
const arr2 = ['hello', 'world', 'bk']
arr2.includes('hello')

// join
const arr3 = ['010','3641','0936']
arr3.join('-')
// 이렇게 사용하면 안됨
const arr4 = [010,3641,0936] 

// 0b100 // 'b'inary
// 0o100 // 'o'cta
// 0x100 // he'x'a