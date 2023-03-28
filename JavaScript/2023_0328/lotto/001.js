var lotto = [];
for(var i = 0; i < 6; i++){
   lotto.push(parseInt(Math.random() * 45 + 1));
};
document.write(lotto);