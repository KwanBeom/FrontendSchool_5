let m = new Map();

// Map에 값 추가
m.set("하나", "1");
m.set(1, '하나');
m.set(true, 1);
m.set(false, 0);

// Map 값에 접근

m.get("하나");

// m.set([1, 2, 3], "array");
// m.get([1, 2, 3]);

let x = [1, 2, 3];
m.set(x, 'array');

// [] == [] // false

// Map의 값이 있는지 확인
m.has('하나')
// Map의 값 제거하기
m.delete('하나')
// Map의 사이즈 확인
m.size


////////////////

// let data = new Map([['one', 1], ['two',2]]) // O
// let data = new Map(Object.entries({'one':1, 'two':2})) // O
// let data = new Map({'one':1, 'two':2}) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X


// 직접 순회가 불가한 Object
// let data = {'one':1, 'two':2}
// for (const i of data) { // X 작동되지 않습니다!
//     console.log(i)
// }

// let data = {'one':1, 'two':2}
// for (const i of Object.entries(data)) {
//     console.log(i)
// }

// 직접 순회가 가능한 Map
// let m = new Map();

// m.set('하나', 1) // 메서드 체이닝
//     .set('둘', 2)
//     .set('셋', 3)
//     .set('넷', 4)

// for (const i of m) {
//     console.log(i)
// }

// object의 단점 
let test = {'one':1, 'two': 2}
Object.keys(test); // 직접 뽑아내는 메서드가 없다.

// map은 메서드로 모두 호출 가능
m.keys()
m.values()
m.entries()

// Map -> Object간 형변환
let 맵 = new Map(Object.entries({'one': 1, 'two': 2}))
let 오브젝트 = Object.fromEntries(맵)

// 키 값의 중복이 안됩니다.
let map = new Map();
map.set('이호준', 1)
map.set('이호준', 2)
map.set('이호준', 3)