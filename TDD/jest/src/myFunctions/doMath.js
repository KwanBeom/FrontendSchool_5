function sum(a, b){
    return a + b
}

function substract(a, b){
    return a - b
}

function multiply(a, b){
    return parseFloat((a * b).toFixed(3))
}

function divide(a, b){
    if(a===0 || b === 0){
        throw new Error("0이면 안됨니다")
    } else return parseFloat(a / b.toFixed(3))
}

export {sum, substract, multiply, divide}