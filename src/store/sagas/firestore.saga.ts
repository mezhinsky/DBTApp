import firestore from '@react-native-firebase/firestore';
import {actionTypes} from '../actions/skills.actions';
import {
	getSkillsSuccessAction,
	getSkillsErrorAction,
} from '../actions/skills.actions';

import {all, call, put, takeLatest} from 'redux-saga/effects';

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

let getGroupsForTasks = async function (tasks: any) {
	for await (const task of tasks) {
		let group = await firestore()
			.collection('skillGroup')
			.doc(task.skillGroupID)
			.get();
		task.group = group.data();
	}
	return tasks;
};

function* loadPostsSaga(): Generator<any> {
	try {
		let tasks = yield call(getSkills);
		let groups = yield call(getGroups);

		tasks = yield call(getGroupsForTasks, tasks);

		if (tasks && groups) {
			yield put(getSkillsSuccessAction(tasks, groups));
		} else {
			yield put(getSkillsSuccessAction([], []));
		}
	} catch (err) {
		yield put(getSkillsErrorAction(err));
	}
}

function* postsSaga(): Generator {
	yield all([takeLatest(actionTypes.GET_SKILLS, loadPostsSaga)]);
}

export default postsSaga;
