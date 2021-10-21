import RNFetchBlob from 'rn-fetch-blob'

export const getImage = () => {
  RNFetchBlob.fetch('GET', 'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg')
    .then(res => {
      saveFile(res.data)
    })
    .catch(err => {
      console.log('Failed getting image. Error: ', err)
    })
}

export const saveFile = (file) => {
  RNFetchBlob.fs.writeFile(`${RNFetchBlob.fs.dirs.DocumentDir}/pic.txt`, file, 'base64')
  .then(res =>{
    readFile(`${RNFetchBlob.fs.dirs.DocumentDir}/pic.txt`)
  })
  .catch(err => {
    console.log('Failed to save file. Error: ',err)
  })
}

export const readFile = (path) => {
  RNFetchBlob.fs.readFile(path, 'base64')
  .then(res =>{
    console.log('file', res)
  })
  .catch(err => {
    console.log('Failed to read file. Error: ',err)
  })
}