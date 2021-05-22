export const actionTypes = {
	GET_SKILLS: 'GET_SKILLS',
	GET_SKILLS_SUCCSS: 'GET_SKILLS_SUCCSS',
	GET_SKILLS_ERROR: 'GET_SKILLS_ERROR',
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
