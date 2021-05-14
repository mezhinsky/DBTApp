import React, {useEffect} from 'react';
import {View, Text, StatusBar, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createStructuredSelector} from 'reselect';
import {connect, useDispatch} from 'react-redux';

import {getSkillsAction} from '../store/actions/skills.actions';
import {singInSilentAction} from '../store/actions/profile.actions';

const Home: React.FC<any> = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSkillsAction());
	}, []);

	return (
		<View
			style={{
				backgroundColor: '#efefef',
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<StatusBar barStyle="dark-content" />
			<Text>Home</Text>
			<Button
				onPress={() => navigation.navigate('SkillCard')}
				title="Learn More"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
		</View>
	);
};

function mapDispatchToProps(dispatch) {
	return {};
}

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
