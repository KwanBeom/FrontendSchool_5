let x = 5;
let y = 10;

console.log(x > y);

let a = true;
let b = false;

console.log(a && b);


// true false가 아닌 값을 and or 연산 했을 경우 단락회로평가를 하게 된다.
let a1 = 'hello';
let b1 = '';

console.log(a1 && b1);

Boolean('hello') // true
Boolean('') // false
Boolean([1, 2, 3]) // true
Boolean([]) // true 
Boolean({'one': 1, 'two': 2}) // true
Boolean({}) // true
Boolean(0) // false
Boolean(-1) // true
Boolean(undefined) // false
Boolean(null) // false
Boolean(NaN) // false

if (undefined){
    console.log('hello')
}

let aa;
if (aa){
    console.log('hello')
}

// 답할 수 있어야 견고한 코드를 짤 수 있습니다.
// 견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드
let aaa;
if (aaa > 100){
    console.log('hello')
}