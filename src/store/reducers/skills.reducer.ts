import {actionTypes} from '../actions/skills.actions';
import produce from 'immer';

export interface SkillsState {
	skills: any;
	groups: any;
	favorites: any;
	loading: boolean;
	error: boolean;
}

export const InitialState: SkillsState = {
	skills: null,
	groups: null,
	favorites: ['123', '123'],
	loading: false,
	error: false,
};

const reducer = (state = InitialState, action: any): SkillsState => {
	return produce(state, draft => {
		switch (action.type) {
			case actionTypes.GET_SKILL_LIST_OK:
				draft.skills = action.skillsMap;
				break;

			case actionTypes.GET_GROUP_LIST_OK:
				draft.groups = action.skillsMap;
				break;

			case actionTypes.GET_DATA:
				draft.loading = true;
				break;

			case actionTypes.GET_DATA_OK:
				draft.loading = false;
				draft.error = false;
				break;

			case actionTypes.ADD_TO_FAVORITES:
				draft.favorites = action.skill;
				break;

			default:
				return state;
		}
	});
};

export default reducer;
