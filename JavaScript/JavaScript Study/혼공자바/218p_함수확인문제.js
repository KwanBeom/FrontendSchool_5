// 1번
function multiplyAll(x, y){
    let result = 1;
    for(let i = x; i <= y; i++){
        result *= i
    }
    return result;
}

multiplyAll(1, 8);


// 2번
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

// 3번 풀어봐야함
const max1 = function(...x){
    let output = arr[0]

    return output
}

console.log(max(1, 2, 3, 4, 5))

// 4번 풀어봐야함
{
const max = function(...x){
    let output
    let items

    if(Array.isArray(items)){
        console.log('1')
    output = items[0]
        for(const i of items){
            if(output < i){
                output = i;
            }
        }
    }
    if(typeof items == Number){
        console.log('2')
        output = math.Max(items);
    }


    return output
}
}