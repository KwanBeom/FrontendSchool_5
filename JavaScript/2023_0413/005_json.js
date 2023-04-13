// JSON.parse() : JSON 문자열을 자바스크립트 객체로 변환한다 (JSON 문자열 => JS 객체)
// JSON.stringify() : 자바스크립트 객체를 JSON 문자열로 변환한다 (JS 객체 => JSON 문자열)

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj);

const json1 = '[1, 2, 3]';
const obj1 = JSON.parse(json);
console.log(obj);

const json2 = '[1, 2, [1, 2, 3]]';
const obj2 = JSON.parse(json);
console.log(obj);


const json3 = {"result":true, "count":42}
const s = JSON.stringify(json)
s

// 깊은 복사
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l);

// error
let l1 = [10, 20, 30];
let a = JSON.parse(`${l1}`);
a[0] = 1000;

console.log(l);