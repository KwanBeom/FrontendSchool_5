// 구구단
// 암기코드 1
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`)
    }
}

let i = 2;
while (i < 10) {
    let j = 1;
    while (j < 10) {
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    i++;
}


// 암기코드 2
let s = 'hello world'
let result = ''
for (let i = 0; i < s.length; i++) {
    result = s[i] + result
}

console.log(result)



let s = 'hello world'
let result = ''
let count = 0
while (count < s.length) {
    result = s[count] + result
    count++;
}

console.log(result)

// 암기코드 3
// 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1
let s = 1;
for (let i = 1; i < 6; i++) {
    s *= i
}
console.log(s)


let s = 1;
i = 1;
while (i < 6) {
    s *= i
    i += 1
}