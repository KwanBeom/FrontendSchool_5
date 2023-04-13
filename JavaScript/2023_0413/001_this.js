// this는 객체를 가리키는 자기 참조 변수
// 자신을 호출한 객체, 자신이 생성할 객체
function a(){console.log(this)}
a(); // window를 호출

let myObj = {
    val1: 100,
    func1: function(){
        console.log(this);
    }
}

myObj.func1(); // myObj를 호출

///////////////

let myObj1 = {
    val1: 100,
    func1: function(){
        console.log(this);
    }
}

let test = myObj1.func1(); 
test() // window를 호출

// this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라진다


function sayName(){
    console.log(this)
}

var c = {
    'hello' : 'world',
    'say' : sayName
}

var b = {
    'c' : c,
}

var a = {
    'b' : b
}

// button1이 myObj를 가지는게 아니고, 같은 myObj의 주소를 가리키게 된 것

var name = 'bk'

function sayName(){
    console.log(this.name)
}

sayName()

let peter = {
    name: 'Peter Parker',
    say: sayName
}
let brue = {
    name: 'Bruce Wayne',
    say: sayName
}

////////
function attackBeam(){ // 레이저 공격
    this.hp -= 20
}

function attackKnife(){ // 칼 공격
    this.hp -= 5
}

let jombi = {
    name: 'jombi',
    damaged: [attackBeam, attackKnife],
    hp: 10000,
    power: 2
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp: 1000,
    power: 100
}

jombi.damaged([0])
jombi



////////
let 호텔 = [{
    '이름': '하나호텔',
    '위치': '제주도 제주시 001',
    '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '둘호텔',
    '위치': '제주도 제주시 002',
    '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
    '방의개수': 100,
    '예약자수': 30,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '셋호텔',
    '위치': '제주도 제주시 003',
    '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
    '방의개수': 120,
    '예약자수': 80,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

////////

function a(){
    console.log(this)
    function b(){
        console.log(this)
        function c(){
            console.log(this)
        }
        c()
    }
    b()
}
a()

// a, b, c 모두 window
// 타고올라가는 형태가 아닙니다. a.b.c.this x