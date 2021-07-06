import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import {createStructuredSelector} from 'reselect';
import {connect, useDispatch} from 'react-redux';
import {getDataAction} from '../store/actions/skills.actions';
import {
	makeSelectLoading,
	makeSelectData,
	makeSelectSkillsMap,
	makeSelectGroupsMap,
	makeSelectList,
} from '../store/selectors/skills.selectors';
import List from '../components/CardsList';

const Skills: React.FC<any> = ({loading, itemsMap, skills, groups, items}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch({
		// 	type: PURGE,
		// 	key: 'root', // Whatever you chose for the "key" value when initialising redux-persist in the **persistCombineReducers** method - e.g. "root"
		// 	result: () => null, // Func expected on the submitted action.
		// });

		dispatch(getDataAction());
	}, []);

	const refreshlist = () => {
		dispatch(getDataAction());
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" />
			<List
				itemsMap={itemsMap}
				items={items}
				skills={skills}
				groups={groups}
				loading={loading}
				onRefresh={refreshlist}
			/>
		</SafeAreaView>
	);
};

function mapDispatchToProps(dispatch) {
	return {};
}

const mapStateToProps = createStructuredSelector({
	loading: makeSelectLoading(),

	itemsMap: makeSelectData(),
	skills: makeSelectSkillsMap(),
	groups: makeSelectGroupsMap(),
	items: makeSelectList(),
	
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f3f3f3',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
