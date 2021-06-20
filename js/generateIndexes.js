const generateIndex = () => {
    let tb = []

    let imgLength = configuration().fixedImgLength

    for (let i = 1; i < Math.ceil(imgLength / 2); i++) {
        tb.push(i)
    }

    for (let i = Math.ceil(imgLength / 2); i >= 1; i--) {
        tb.push(i)
    }
    

    return tb
}