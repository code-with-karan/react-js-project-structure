import { rootReducer } from './rootReducer';
import {applyMiddleware, compose, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
const middlewares = [ReduxThunk];

const store = createStore(rootReducer, 
    compose(applyMiddleware(...middlewares)),
);

export default store;