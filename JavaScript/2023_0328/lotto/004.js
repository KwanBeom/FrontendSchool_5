var lotto = [];

while (lotto.length < 6){
    // .length 배열의 길이
    var num = parseInt(Math.random() * 45 + 1);
    if(lotto.indexOf(num) == -1){ 
        lotto.push(num);
    }
}
lotto.sort((a,b) => a-b);
// .sort 배열을 맨 앞자리 숫자가 낮은 순으로 정렬
// 숫자의 크기순으로 정렬하려면 .sort((a, b) => a-b)

document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball2'>" + lotto[1] + "</div>");
document.write("<div class='ball ball3'>" + lotto[2] + "</div>");
document.write("<div class='ball ball4'>" + lotto[3] + "</div>");
document.write("<div class='ball ball5'>" + lotto[4] + "</div>");
document.write("<div class='ball ball6'>" + lotto[5] + "</div>");