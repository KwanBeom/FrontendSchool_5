// 전개구문 ...
// 배열 전개구문
const 과일들 = ['사과', '파인애플', '수박'];
const 생선들 = ['조기', '갈치', '다금바리'];
const 합치면 = [...과일들, ...생선들];

console.log(합치면); 

// 객체 전개구문
const 위니브1 = {개리: 1, 빙키: 2};
const 위니브2 = {라이캣: 3};
const 위니브3 = {...위니브1, ...위니브2};

console.log(위니브3);

// 구조분해할당

for (const [i, j] of [[1, 2], [3, 4], [5, 6]]);