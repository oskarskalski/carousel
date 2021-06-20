const configuration = () => {
    let conf = {
        time: 2000,
        folderName: './images',
        fileNames: ['3506327.jpg', '3506327.jpg', '4167486.jpg', '3586913.jpg', '3506327.jpg',],
        fixedImgLength: 0
    }

    conf.fixedImgLength = conf.fileNames.length % 2 == 0 ? conf.fileNames.length - 1 : conf.fileNames.length

    return conf
}