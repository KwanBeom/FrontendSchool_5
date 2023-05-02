class sausage {
    constructor(...taste){
        this.taste = taste
    }
    whatTaste() {
        console.log(`${this.taste} 맛이 난다!`)
    }
}

class firesSausage extends sausage{
    whatTaste() {
        console.log(`${this.taste}맛과 불맛이 난다!`)
    }
}

let a = new sausage('파', '소고기', '겨자')
let b = new firesSausage('과자', '피')

///////////////////////////////

// 오버로딩과 오버라이딩


// 비공개 프로퍼티
// class를 통해 인스턴스를 만들었을 때 우리는 아무런 제약없이
// 인스턴스의 프로퍼티에 접근할 수 있다.

a.taste // [파, 소고기, 겨자]
a.taste = '파' // '파'

// 하지만 중요한 데이터를 비공개 프로퍼티로 변경할 수 있음
class Robot{
    #password
    constructor(name, pw){
        this.name = name;
        this.#password = pw;
    }

    sayName() {
        console.log(`제 이름은 ${this.name}입니다.`)
    }
    getPassword() {
        return this.#password
    }
    setPassword() {
        this.#password = pw;
    }
}

const myBot = new Robot();

let mybot = new Robot();