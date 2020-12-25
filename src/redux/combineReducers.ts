// dependencies
import { combineReducers } from 'redux';
import buyer from './buyer';
import seller from './seller';

const rootReducer = combineReducers({ buyer, seller });
export default rootReducer;
