import {all} from 'redux-saga/effects';
import PostsSaga from './firestore.saga';
import AuthSaga from './profile.saga';

function* rootSaga() {
	yield all([PostsSaga(), AuthSaga()]);
}

export default rootSaga;
