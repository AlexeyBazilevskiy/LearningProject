import ACTION from '../actions/actionType';

const initialState = {
  data: [],
}

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SAVE_MUSIC:
      return { data: state.data.filter(el => el.name === action.payload[0].name).length > 0 ? state.data : [...action.payload, ...state.data] };
    default: return state;
  }
}

export default photoReducer