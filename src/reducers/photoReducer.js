import ACTION from '../actions/actionType';

const initialState = {
  data: []
}

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SAVE_PICTURES: return { data: [action.payload, ...state.data] };
    case ACTION.SAVE_LOCAL_PICTURES: return { data: action.payload };

    default: return state;
  }
}

export default photoReducer