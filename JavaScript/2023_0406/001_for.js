const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text = "";

for(let i = 0; i < cars.length; i++){
    text += `<h2> ${cars[i]} </h2>`;
}
document.body.innerHTML = text

// let을 생략하면 i가 전역으로 생성됨 주의
for(let i = 0; i < 10; i += 2){
    console.log(i)
}

// for (;;) {
//     // 무한반복 코드입니다. 
//     // 이런 코드는 작성도 하지 마세요.
//     // 의도한 무한반복은 매우 위험합니다.
//     // 무한반복은 메모리를 많이 잡아먹기 때문에 시스템 전체의 영향이 갑니다. 
//     // 1. 반복의 시간을 가능하면 정해주세요.
//     // 2. 탈출 조건을 명확히 해주세요.
//     console.log('실행하지 마세요.')
// }


for (let i = 0; i < 10;) {
    console.log('실행하지 마세요.')
    i += 1
}

for (let i = 0;;) {
    console.log('실행하지 마세요.')
    i += 1
    if (i >= 10) {
        break
    }
}

for (;;) { //무한반복입니다.
    let i = 0
    console.log('실행하지 마세요.')
    i += 1
    if (i >= 10) {
        break
    }
}

let i = 0
for (;;) {
    console.log('실행하지 마세요.')
    i += 1
    if (i >= 10) {
        break
    }
}