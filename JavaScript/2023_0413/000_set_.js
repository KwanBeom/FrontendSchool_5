// 집합, 합집합, 교집합, 차집합
// 실무에선 자주 사용하진 않지만 알고리즘 문제에선 자주 사용되는 자료형


let s = new Set('aabbccdd') // 중복을 제거하고 객체로 반환


회사게시판 = ['최', '최', '최', '최', '최', '김', '김', '김', '박', '이', '이']
let 게시자 = new Set(회사게시판)
// q1. 몇명이 게시판에 글을 썼나요 (각각의 인원이 유일해야 함)
for (const i of 게시자) {
    console.log(i, 회사게시판.filter(e => e === i))
}

// q2. 몇개의 글을 작성했나요
for (const i of 게시자) {
    console.log(i, 회사게시판.filter(e => e === i).length)
}


/// set 연습
let ns = new Set('aaabbbcccddd')
ns.size
ns.has('a')
ns.has('f')
ns.has('z')
ns

for (const i of ns) {
    console.log(i)
}


// 교집합
let a = new Set('abc')
let b = new Set('cde')
let cross = [...a].filter(e => b.has(e))

// 차집합
let union = new Set([...a].concat(...b));
let union1 = new Set(...a, ...b);

// 합집합
let def = [...a].filter(e => !b.has(e));


// set의 forEach는 매개변수가 value value array


// 이터러블한 객체란 ? 순회 가능한 객체
// 순서를 보장하는 객체다(이터러블)
// object는 순서를 보장하지 않는다
// set, map, array, string

// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 교집합의 갯수 구하는 문제
function solution(s1, s2) {
    return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

function solution(s1, s2) {
    s1 = new Set(s1)
    s2 = new Set(s2)
    let cro = [...s1].filter(e => s2.has(e))
    return cro.length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
    const mySet = new Set([3, 6, 9]);
    return String(order) // '29423' 
        .split("") // ['2', '9', '4', '2', '3']
        .filter((num) => mySet.has(parseInt(num))).length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n) {
    let answer = [];

    let i = 2;
    while (i <= n) {
        if (n % i === 0) {
            answer.push(i);
            n = n / i;
        } else {
            i++;
        }
    }

    return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}