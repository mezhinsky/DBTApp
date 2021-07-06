import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import {createStructuredSelector} from 'reselect';
import {connect, useDispatch} from 'react-redux';
import {PURGE} from 'redux-persist'
import {getDataAction} from '../store/actions/skills.actions';
import {
	makeSelectLoading,
	makeSelectSkills,
	makeSelectGroups,
	makeSelectList,
} from '../store/selectors/skills.selectors';
import List from '../components/CardsList';

const Skills: React.FC<any> = ({loading, skills, groups, items}) => {
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
	skills: makeSelectSkills(),
	groups: makeSelectGroups(),
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
