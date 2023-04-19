const me = {
    name: '최범관',
    address: '노원구',
    age: '23',
    study: function(){
        this.age++
    }
}

// 생성자
// new 연산자와 함께 사용하는 함수

// 생성자의 장점은 생성자를 통해 생성된 객체는 같은 프로퍼티와 메서드를 공유할 수 있음
// new 키워드를 통해 생성된 인스턴스(반환되어 만들어진 객체)의 생성자 함수의 관계는 instanceof로 확인할 수 있음

function NewFactory(name){
    this.name = name;
    this.sayName = function(){
        console.log(`제 이름은 ${this.name} 입니다.`)
    }
}

// new 키워드를 통해 생성된 인스턴스
const robot = new NewFactory("범관") 


// new 연산자를 사용하면, this는 생성된 인스턴스를 가르킵니다


function FoodPicker(foodNames) {
    this.name = foodNames;
    this.sayMenu = function() {
        console.log(`${this.name[Math.floor(Math.random() * this.name.length)]}`)
    }
}

const 한식 = new FoodPicker(['청국장', '밥', '김치'])

