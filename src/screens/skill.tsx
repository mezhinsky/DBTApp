import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
	const navigation = useNavigation();

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
		</View>
	);
};

export default Home;
