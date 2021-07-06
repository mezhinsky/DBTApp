import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {View, StatusBar, StyleSheet} from 'react-native';
import {makeSelectSkill} from '../store/selectors/skills.selectors';
import {toggleFavoriteAction} from '../store/actions/skills.actions';

import Card from '../components/CardDetail';



const Skill = ({route, skill}) => {
	const dispatch = useDispatch();

	const favoritesToggle = (id) => {
		console.log(id);
		dispatch(toggleFavoriteAction(id));
	};

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<Card
				id={skill.id}
				name={skill.name}
				description={skill.description}
				rule={skill.rule}
				onFavoritesToggle={favoritesToggle}
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
