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
		// dispatch(getSkillsAction());
		dispatch(getDataAction());
	}, []);

	const refreshlist = () => {
		// dispatch(getSkillsAction());
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
