var lotto = [];
for(var i = 0; i < 6; i++){
    var num = parseInt(Math.random() * 45 + 1);
    if(lotto.indexOf(num) == -1){ 
    // .indexOf
    //배열에서 지정한 요소를 찾을 수 있는 첫번째 인덱스를 반환
    //값이 없다면 -1을 반환
        lotto.push(num);
    }
}
document.write(lotto);