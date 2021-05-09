// import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import produce from 'immer';
import {actionTypes} from '../actions/profile.actions';

export interface ProfileState {
	loading: boolean;
	error: boolean;
	profile: any;
}

export const InitialState: ProfileState = {
	loading: false,
	error: false,
	profile: null,
};

const reducer = (state = InitialState, action: any): ProfileState => {
	return produce(state, draft => {
		switch (action.type) {
			case actionTypes.SIGN_IN:
				draft.loading = true;
				draft.profile = state.profile;
				break;
			case actionTypes.SIGN_IN_SUCCESS:
				draft.loading = false;
				draft.profile = action.user;
				break;
			case actionTypes.SIGN_IN_ERROR:
				draft.loading = false;
				draft.error = true;
				draft.profile = action.user;
				break;
			case actionTypes.SIGN_OUT:
				draft.loading = true;
				draft.profile = null;
				break;
			case actionTypes.SIGN_OUT_SUCCESS:
				draft.loading = false;
				break;
			default:
				return state;
		}
	});
};

export default reducer;
