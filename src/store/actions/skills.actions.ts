export const actionTypes = {
	GET_SKILLS: 'GET_SKILLS',
	GET_SKILLS_SUCCSS: 'GET_SKILLS_SUCCSS',
	GET_SKILLS_ERROR: 'GET_SKILLS_ERROR',

	GET_SKILL_LIST: 'GET_SKILL_LIST',
	GET_SKILL_LIST_OK: 'GET_SKILL_LIST_OK',
	GET_SKILL_LIST_ERR: 'GET_SKILL_LIST_ERR',

	GET_GROUP_LIST: 'GET_GROUP_LIST',
	GET_GROUP_LIST_OK: 'GET_GROUP_LIST_OK',
	GET_GROUP_LIST_ERR: 'GET_GROUP_LIST_ERR',

	GET_DATA: 'GET_DATA',
};

export function getSkillsAction() {
	return {
		type: actionTypes.GET_SKILLS,
	};
}

export function getSkillsSuccessAction(tasks: any, groups: any) {
	return {
		type: actionTypes.GET_SKILLS_SUCCSS,
		tasks,
		groups,
	};
}

export function getSkillsErrorAction(error: any) {
	return {
		type: actionTypes.GET_SKILLS_ERROR,
		error,
	};
}

export function getGroupListAction() {
	return {
		type: actionTypes.GET_GROUP_LIST,
	};
}

export function getGroupListOkAction(groups: any[], skillsMap: any) {
	return {
		type: actionTypes.GET_GROUP_LIST_OK,
		groups,
		skillsMap,
	};
}

export function getGroupListErrAction(err: any) {
	return {
		type: actionTypes.GET_GROUP_LIST_ERR,
		err,
	};
}

export function getSkillListAction() {
	return {
		type: actionTypes.GET_SKILL_LIST,
	};
}

export function getSkillListOkAction(skills: string[], skillsMap: any) {
	return {
		type: actionTypes.GET_SKILL_LIST_OK,
		skills,
		skillsMap,
	};
}

export function getSkillListErrAction(err: any) {
	return {
		type: actionTypes.GET_SKILL_LIST_ERR,
		err,
	};
}

export function getDataAction() {
	return {
		type: actionTypes.GET_DATA,
	};
}
