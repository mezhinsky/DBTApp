import React, {useState, useEffect} from 'react';
import {
	View,
	TouchableOpacity,
	Dimensions,
	Animated,
	StyleSheet,
} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {BottomMenuItem} from './BottomMenuItem';
import COLORS from '../config/colors';

export const blue = '#3A36D5';
export const grey = '#CFD2D7';

export const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
	const [translateValue] = useState(new Animated.Value(0));
	const totalWidth = Dimensions.get('window').width;
	const tabWidth = totalWidth / state.routes.length;

	const animateSlider = (index: number) => {
		Animated.spring(translateValue, {
			toValue: index * tabWidth,
			velocity: 10,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		animateSlider(state.index);
	}, [state.index]);

	return (
		<View style={[style.tabContainer, {width: totalWidth}]}>
			<View style={style.wrapper}>
				{state.routes.map((route, index) => {
					const {options} = descriptors[route.key];
					const label =
						options.title !== undefined ? options.title : route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}

						animateSlider(index);
					};

					const onLongPress = () => {
						navigation.emit({
							type: 'tabLongPress',
							target: route.key,
						});
					};

					return (
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							style={style.item}
							key={index}>
							<BottomMenuItem
								iconName={label.toString()}
								isCurrent={isFocused}
							/>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	tabContainer: {
		shadowColor: "#000",
		shadowOffset:{
		width: 0,
		height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,

		backgroundColor: 'white',
		borderTopRightRadius: 15,
		borderTopLeftRadius: 15,

		position: 'absolute',
		bottom: 0,
		...ifIphoneX(
			{
				height: 85,
			},
			{
				height: 60,
			},
		),

	},
	wrapper: {
		flexDirection: 'row',
		display: 'flex',
		height: 60,

	},
	item: {
		height: '100%',
		flex: 1,
	},
});
