{
    let output = '';

    for(let i = 1; i < 10; i++){
        for(let j = 0; j < i; j++){
            output += '*'
        }
        output += "\n"
    }

    console.log(output)
}

{
/// 
let output = '';

    for(let i = 1; i < 15; i++){
        for(let j = 15; j > i; j--){
            output += ' '
        }

        for(let k = 0; k < 2 * i - 1; k++){
            output += '*'
        }
    output += '\n'
    }
console.log(output)
///
}


{
    let output=''
    const size=5
    
    
    for(let i=0;i<size;i++){
        for(let j=0;j<size-i-1;j++){
            output+=' '
        }
        for(let j=0;j<2*i+1;j++){
            output+='*'
        }
        output+='\n'
    }
    
    for(let i=0;i<size-1;i++){
        for(let j=0;j<i+1;j++){
            output+=' '
        }
        for(let j=0;j<(2*size-3)-2*i;j++){
            output+='*'
        }
        output+='\n'
    }
    
    console.log(output);
}