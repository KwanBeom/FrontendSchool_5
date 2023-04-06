const value = "two";

switch (value) {
    case "one":
        console.log("hello 1");
        break;

    case "two":
        console.log("hello 2");
        break;

    case "three":
        console.log("hello 3");
        break;
    default: // else
        console.log("hello default");
        break;
}

const value2 = "two";
// break; 이 없으면 다음 case로 넘어간다
switch (value2) {
    case "one":
        console.log("hello 1");

    case "two":
        console.log("hello 2");

    case "three":
        console.log("hello 3");

    default:
        console.log("hello default");
}

switch (new Date().getDay()) {
    case 0:
        console.log(일);
        break;
    case 1:
        console.log("월");
        break;
    case 2:
        console.log("화");
        break;
    case 3:
        console.log("수");
        break;
    case 4:
        console.log("목");
        break;
    case 5:
        console.log("금");
        break;
    case 6:
        console.log("토");
        break;
    default:
        break;
    // default 는 견고한 코딩을 위해 넣는 게 좋음
}

// 객체[인덱스]로 switch문과 유사하게
const 요일 = new Date().getDay()
const 요일객체 = {
    0: '일',
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
    6: '토'
}
console.log(요일객체[요일])
// default // 없는 값일 시에는
// 널리쉬 연산자 사용
console.log(요일객체[요일] ?? 'hello');
// 단락평가 사용
console.log(요일객체[요일] || 'hello');