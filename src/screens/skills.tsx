import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {createStructuredSelector} from 'reselect';
import {connect, useDispatch} from 'react-redux';
import {getSkillsAction, getDataAction} from '../store/actions/skills.actions';
import {
	makeSelectItems,
	makeSelectLoading,
	makeSelectData,
} from '../store/selectors/skills.selectors';

import List from '../components/CardsList';

const Skills: React.FC<any> = ({items, loading, test}) => {
	console.log(test);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSkillsAction());
		dispatch(getDataAction());
	}, []);

	const refreshlist = () => {
		dispatch(getSkillsAction());
	};

	return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" />
			<List items={items} loading={loading} onRefresh={refreshlist} />
		</View>
	);
};

function mapDispatchToProps(dispatch) {
	return {};
}

const mapStateToProps = createStructuredSelector({
	items: makeSelectItems(),
	loading: makeSelectLoading(),
	test: makeSelectData(),
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
