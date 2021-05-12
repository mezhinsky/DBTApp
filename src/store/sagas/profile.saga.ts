import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {actionTypes} from '../actions/profile.actions';
import {
	singInSuccessAction,
	singInErrorAction,
	singOutSuccessAction,
	singOutErrorAction,
} from '../actions/profile.actions';

import {all, call, put, takeLatest} from 'redux-saga/effects';

function* signInSaga() {
	const googleSignConfiguration = {
		webClientId:
			'1037407465463-2amgc8nqqb17b5mg7r7smjggndg52b4h.apps.googleusercontent.com',
		// androidClientId:
		// 	'1037407465463-2amgc8nqqb17b5mg7r7smjggndg52b4h.apps.googleusercontent.com',
		// iosClientId:
		// 	'1037407465463-vgnu73m03rkkj8ivker0vrh7ckoc0ni1.apps.googleusercontent.com',
		offlineAccess: true,
	};
	GoogleSignin.configure(googleSignConfiguration);

	try {
		yield GoogleSignin.hasPlayServices();
		const {idToken} = yield GoogleSignin.signIn();
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);
		const {additionalUserInfo, user} = yield auth().signInWithCredential(
			googleCredential,
		);
		yield put(singInSuccessAction(user, additionalUserInfo));
	} catch (error) {
		yield put(singInErrorAction(error));
	}
}

function* signInSilentSaga() {
	const googleSignConfiguration = {
		webClientId:
			'1037407465463-2amgc8nqqb17b5mg7r7smjggndg52b4h.apps.googleusercontent.com',
		// androidClientId:
		// 	'1037407465463-2amgc8nqqb17b5mg7r7smjggndg52b4h.apps.googleusercontent.com',
		// iosClientId:
		// 	'1037407465463-vgnu73m03rkkj8ivker0vrh7ckoc0ni1.apps.googleusercontent.com',
		offlineAccess: true,
	};
	GoogleSignin.configure(googleSignConfiguration);

	try {
		yield GoogleSignin.hasPlayServices();
		const {idToken} = yield GoogleSignin.signInSilently();
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);
		const {additionalUserInfo, user} = yield auth().signInWithCredential(
			googleCredential,
		);
		yield put(singInSuccessAction(user, additionalUserInfo));
	} catch (error) {
		yield put(singInErrorAction(error));
	}
}

function* signOutSaga() {
	try {
		const isSignedIn: boolean = yield GoogleSignin.isSignedIn();

		if (isSignedIn) {
			yield GoogleSignin.revokeAccess();
			yield GoogleSignin.signOut();
		}
		yield put(singOutSuccessAction());
	} catch (error) {
		yield put(singOutErrorAction(error));
	}
}

function* postsSaga(): Generator {
	yield all([
		takeLatest(actionTypes.SIGN_IN, signInSaga),
		takeLatest(actionTypes.SIGN_IN_SILENT, signInSilentSaga),
		takeLatest(actionTypes.SIGN_OUT, signOutSaga),
	]);
}

export default postsSaga;
