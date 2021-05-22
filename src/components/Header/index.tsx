import React, {useState, useEffect} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {useScroller} from '../ScrollContext';
import {styles} from './styles';
import {HeaderProps} from './types';

export const Header = (props: HeaderProps) => {
	const {titleShowing, opacity} = useScroller();

	const [titleFade] = useState(new Animated.Value(0));

	useEffect(() => {
		titleShowing === false &&
			Animated.timing(titleFade, {
				toValue: 0,
				duration: 100,
				useNativeDriver: true,
				easing: Easing.sin,
			}).start();

		titleShowing === true &&
			Animated.timing(titleFade, {
				toValue: 1,
				duration: 100,
				useNativeDriver: true,
				easing: Easing.sin,
			}).start();
	});

	return (
		<Animated.View
			style={{
				...styles.header,
				shadowOpacity: opacity,
				opacity: titleFade,
			}}>
			<Animated.View
				style={{
					opacity: titleFade,
					...styles.headerTitle,
				}}>
				<Text style={styles.title}>{props.title}</Text>
			</Animated.View>
		</Animated.View>
	);
};

export default Header;
