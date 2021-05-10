import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const actionTypes = {
	SIGN_IN: 'SIGN_IN',
	SIGN_IN_SILENT: 'SIGN_IN_SILENT',
	SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
	SIGN_IN_ERROR: 'SIGN_IN_ERROR',

	SIGN_OUT: 'SIGN_OUT',
	SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
	SIGN_OUT_ERROR: 'SIGN_OUT_ERROR',

	STORE_PROFILE: 'STORE_PROFILE',
	STORE_PROFILE_SUCCESS: 'STORE_PROFILE_SUCCESS',
	STORE_PROFILE_ERROR: 'STORE_PROFILE_ERROR',
};

export function singInAction() {
	return {
		type: actionTypes.SIGN_IN,
	};
}

export function singInSilentAction() {
	return {
		type: actionTypes.SIGN_IN_SILENT,
	};
}

export function singInSuccessAction(user: any, additionalUserInfo: any) {
	return {
		type: actionTypes.SIGN_IN_SUCCESS,
		user,
		additionalUserInfo,
	};
}

export function singInErrorAction(error: any) {
	console.log(error)
	return {
		type: actionTypes.SIGN_IN_ERROR,
		error,
	};
}

export function singOutAction() {
	return {
		type: actionTypes.SIGN_OUT,
	};
}

export function singOutSuccessAction() {
	return {
		type: actionTypes.SIGN_OUT_SUCCESS,
	};
}

export function singOutErrorAction(err: any) {
	console.log(err);
	return {
		type: actionTypes.SIGN_OUT_ERROR,
		err,
	};
}

export function getSkillsAction() {
	return {
		type: actionTypes.STORE_PROFILE,
	};
}

export function getSkillsSuccessAction(response: any) {
	return {
		type: actionTypes.STORE_PROFILE_SUCCESS,
		response,
	};
}

export function getSkillsErrorAction(error: any) {
	return {
		type: actionTypes.STORE_PROFILE_ERROR,
		error,
	};
}
