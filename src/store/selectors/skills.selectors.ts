import {createSelector} from 'reselect';
import {InitialState} from '../reducers/skills.reducer';

const selectSkillsDomain = (state: any) => state.skills || InitialState;

const makeSelectSkillState = () =>
	createSelector(selectSkillsDomain, substate => substate);

const makeSelectLoading = () =>
	createSelector(selectSkillsDomain, substate => substate.loading);

const makeSelectList = () =>
	createSelector(selectSkillsDomain, substate => {
		if (substate.skills) {
			let data: any = {};

			for (const [key, value] of Object.entries(substate.skills)) {
				let skill: any = value;
				if (!data[skill.skillGroupID]) {
					data[skill.skillGroupID] = [];
				}
				data[skill.skillGroupID].push(key);
			}
			return data;
		}
	});

const makeSelectSkills = () =>
	createSelector(selectSkillsDomain, substate => substate.skills);

const makeSelectGroups = () =>
	createSelector(selectSkillsDomain, substate => substate.groups);

const makeSelectSkill = (id: string) =>
	createSelector(selectSkillsDomain, substate => substate.skills[id]);

const makeSelectFavorites = () =>
	createSelector(selectSkillsDomain, substate => substate.favorites);

export default makeSelectSkillState;
export {
	selectSkillsDomain,
	makeSelectLoading,
	makeSelectSkills,
	makeSelectGroups,
	makeSelectSkill,
	makeSelectList,
	makeSelectFavorites,
};
