// https://paullabworkspace.notion.site/bd7905dbc2194415b429074e75cdb7f7
// 연습문제 1번
let arr = [10, 20, 30, 10, 20, 30, 40, 10];
let sum = arr.reduce((acc, cur) => {
    return acc + cur;
}, 0)
const result = sum / arr.length;
const result1 = (sum - result) ** 2;

console.log(result)
console.log(result1)

// 연습문제 2번
let str = '5, 4, 10, 2, 5';
let arr2 = str.split(',');
let sum2 = 0;
for (const key of arr) {
    let num = parseInt(key);
    sum += num;
}

// 연습문제 3번
const arr3 = [11, 22, 33, 111, 2].join('').slice('');
let result2 = 0;

for (var key of str) {
    result += parseInt(key)
}

// 연습문제 5번
const arr5 = [];

while(arr.length < 6){
    let num = parseInt(Math.random() * 45 + 1);
    if(arr.includes(num) === false){
        arr.push(num);
    }
}
arr.sort((a, b) => a - b);


