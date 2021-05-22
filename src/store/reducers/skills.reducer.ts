import {actionTypes} from '../actions/skills.actions';
import produce from 'immer';

export interface SkillsState {
	skills: any[] | null;
	groups: any[] | null;
	loading: boolean;
	error: boolean;
}

export const InitialState: SkillsState = {
	skills: null,
	groups: null,
	loading: false,
	error: false,
};

const reducer = (state = InitialState, action: any): SkillsState => {
	return produce(state, draft => {
		switch (action.type) {
			case actionTypes.GET_SKILLS:
				draft.loading = true;
				draft.error = false;
				break;
			case actionTypes.GET_SKILLS_SUCCSS:
				draft.skills = action.tasks;
				draft.groups = action.groups;
				draft.loading = false;
				break;
			case actionTypes.GET_SKILLS_ERROR:
				draft.error = true;
				draft.loading = false;
				break;
			default:
				return state;
		}
	});
};

export default reducer;
