import React, {useEffect, useState} from 'react';
import {
	View,
	StyleSheet,
	Image,
	Text,
	TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import COLORS from '../config/colors';
import storage from '@react-native-firebase/storage';

interface CardsListProps {
	id: string;
	color: string;
	name: any;
	description: string;
	image: string;
}

const CardItem: React.FC<CardsListProps> = ({id, name, color, description, image}) => {
	const navigation = useNavigation();
	const [img, imageSet] = React.useState('');

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await storage().ref(`/images/${id}.png`);
				let t = await response.getDownloadURL();
				imageSet(t);
			} catch (error) {

			}
		}
		fetchData();
	}, []);

	return (
		<View style={[styles.container]}>
			<TouchableWithoutFeedback
				onPress={() => navigation.navigate('SkillCard')}>
				<View style={styles.wrapper}>
					<View style={styles.imageWrapper}>
						{img.length > 0 && (
							<Image
								style={[styles.image]}
								source={{
									uri: img,
								}}
							/>
						)}
					</View>
					<View style={[styles.meta, {backgroundColor: color}]}>
						<Text style={[styles.rusTitle, {color: 'black'}]}>{name.rus}</Text>
						<Text style={styles.engTitle}>{name.eng}</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default CardItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		margin: 10,
		borderRadius: 15,
	},
	wrapper: {
		flex: 1,
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		elevation: 2,
		width: 300,

	},
	imageWrapper: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		elevation: 2,
		height: 200,
		overflow: 'hidden',
		borderTopEndRadius: 10,
		borderTopStartRadius: 10,
	},
	image: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	meta: {
		padding: 10,
		width: '100%',
		flex: 1,
		borderBottomEndRadius: 10,
		borderBottomStartRadius: 10,
	},
	rusTitle: {
		fontSize: 18,
		paddingBottom: 2,
	},
	engTitle: {
		fontSize: 14,
		fontWeight: '400',
		opacity: 0.5,
	},
});
