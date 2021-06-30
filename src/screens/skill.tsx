import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {makeSelectSkill} from '../store/selectors/skills.selectors';

import Card from '../components/CardDetail';
const Skill = ({route, skill}) => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<Card
				id={skill.id}
				name={skill.name}
				description={skill.description}
				rule={skill.rule}
			/>
		</View>
	);
};

function mapDispatchToProps(dispatch) {
	return {};
}

const mapStateToProps = (state, ownProps) => {
	return createStructuredSelector({
		skill: makeSelectSkill(ownProps.route.params.id),
	});
};
export default connect(mapStateToProps, mapDispatchToProps)(Skill);

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
