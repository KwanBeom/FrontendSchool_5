// https://paullabworkspace.notion.site/bd7905dbc2194415b429074e75cdb7f7
// 연습문제 1번
let arr = [10, 20, 30, 10, 20, 30, 40, 10];
let sum = arr.reduce((acc, cur) => {
    return acc + cur;
}, 0)
const result = sum / arr.length;
// 분산
const result1 = arr.reduce((acc1, cur1) => {
    return acc1 += ((cur1 - result) ** 2) / arr.length;
}, 0)
// 각 값 - 평균 ** 2 / 6


// 연습문제 2번
let str2 = '5, 4, 10, 2, 5';
let arr2 = str2.split(',');
let sum2 = 0;
for (const key of arr2) {
    let num = parseInt(key);
    sum2 += num;
}


// 연습문제 3번
const arr3 = [11, 22, 33, 111, 2];
const num3 = arr3.join('').slice('');
let result3 = 0;
for (var key of str) {
    result += parseInt(key)
}


// 연습문제 4번 반복문만 사용하여 숫자단위 콤마
let userInput = prompt("");
const str = userInput.toString();
const num = parseInt(userInput);
let result4 = '';
for(let i = -1; i > -str.length; i--){
    if(i % 3 === 0){
        let x = str.slice(i-3, i);
        result4 = x + ',' + result4;
    }
}
result4 += str.slice(str.length - str.length-3 , str.length)


// 연습문제 5번
const arr5 = [];

while(arr.length < 6){
    let num = parseInt(Math.random() * 45 + 1);
    if(arr.includes(num) === false){
        arr.push(num);
    }
}
arr.sort((a, b) => a - b);


