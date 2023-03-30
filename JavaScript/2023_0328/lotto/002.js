var lotto = [];

while (lotto.length < 6){
    // .length 배열의 길이
    var num = parseInt(Math.random() * 45 + 1);
    if(lotto.indexOf(num) == -1){ 
        lotto.push(num);
    }
}
document.write(lotto);