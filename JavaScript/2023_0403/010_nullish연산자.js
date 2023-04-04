// https://ko.javascript.info/nullish-coalescing-operator
// 스펙 추가 된 지 얼마 안된 문법, 구식 브라우저는 폴리필이 필요하다

let firstName = null;
let lastName = null;
// let nickName = 'bk';
let nickName = null;

console.log(firstName ?? nickName)
console.log(firstName ?? lastName ?? nickName)
console.log(firstName ?? lastName ?? nickName ?? '익명사용자')

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c)

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100)
console.log(height ?? 100)

// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined