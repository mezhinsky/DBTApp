import firestore from '@react-native-firebase/firestore';
import {actionTypes} from '../actions/skills.actions';
import {
	//
	getSkillListOkAction,
	getSkillListErrAction,
	getGroupListOkAction,
	getGroupListErrAction,
	getDataOkAction,
} from '../actions/skills.actions';

import {all, call, put, take, fork, takeLatest} from 'redux-saga/effects';

let getSkills = async function () {
	const snapshot = await firestore().collection('skill').get();
	return snapshot.docs.map(doc => {
		return {...{id: doc.id}, ...doc.data(), ...{type: 'skill'}};
	});
};

let getGroups = async function () {
	const snapshot = await firestore().collection('skillGroup').get();
	return snapshot.docs.map(doc => {
		return {...{id: doc.id}, ...doc.data(), ...{type: 'skillGroup'}};
	});
};

///new

function* loadSkillsList(): Generator<any> {
	try {
		let skills: any = yield call(getSkills);

		let skillsList = skills.map((item: any) => item.id);
		let skillsMap = skills.reduce((obj: any, item: any) => {
			return {
				...obj,
				[item.id]: item,
			};
		}, {});

		yield put(getSkillListOkAction(skillsList, skillsMap));
	} catch (error) {
		yield put(getSkillListErrAction(error));
	}
}

function* loadGroupsList(): Generator<any> {
	try {
		let groups: any = yield call(getGroups);

		let skillsList = groups.map((item: any) => item.id);
		let skillsMap = groups.reduce((obj: any, item: any) => {
			return {
				...obj,
				[item.id]: item,
			};
		}, {});

		yield put(getGroupListOkAction(skillsList, skillsMap));
	} catch (error) {
		yield put(getGroupListErrAction(error));
	}
}

function* loadData(): Generator<any> {
	yield fork(loadSkillsList);
	yield fork(loadGroupsList);

	yield all([
		take(actionTypes.GET_SKILL_LIST_OK),
		take(actionTypes.GET_GROUP_LIST_OK),
	]);
	yield put(getDataOkAction());
}

function* postsSaga(): Generator {
	yield all([takeLatest(actionTypes.GET_DATA, loadData)]);
}

export default postsSaga;
