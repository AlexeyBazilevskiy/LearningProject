import ACTION from './actionType'

export const savePictures = (data) => ({ type: ACTION.SAVE_PICTURES, payload: data })
export const saveLocalPictures = (data) => ({ type: ACTION.SAVE_LOCAL_PICTURES, payload: data })
