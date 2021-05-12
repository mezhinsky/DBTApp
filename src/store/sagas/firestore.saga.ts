import firestore from '@react-native-firebase/firestore';
import {actionTypes} from '../actions/skills.actions';
import {
	getSkillsSuccessAction,
	getSkillsErrorAction,
} from '../actions/skills.actions';

import {all, call, put, takeLatest} from 'redux-saga/effects';

function* loadPostsSaga() {
	try {
		let tasks: any = {};
		yield call(() =>
			firestore()
				.collection('Skill')
				.get()
				.then(querySnapshot => {
					querySnapshot.forEach(documentSnapshot => {
						// tasks = [
						// 	...tasks,
						// 	{id: documentSnapshot.id, data: documentSnapshot.data()},
						// ];
						tasks[documentSnapshot.id] = documentSnapshot.data();
					});
				}),
		);

		if (tasks) {
			yield put(getSkillsSuccessAction(tasks));
		} else {
			yield put(getSkillsSuccessAction([]));
		}
	} catch (err) {
		yield put(getSkillsErrorAction(err));
	}
}

function* postsSaga(): Generator {
	yield all([takeLatest(actionTypes.GET_SKILLS, loadPostsSaga)]);
}

export default postsSaga;
