import firestore from '@react-native-firebase/firestore';
import {actionTypes} from '../actions/skills.actions';
import {
	getSkillsSuccessAction,
	getSkillsErrorAction,

	//
	getSkillListOkAction,
	getSkillListErrAction,
	getGroupListOkAction,
	getGroupListErrAction,
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

///new
function* loadSkillList(): Generator<any> {
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

	yield call(() => console.log('test'));
}

function* postsSaga(): Generator {
	yield all([takeLatest(actionTypes.GET_SKILLS, loadPostsSaga)]);

	yield all([takeLatest(actionTypes.GET_DATA, loadData)]);
}

export default postsSaga;
