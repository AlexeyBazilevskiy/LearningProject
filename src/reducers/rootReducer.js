import {combineReducers} from "redux";
import photoReducer from './photoReducer';

const appReducer = combineReducers({
  photoStore: photoReducer,
});

export default appReducer;