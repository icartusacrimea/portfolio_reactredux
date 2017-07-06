import { combineReducers } from 'redux';
import SvgReducer from './reducer_svg';

const rootReducer = combineReducers({
  svg: SvgReducer
});

export default rootReducer;
