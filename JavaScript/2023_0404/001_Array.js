const arr = [10, 20, 30];
arr[0] = 50;
console.log(arr)
console.dir(arr) // 프로퍼티와 메서드를 볼 수 있다.

arr[1]
arr.length 
arr['length']
arr.length = 10
arr[0] = 100

//mutable(변경가능), immutable(불변)

// 프로퍼티 추가
['bk'] = 100
arr.cbk = 1000

// 배열 특징
// Array(100).fill(0)

// 1. 배열은 순서가 있음. 순서를 index 순서대로 호출을 indexing이라고 부름
// 배열 안의 값을 원소(elements)라고 함
// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있음
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
arr[1][2] // 6


// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10 // 스칼라
const b = [10, 20, 30] // 벡터
const c = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] // 매트릭스
const d = [
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]]
] // 텐서 (3차원 이상의 다차원)


const arr = [1, 2, 3]

// push
arr.push(2)

// pop
let lastValue = arr.pop() // 배열의 마지막 값을 꺼내 반환한다
lastvalue

// unshift
const myArray1 = ["사과", "바나나", "수박"]
myArray1.unshift("오이", "배");

//shift
let myArra2 = ["사과", "바나나", "수박"]; // 배열의 첫번째 값을 꺼내 반환한다
let firstValue = myArray2.shift();
firstValue

// push : 배열의 뒤부터 값을 삽입한다
// pop : 배열의 마지막 값을 꺼내 반환한다
// unshift : 배열의 앞부터 값을 삽입한다
// shift : 배열의 첫번째 값을 꺼내 반환한다

// push 실무 예제
// let tableBodyData = []
// for (const iterator of data) {
//     tableBodyData.push(`          
//         <tr>
//             <td>${iterator['a']}</td>
//             <td>${iterator['b']}</td>
//             <td>${iterator['c']}</td>
//             <td>${iterator['d']}</td>
//             <td>${iterator['e']}</td>
//             <td>${iterator['f']}</td>
//         </tr>
//     `)
// }
// document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')

// ...은 전개구문
// 실무 팁
let tip1 = [1, 2, 3, 4, 5]
tip1[tip1.length - 1]
// 값의 변동 없이 값을 반환하는 법
console.log([...tip1].pop())
let tip2 = [...tip1]
tip2.pop()
tip2

let tip3 = [1, 2, 3, 4, 5]
let tip4 = [10, 20, 30, 40, 50]

console.log([...tip3, 1000, ...tip4]); // 배열 사이에 값 추가

const tip5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip5.flat())

const tip6 = [
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]]
]

tip6.flat()
tip6.flat(1);
tip6.flat(2);
tip6.flat(Infinity);


const tip7 = new Array(10).fill(0) // Array(10).fill(0)
const tip8 = Array.from('hello world')

'.'.repeat(100).split('.') // 권하진 않음

//Array<number>.splice(start, deleteCount, items)
const arr = [0, 1, 2]
arr.splice(1, 0, 10, 20, 30) // arr의 1번부터 0개를 지우고 10, 20, 30을 넣겠다

// splice() 실습
arr = [10, 20, 30, 40, 50]
const x = [1, 2, 3]
arr.splice(1, 0, ...x)
arr.splice(6, 1, ...x)

arr.splice(2, 2) // 2번부터 값 2개를 지움
arr.splice(1)


// Array.slice(start, end)
const myArray3 = ["사과", "바나나", "체리", "두리안", "블루베리"];
myArray3.slice(1, 4)

let tip9 = [1, 2, 3, 4, 5]
console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)])
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)])

let tip10 = [1, 2, 3, 4, 5]
tip10.splice(2, 0, 1000)


// forEach()
const arr = [10, 20, 30, 40, 50];
arr.forEach(function(item, index){
    console.log(index, item)
    console.log('hello')
    console.log('world')
});

arr.forEach(function(item, index, arr){
    console.log(index, item, arr)
    console.log('hello')
    console.log('world')
});


const arr = Array(100).fill(0);
const arr2 = [];
// 같은코드 1 (익명 함수)
// arr.forEach(function(item, index){
//     arr2.push(index)
// })

// 같은코드 2 (화살표 함수)
// arr.forEach((item, index) => {
//     arr2.push(index)
// })

// 같은코드 3 (중괄호 생략 화살표 함수, 실무에서 주로 사용)
// arr.forEach((item, index) => arr2.push(index))

// const tip9 = Array(100).fill(0).map

// nodeList에서의 forEach와 Array에서 forEach는 다름
// nodeList에서 forEach는 IE를 지원하지 않음

const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});

// map (면접에서 자주 나옴. 데이터를 뽑으려고 사용 함)
// map은 새로운 배열을 생성한다.
const arr = [1, 2, 3]

arr.map(function(item, index){
    return item ** 2
})
arr.map(function(x){
    return item ** 2
})

arr.map(x => x ** 2)

// 같은코드 1
const arr = Array(100).fill(0)
arr.map((v, i) => i)

// 같은코드 2
const arr = Array(100).fill(0)
arr.map(function(v, i){
    return i
})

// 같은 코드 3
const arr = Array(100).fill(0)
function bk(v, i){
    return i
}
arr.map(bk)

// 같은 코드 4
const arr = Array(100).fill(0)
arr.map((v, i) => {
    return i
})

const tip11 = Array(100).fill(0).map((v, i) => i + 1)

const tip12 = [
    {
      "_id": "642ba3980785cecff3f39a8d",
      "index": 0,
      "age": 28,
      "eyeColor": "green",
      "name": "Annette Middleton",
      "gender": "female",
      "company": "KINETICA"
    },
    {
      "_id": "642ba398d0fed6e17f2f50c9",
      "index": 1,
      "age": 37,
      "eyeColor": "green",
      "name": "Kidd Roman",
      "gender": "male",
      "company": "AUSTECH"
    },
    {
      "_id": "642ba39827d809511d00dd8d",
      "index": 2,
      "age": 39,
      "eyeColor": "brown",
      "name": "Best Ratliff",
      "gender": "male",
      "company": "PRISMATIC"
    }
  ]

// askup

const ages = tip12.map((item) => item.age);
console.log(ages)