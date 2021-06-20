const animation = () => {

    let getIndexes = generateIndex()
    let getSettings = configuration()

    let positions = generatePositions(getSettings.fixedImgLength)

    getImgsStyles(getSettings, positions, getIndexes)

    setInterval(() => {
        
        getImgsStyles(getSettings, positions, getIndexes)

        let generateNewTb = changeIndexes(getIndexes)
        getIndexes = generateNewTb

        let generateNewPositions = changeIndexes(positions)
        positions = generateNewPositions

    }, 1000)
}

const getImgsStyles = (getSettings, positions, getIndexes) => {
    for(let i = 0; i < getSettings.fixedImgLength; i++ ){
        let getIdAttribute = document.querySelector(`[id-element="${i + 1}"]`)

        getIdAttribute.style = `
            left:50%;
            transform:translateX(${positions[i]}%) scale(${1 + (getIndexes[i] / 10)});
            transition: all ease 0.2s;
            border:2px solid black;
            z-index:${getIndexes[i]};
        `
    }
}
/*

function intervalSettings(callback, delay) {
    let timerId, state = 0

    this.pause = () => {
        if (state != 1)
            return

        window.clearInterval(timerId);
        state = 2;
    }

    this.resume = () => {
        if (state != 2)
            return

        state = 3
        window.setTimeout(this.timeoutCallback, 1000)
    }

    this.timeoutCallback = () => {
        if (state != 3)
            return

        timerId = window.setInterval(callback, delay)
        state = 1
    }

    timerId = window.setInterval(callback, delay)
    state = 1
}

const newInterval = new intervalSettings(id, 3000)

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'visible') {
        newInterval.resume()
    } else {
        newInterval.pause()
    }
})

document.querySelector('.btn1').addEventListener('click', () => {
    newInterval.pause()
}, false)

document.querySelector('.btn2').addEventListener('click', () => {
    newInterval.resume()
}, false) */