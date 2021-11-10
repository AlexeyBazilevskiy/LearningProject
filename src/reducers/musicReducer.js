import ACTION from '../actions/actionType';

const initialState = {
  data: [],
  currentSong: null,
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SAVE_MUSIC:
      return {
        data:
          state.data.filter(el => el.name === action.payload[0].name).length > 0
            ? state.data
            : [...action.payload, ...state.data],
        currentSong: state.currentSong,
      };
    case ACTION.START_PLAY:
      return {data: state.data, currentSong: action.payload};
    default:
      return state;
  }
};

export default photoReducer;
