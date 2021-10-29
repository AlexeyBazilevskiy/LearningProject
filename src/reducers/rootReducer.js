import {combineReducers} from "redux";
import photoReducer from './photoReducer';
import musicReducer from './musicReducer';

const appReducer = combineReducers({
  photoStore: photoReducer,
  musicStore: musicReducer,
});

export default appReducer;