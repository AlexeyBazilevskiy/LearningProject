import ACTION from './actionType'

export const savePictures = (data) => ({ type: ACTION.SAVE_PICTURES, payload: data })
export const saveLocalPictures = (data) => ({ type: ACTION.SAVE_LOCAL_PICTURES, payload: data })
export const getLocalMusic = (data) => ({ type: ACTION.SAVE_MUSIC, payload: data })
export const playSong = (data) => ({ type: ACTION.START_PLAY, payload: data })

