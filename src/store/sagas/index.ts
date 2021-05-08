import {all} from 'redux-saga/effects';
import PostsSaga from './firestore.saga';

function* rootSaga() {
	yield all([PostsSaga()]);
}

export default rootSaga;
