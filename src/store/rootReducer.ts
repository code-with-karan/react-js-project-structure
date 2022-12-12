import { combineReducers } from 'redux';
import AuthReducer from './auth/reducer';

export const rootReducer = combineReducers({
	authState: AuthReducer
});