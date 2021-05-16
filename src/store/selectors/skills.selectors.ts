import {createSelector} from 'reselect';
import {InitialState} from '../reducers/skills.reducer';

const selectSkillsDomain = (state: any) => state.skills || InitialState;

const makeSelectSkillState = () =>
	createSelector(selectSkillsDomain, substate => substate);

const makeSelectItems = () =>
	createSelector(selectSkillsDomain, substate => substate.items);

const makeSelectLoading = () =>
	createSelector(selectSkillsDomain, substate => substate.loading);

export default makeSelectSkillState;
export {selectSkillsDomain, makeSelectItems, makeSelectLoading};
