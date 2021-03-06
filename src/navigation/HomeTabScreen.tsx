import React from 'react';

import {Platform, StatusBar} from 'react-native';
import {
	createBottomTabNavigator,
	BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import {TabBar} from '../components/TabBar';

import SkillCards from '../screens/Skills';
import Profile from '../screens/Profile';
import Home from '../screens/Home';


StatusBar.setBarStyle('light-content');
if (Platform.OS === 'android') {
	StatusBar.setBackgroundColor('rgba(0,0,0,0)');
	StatusBar.setTranslucent(true);
}

const Tab = createBottomTabNavigator();
const HomeTabScreen = () => {
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

export default HomeTabScreen;
