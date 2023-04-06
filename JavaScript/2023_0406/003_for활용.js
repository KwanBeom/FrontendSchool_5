let arr = [10, 20, 30, 40, 50]
for(let i=0; i<arr.length; i++){

}
// for in문 IE 사용 가능
let obj = {'one': 10, 'two': 20}
for(const i in arr){
    // index를 순회
}
for(const i in obj){
    // key를 순회
}
let s1 = 0;
for (const i in '.'.repeat(100)) {
    s1 += parseInt(i)
}
console.log(s)
// for of문 IE 사용 불가
// let arr = [10, 20, 30, 40, 50]
for (const item of arr) { // for of 문은 iterable(순회가능)한 값이 사용되어야 한다
    console.log(item)
}

for (const i in 'hello world'){
    console.log(item)
}

// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [
    {
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    }
]
// for문
// let ageSum = 0;
// for(let i=0; i < user.length; i++){
//     ageSum += user[i].age / user.length;
// }

// for of 문
// let s = 0
// for (const i of user){
//     s += i.age
// }

user.map(v => v.age)
.filter(v => !!v)
.reduce((a,b) => a + b, 0)


// why? for of와 for in문에서는 const가 가능한가요?
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
for (const i = 0; i < 10; i++) {
    console.log(10);
} // error

{
    const x = 10
    console.log(x)
}
console.log(x)

for (const i in [1, 2, 3]) {
    console.log(i)
}

for (const i of [1, 2, 3]) {
    console.log(i)
}
