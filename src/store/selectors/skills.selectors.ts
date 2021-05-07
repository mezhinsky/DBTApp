import {createSelector} from 'reselect';
import {populate} from 'react-redux-firebase';
import {InitialState} from '../reducers/skills.reducer';

const selectSkillsDomain = (state: any) => state.skills || InitialState;

const makeSelectSkillState = () =>
  createSelector(selectSkillsDomain, substate => substate);

const makeSelectItems = () =>
  createSelector(selectSkillsDomain, substate => substate.items);

const makeSelectTest = (items: any) => {
  return createSelector(selectSkillsDomain, substate => items);
};

export default makeSelectSkillState;
export {selectSkillsDomain, makeSelectItems, makeSelectTest};
