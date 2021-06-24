import {createSelector} from 'reselect';
import {InitialState} from '../reducers/skills.reducer';

function compare(a, b) {
	if (a.priority < b.priority) {
		return -1;
	}
	if (a.priority > b.priority) {
		return 1;
	}
	return 0;
}

const selectSkillsDomain = (state: any) => state.skills || InitialState;

const makeSelectSkillState = () =>
	createSelector(selectSkillsDomain, substate => substate);

const makeSelectItems = () =>
	createSelector(selectSkillsDomain, substate => {

		const joiner = (inputSkills, inputGroups) => {
			let newArr = [];

			if (inputGroups) {
				inputGroups.forEach((group) => {
					newArr.push(group);
					const f = inputSkills.filter(
						skill => skill.skillGroupID === group.id,
					);
					f.forEach(filtred => newArr.push(filtred));
				});
			}

			return newArr;
		};

		let skills = substate.skills;
		let groups = substate.groups;

		return joiner(skills, groups);
	});

const makeSelectSkills = () =>
	createSelector(selectSkillsDomain, substate => substate.skills);

const makeSelectLoading = () =>
	createSelector(selectSkillsDomain, substate => substate.loading);

export default makeSelectSkillState;
export {
	selectSkillsDomain,
	makeSelectItems,
	makeSelectSkills,
	makeSelectLoading,
};
