import {combineReducers} from "redux";
import photoReducer from './photoReducer';
import musicReducer from './musicReducer';
import curentSongReducer from "./curentSongReducer";

const appReducer = combineReducers({
  photoStore: photoReducer,
  musicStore: musicReducer,
  currentSongStore: curentSongReducer
});

export default appReducer;