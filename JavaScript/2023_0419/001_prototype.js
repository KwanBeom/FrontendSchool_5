// 프로토타입이란?
// 프로토타입은 특정 객체에 대한 참조이다.
// 즉 어떤 공간을 가르키고 있다.
// 생성자 함수가 인스턴스를 생성하게 되면 그 안에는 숨겨진 프로퍼티인
// 프로토타입이 존재학 ㅔ됨
// 코드상에서는 __proto__로 표현된다.

// prototype은 함수에 존재하고, __proto__는 인스턴스에 존재한다.__proto__는


function Test() {}
const obj = new Test();
Test.prototype === obj.__proto__ // true

///////////

function Bk() {
    this.age = 20;
}

const bk1 = new Bk();
const bk2 = new Bk();
const bk3 = new Bk();

Bk.prototype.name = "범관"

/////

function FoodPicker(foodNames) {
    this.name = foodNames;
}

const 한식 = new FoodPicker(['청국장', '밥', '김치'])
const 양식 = new FoodPicker(['파스타', '피자', '스테이크'])

FoodPicker.prototype.sayMenu = function() {
    console.log(`${this.name[Math.floor(Math.random() * this.name.length)]}`)
}

//////

const me = {
    name: '최범관',
    address: '노원구',
    age: '23',
    study: function(){
        this.age++
    }
}

function Me(name, address, age){
    this.name = name;
    this.address = address;
    this.age = age;
}
Me.prototype.study = function(){
    this.age++
}

const bk = new Me('최범관', '노원구', 23)

// prototype 
// __proto__ 

// 자바스크립트의 타입은 기본적으로 Object 타입을 상속받고 있음
