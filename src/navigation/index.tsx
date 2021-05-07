import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
	createBottomTabNavigator,
	BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import {TabBar} from '../components/TabBar';

import SkillCard from '../screens/skill';
import SkillCards from '../screens/skills';
import Profile from '../screens/profile';
import Home from '../screens/home';

const RootStack = createStackNavigator();

StatusBar.setBarStyle('light-content');
if (Platform.OS === 'android') {
	StatusBar.setBackgroundColor('rgba(0,0,0,0)');
	StatusBar.setTranslucent(true);
}

const HomeStackScreen = () => {
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

const Tab = createBottomTabNavigator();
const HomeTabScreen = () => {
	// useFirestoreConnect([{collection: 'skills'}]);

	return (
		<Tab.Navigator tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
			<Tab.Screen name="Home" options={{title: 'home'}} component={Home} />
			<Tab.Screen
				name="Skills"
				options={{title: 'lightbulb-o'}}
				component={SkillCards}
			/>
			<Tab.Screen
				name="Profile"
				options={{title: 'user'}}
				component={Profile}
			/>
		</Tab.Navigator>
	);
};

export {HomeStackScreen, HomeTabScreen};
