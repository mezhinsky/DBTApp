import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {createStructuredSelector} from 'reselect';
import {connect, useDispatch} from 'react-redux';
import {getSkillsAction} from '../store/actions/skills.actions';
import {
	makeSelectSkills,
	makeSelectItems,
	makeSelectLoading,
} from '../store/selectors/skills.selectors';

import List from '../components/CardsList';

const Skills: React.FC<any> = ({items, loading}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSkillsAction());
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#efefef',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
