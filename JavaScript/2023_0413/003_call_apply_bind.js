// apply, call, bind

// call
// call() 메서드의 인수에 this로 사용할 값을 전달할 수 있다.
var peter = {
    name: 'Peter Parker',
    sayName: function () {
        console.log(this.name);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce);

//////////////////

var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사) {
        console.log(this.name + 감탄사);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}

peter.sayName() // Peter ParkerUndefined
peter.sayName('!') // Peter Parker !
peter.sayName.call(bruce, '!'); // Bruce Wayne !


// apply

var peter = {
    name: 'Peter Parker',
    sayName: function (is, is2) {
        console.log(this.name + ' is ' + is + ' or ' + is2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);

// call apply 차이
// call은 아규먼트를 직접받고 apply는 아규먼트를 두번째부터 배열로 넣어줘야함


// bind
// 바인딩에 대한 개념 이해필요
function sayName() {
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName: sayName
}

var peter = {
    name: 'peter',
    sayName: sayName.bind(bruce)
}

peter.sayName();
bruce.sayName();