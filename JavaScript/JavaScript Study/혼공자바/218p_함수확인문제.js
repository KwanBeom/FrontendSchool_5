function multiplyAll(x, y){
    let result = 1;
    for(let i = x; i <= y; i++){
        result *= i
    }
    return result;
}

multiplyAll(1, 8);

const max = function(arr){
    let output = arr[0]
    for (const i of arr) {
        if(output < i){
            output = i
        }
    }
    return output
}

console.log(max([1, 2, 3, 4, 5]))

const max1 = function(x){
    let output = arr[0]

    return output
}

console.log(max(1, 2, 3, 4, 5))