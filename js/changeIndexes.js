const changeIndexes = (tb) => {
    let newTb = []

    newTb.push(tb[tb.length-1])

    for(let i in tb){
        if(i != tb.length - 1){
            newTb.push(tb[i])
        }else{
            break;
        }
    }
    return newTb
}