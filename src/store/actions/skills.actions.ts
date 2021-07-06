export const actionTypes = {
	GET_SKILL_LIST: 'GET_SKILL_LIST',
	GET_SKILL_LIST_OK: 'GET_SKILL_LIST_OK',
	GET_SKILL_LIST_ERR: 'GET_SKILL_LIST_ERR',

	GET_GROUP_LIST: 'GET_GROUP_LIST',
	GET_GROUP_LIST_OK: 'GET_GROUP_LIST_OK',
	GET_GROUP_LIST_ERR: 'GET_GROUP_LIST_ERR',

	GET_DATA: 'GET_DATA',
	GET_DATA_OK: 'GET_DATA_OK',

	TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
	ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
	REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
};

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

export function getDataOkAction() {
	return {
		type: actionTypes.GET_DATA_OK,
	};
}

export function toggleFavoriteAction(skill: string) {
	return {
		type: actionTypes.TOGGLE_FAVORITE,
		skill,
	};
}

export function addToFavoritesAction(skill: string) {
	return {
		type: actionTypes.ADD_TO_FAVORITES,
		skill,
	};
}

export function removeFromFavoritesAction(skill: string) {
	return {
		type: actionTypes.REMOVE_FROM_FAVORITES,
		skill,
	};
}