import ACTION from '../actions/actionType';

const initialState = {
  currentSong: null
}

const curentSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.START_PLAY:
      return {currentSong: action.payload}
    default: return state;
  }
}

export default curentSongReducer