import {actionTypes} from '../actions/skills.actions';
import produce from 'immer';

export interface SkillsState {
	skillsList: any[] | null;
	skillsMap: any;

	groupsList: any[] | null;
	groupsMap: any;

	loading: boolean;
	error: boolean;
}

export const InitialState: SkillsState = {
	skillsList: null,
	skillsMap: null,

	groupsList: null,
	groupsMap: null,

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
			case actionTypes.GET_SKILLS_ERROR:
				draft.error = true;
				draft.loading = false;
				break;

			case actionTypes.GET_SKILL_LIST_OK:
				draft.skillsList = action.skills;
				draft.skillsMap = action.skillsMap;
				draft.loading = false;
				break;

			case actionTypes.GET_GROUP_LIST_OK:
				draft.groupsList = action.groups;
				draft.groupsMap = action.skillsMap;
				draft.loading = false;
				break;
			default:
				return state;
		}
	});
};

export default reducer;
