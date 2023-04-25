// 확인문제 1번
let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76]

numbers = numbers.filter((value) => 
    value % 2 === 1 && value <= 100 && value % 5 === 0
)
console.log(numbers)

// 확인문제 2번
const array = ['사과', '배', '귤', '바나나']

array.forEach((value, index) => {
    setTimeout(() => {
        console.log(value);
    }, 0)
    console.log(index)
})

