import {createStore, applyMiddleware, compose, Middleware} from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
	PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {pReducer} from './reducers';

// creates the store
const configureStore = () => {
	/* ------------- Redux Configuration -------------*/

	const middlewares: Middleware[] = [];
	const enhancers = [];

	/* ------------- Saga Middleware ------------- */

	const sagaMiddleware = createSagaMiddleware();
	middlewares.push(sagaMiddleware);

	/* ------------- Assemble Middleware ------------- */

	enhancers.push(applyMiddleware(...middlewares));
	enhancers.push(composeWithDevTools(applyMiddleware(...middlewares)));

	const store = createStore(pReducer, compose(...enhancers));
	const persistor = persistStore(store);
	// then run the saga
	sagaMiddleware.run(rootSaga);

	return {
		store,
		persistor,
	};
};

export default configureStore;
