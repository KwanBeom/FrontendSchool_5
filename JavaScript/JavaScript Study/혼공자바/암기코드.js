// 구구단 for
for (let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}
// 구구단 while
let i = 2;
while(i < 10){
    let j = 1;
    while(j < 10){
        console.log(`${i} * ${j} = ${i*j}`)
        j++;
    }
    i++;
}

// 기억해두면 좋은 코드
let s = 'hello world'
let result = ''
for (let i = 0; i < s.length; i++){
    console.log(i)
    result += s[i]
}

console.log(result)

let s1 = 'hello world'
let result1 = ''
let count = 0;
while (count < result.length){
    result1 += s1[count]
    count++
}


// 기억해두면 좋은 코드 
// 팩토리얼 for
let s2 = 1;
for (let i = 1; i < 6; i++) {
    s2 *= i;
}
console.log(s2)
// 팩토리얼 while
let s3 = 1;
i = 1;
while (i < 6) {
    s3 *= i
    i += 1
}