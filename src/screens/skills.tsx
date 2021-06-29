import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {createStructuredSelector} from 'reselect';
import {connect, useDispatch} from 'react-redux';
import {getDataAction} from '../store/actions/skills.actions';
import {
	makeSelectLoading,
	makeSelectData,
	makeSelectSkillsMap,
	makeSelectGroupsMap,
} from '../store/selectors/skills.selectors';
import List from '../components/CardsList';

const Skills: React.FC<any> = ({loading, itemsMap, skills, groups}) => {
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
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" />
			<List
				itemsMap={itemsMap}
				skills={skills}
				groups={groups}
				loading={loading}
				onRefresh={refreshlist}
			/>
		</View>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
