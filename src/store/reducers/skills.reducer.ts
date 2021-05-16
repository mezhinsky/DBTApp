import {actionTypes} from '../actions/skills.actions';
import produce from 'immer';

export interface SkillsState {
	items: any[] | null;
	loading: boolean;
	error: boolean;
}

export const InitialState: SkillsState = {
	items: null,
	loading: false,
	error: false,
};

const reducer = (state = InitialState, action: any): SkillsState => {
	return produce(state, draft => {
		switch (action.type) {
			case actionTypes.GET_SKILLS:
				draft.items = state.items;
				draft.loading = true;
				break;
			case actionTypes.GET_SKILLS_SUCCSS:
				draft.items = action.response;
				draft.loading = false;
				break;
			default:
				return state;
		}
	});
};

export default reducer;
