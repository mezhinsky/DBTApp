import {createSelector} from 'reselect';
import {InitialState} from '../reducers/profile.reducer';

const selectProfileDomain = (state: any) => state.profile || InitialState;

const makeSelectProfileState = () =>
	createSelector(selectProfileDomain, substate => substate);

const makeSelectProfileInfo = () =>
	createSelector(selectProfileDomain, substate => substate.profile);

const makeSelectProfileLoading = () =>
	createSelector(selectProfileDomain, substate => substate.loading);

const makeSelectProfileError = () =>
	createSelector(selectProfileDomain, substate => substate.error);

export {
	selectProfileDomain,
	makeSelectProfileState,
	makeSelectProfileInfo,
	makeSelectProfileLoading,
	makeSelectProfileError,
};
