import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import SkillCard from '../screens/Skill';

import {singInSilentAction} from '../store/actions/profile.actions';

import HomeTabScreen from './HomeTabScreen';

const RootStack = createStackNavigator();

const HomeStackScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(singInSilentAction());
	}, []);

	return (
		<NavigationContainer>
			<StatusBar />
			<RootStack.Navigator
				initialRouteName="Tabs"
				screenOptions={{
					headerStyle: {height: 56},
					headerStatusBarHeight: 0,
					headerShown: false,
					gestureEnabled: true,
					gestureResponseDistance: {vertical: 600},
					cardOverlayEnabled: true,
					...TransitionPresets.ModalPresentationIOS,
				}}
				mode="modal"
				headerMode="none">
				<RootStack.Screen name="SkillCard" component={SkillCard} />
				<RootStack.Screen name="Tabs" component={HomeTabScreen} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch: any) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeStackScreen);
