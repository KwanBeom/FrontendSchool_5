// h[a-zA-Z0-9]llo
// 정규표현식 뒤에 /g (lobal) /m (ultiline)

// js는 0으로 시작하면 2진수로 판별하기 때문에 문자열로 바꿔줘야하는 이슈


'hello bk hello'
'hello bk hello'.replace('hello', 'hi')
// flag로 global을 주어 전체 변경
'hello bk hello'.replace(/hello/g, 'hi')
// 패턴을 찾아 Array로 반환
'hello bk hello'.match(/hello/g, 'hi')
'hello bk hello'.split(/hello/g)
'!qweqwrw!R1QWRqwrqweqe!qwer43r3erwe!'.split('!')

// 3. 일반문자열
/ hello / g

// 4. 처음과 끝
/^ hello / g
/ hello$ / g
/^ hello$ / g

// 5. 모든문자 매핑(.)
/ hello / g
/ h.llo / g
/ hello..world / g

// 6. 모든문자 매핑
/ h[eao]llo / g

// 7. 범위
/ h[a - zA - Z0 - 9]llo / g

// 8. 부정
/ h[^ ae]llo / g

// 9. 그루핑 규칙
/ (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
/.(a | e | o)ll./ gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

("hello hallo hello").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.[eao]ll./g)

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/


// 1번 문제
// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해줘야함
let letter = "b"
'BCBdbe'.replace(`/${letter}/g`, '');

// 정답
let my_string = 'BCBdbe';
let letter = "b"
// new RegExp(패턴으로 사용할 정규표현식)
let reg = new RegExp(letter, 'g'); // 문자열, '플래그'
my_string.replace(reg, '');



// 2번 문제
"aAb1B2cC34oOp"
    .match(/[0-9]/g)
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0)


//3번
return (order.toString().match(/[369]/g) ?? []).length;

// 4번
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{4}/g)
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{3}/g)
"abc1Addfggg4556b".match(/\w{3}/g) // 문자
"abc1Addfggg4556b".match(/\d{3}/g) // 숫자
"abc1Addfggg4556b".match(/.{3}/g) // 모든문자
"".match(/.{3}/g) // 주의 : null

function solution(){
    let reg = new RegExp(`\.{${1, n}}`, "g") // 마지막 남은것이 6개 이하여서 반환이 안됨
    my_str.match(reg)
}

function solution(){
    let reg = new RegExp(`\.{1, ${n}}`, "g") // 마지막 남은것이 6개 이하여서 반환이 안됨
    my_str.match(reg)
}

//////////////// 그룹 연습문제 ////////////////////////
// 그룹으로 인식
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
// 택1
'gogaooogogooo'.match(/[go]/g);

'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g)
'87a99b00fww89e'.match(/([0-9]{2})[a-zA-Z]/g)
'87a99b00fww89e'.match(/(\d{2})[a-zA-Z]/g)


/// https://jsalgo.co.kr/?page=2#
'r10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]+/g) //오답
'r10b9r1ce33uab8wc918v2cv11v9'.match(/[rev](10|[0-9])/g)

function solution(data){
    let answer = data.match(/[rev](10|[0-9])/g).reduce((acc, cur) => acc + parseInt(cur.slice(1)), 0).toString()
    return data = `${answer[0]}월 ${answer[1]}일`
}