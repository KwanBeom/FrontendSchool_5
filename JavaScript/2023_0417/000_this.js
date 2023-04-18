// ‘this는 기본적으로 전역 객체(js-window, node-global)를 가리키고, 호출하는 것이 object이면 해당 객체를 가리킨다’
// 예외

function attackBeam() { // 레이저 공격
    this.hp -= 20
}

function atckKnife() { // 칼공격
    if (this.name === 'thanos'){
        this.hp -= 1
        return
    }
    this.hp -= 5
}

let jombi = {
    name: 'jombi',
    damaged1: attackBeam,
    damaged2: attackKnife,
    hp: 10000,
    power: 2
}

let thanos = {
    name: 'thanos',
    damaged1: attackBeam,
    damaged2: attackKnife,
    hp: 1000,
    power: 100
}

jombi.damaged1() // Beam
jombi.damaged2() // Knife
jombi.hp