import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from '../reducers/root';
import { loggerMiddleware } from '../middlewares/logger';

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
