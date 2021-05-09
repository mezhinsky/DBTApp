import {actionTypes} from '../actions/skills.actions';
import produce from 'immer';

export interface SkillsState {
	items: any;
}

export const InitialState: SkillsState = {
	items: 'test1',
};

const reducer = (state = InitialState, action: any): SkillsState => {
	return produce(state, draft => {
		switch (action.type) {
			case actionTypes.GET_SKILLS:
				draft.items = state.items;
				break;
			case actionTypes.GET_SKILLS_SUCCSS:
				draft.items = action.response;
				break;
			default:
				return state;
		}
	});
};

export default reducer;
