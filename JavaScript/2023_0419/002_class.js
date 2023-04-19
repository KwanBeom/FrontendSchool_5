// 자바스크립트 ES6부터는 class라는 문법을 사용할 수 있습니다
// class를 붕어빵 틀이라고 비유하고 붕어빵은 인스턴스라고 비유할 수 있습니다.

// class 사용방법

function funcMe(name){
    this.name = name;
}
funcMe.prototype.sayName = function(){
    console.log(`제 이름은 ${this.name} 입니다.`)
}
const human = new funcMe('범관')

class clMe {
    constructor(name) {
        this.name = name;
    }
    sayName () {
        console.log(`제 이름은 ${this.name} 입니다.`);
    };
}
const person = new clMe('범관')

// 위 두개는 동일한 동작을 함
// class로 메서드를 선언하면 인스턴스내에 자동으로 프로토타입으로 지정해줌


// 클래스의 상속은 extends 키워드를 사용합니다
// 상속 받는 클래스는 파생클래스라고 부릅니다