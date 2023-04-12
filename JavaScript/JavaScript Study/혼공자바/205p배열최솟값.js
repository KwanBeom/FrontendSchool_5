function min(arr){
    let output = arr[0];
    for(const item of arr){
        if(output > item){
            output = item;
        }
    }
    return output
}