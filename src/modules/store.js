import createSagaMiddleware from 'redux-saga';
import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import auth from "./auth/auth.reducer";

import { watchFetchUser } from "./auth/auth.saga";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ auth });

const store = createStore(rootReducer, undefined, compose(
	applyMiddleware(sagaMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
));

sagaMiddleware.run(watchFetchUser);


export default store;
