import {createSelector} from 'reselect';
import {InitialState} from '../reducers/skills.reducer';

const selectSkillsDomain = (state: any) => state.skills || InitialState;

const makeSelectSkillState = () =>
	createSelector(selectSkillsDomain, substate => substate);

const makeSelectLoading = () =>
	createSelector(selectSkillsDomain, substate => substate.loading);

const makeSelectData = () =>
	createSelector(selectSkillsDomain, substate => {
		if (substate.skillsMap && substate.groupsMap) {
			let skills: any[] = Object.entries(substate.skillsMap);
			let groups: any[] = Object.entries(substate.groupsMap);

			let data: any = [];

			for (const [key, value] of Object.entries(substate.groupsMap)) {
				if (groups) {
					data.push(key);
					let s = Object.values(substate.skillsMap).filter(
						(e: any) => e.skillGroupID === key,
					);
					s = s.map((i: any) => i.id);
					data.push(s);
				}
			}
			return data;
		}
	});

const makeSelectList = () =>
	createSelector(selectSkillsDomain, substate => {
		if (substate.skillsMap) {
			let data: any = {};

			for (const [key, value] of Object.entries(substate.skillsMap)) {
				let skill: any = value;
				if (!data[skill.skillGroupID]) {
					data[skill.skillGroupID] = [];
				}
				data[skill.skillGroupID].push(key);
			}
			console.log(data)
			return data;
		}
	});

const makeSelectSkillsMap = () =>
	createSelector(selectSkillsDomain, substate => substate.skillsMap);

const makeSelectGroupsMap = () =>
	createSelector(selectSkillsDomain, substate => substate.groupsMap);

const makeSelectSkill = (id: string) =>
	createSelector(selectSkillsDomain, substate => substate.skillsMap[id]);

export default makeSelectSkillState;
export {
	selectSkillsDomain,
	makeSelectLoading,
	makeSelectData,
	makeSelectSkillsMap,
	makeSelectGroupsMap,
	makeSelectSkill,
	makeSelectList,
};
