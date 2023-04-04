// 객체는 key-value 쌍으로 이루어져 있다.

const human = {
    name: "beomkwan",
    age: "23",
    from: "republic of korea",
    askingHim: function(){
        console.log("안녕하세요 최범관입니다");
    }
}

human.name = 'choi'
delete human.age;
// 다른 언어와 동작 방식이 달라 주의
'from' in human

20 in [10, 20, 30, 40]

// 유사배열객체
// 실무에서도 사용하지 않음
// 똑같은 요소로 만들어도 array가 순회할 때 더 빠름
const arr = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
}

const aespa = {
    members: ['카리나', '윈터', '지젤', '닝닝'],
    from: '광야',
    sing: function(){
        return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
    }
};


console.log(aespa.hasOwnProperty('itzy'));

// 다른 언어는 aespa.keys() 와 같은 방식으로 사용
console.log(Object.keys(aespa))
console.log(Object.values(aespa))