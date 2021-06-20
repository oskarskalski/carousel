const generatePositions = (numOfElements) => {
    const divideNOEByTwo = Math.floor(numOfElements / 2)
    const firstFrontier = divideNOEByTwo * -20 + (-50)
    const lastFrontier = divideNOEByTwo * 20 + (-50)

    let positionsTable = []

    for(let i = firstFrontier; i <= lastFrontier; i += 20){
        positionsTable.push(i)
    }

    return positionsTable
}