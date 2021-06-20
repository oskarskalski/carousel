const createSlider = () => {
    let getPageMain = document.querySelector('.page-main')

    let createContainer = document.createElement('div')
    let createImgContainer = document.createElement('div')

    createContainer.classList.add('page-main__slider')
    createImgContainer.classList.add('slider__imgs')

    let getConfiguration = configuration()

    for(let i = 0; i < getConfiguration.fixedImgLength; i++){
        let createFigureElement = document.createElement('figure')
        let createImgElement = document.createElement('img')

        createFigureElement.classList.add('imgs__figure')

        createFigureElement.setAttribute('id-element', i + 1)

        createImgElement.src = `${getConfiguration.folderName}/${getConfiguration.fileNames[i]}`

        createFigureElement.appendChild(createImgElement)
       
        createImgContainer.appendChild(createFigureElement)
        
    }
    createContainer.appendChild(createImgContainer)
    getPageMain.appendChild(createContainer)
}   
