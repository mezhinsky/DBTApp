import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
// import COLORS from '../config/colors';
import storage from '@react-native-firebase/storage';

interface CardsListProps {
	id: string;
	name: any;
	description: any;
	rule: any;
}

const CardItem: React.FC<CardsListProps> = ({id, name, description, rule}) => {
	const [img, imageSet] = useState('');

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await storage().ref(`/images/${id}.png`);
				let t = await response.getDownloadURL();
				imageSet(t);
			} catch (error) {}
		}
		fetchData();
	}, []);

	return (
		<View style={[styles.wrapper]}>
			<View style={[styles.container]}>
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
				<View style={styles.content}>
					<Text style={styles.nameRus}>{name.rus}</Text>
					<Text style={styles.nameEng}>{name.eng}</Text>
					<Text>{description}</Text>
				</View>
			</View>
		</View>
	);
};

export default CardItem;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
	imageWrapper: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		elevation: 2,
		height: 300,
		borderBottomRightRadius: 15,
		borderBottomLeftRadius: 15,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	content: {
		padding: 20,
	},
	nameRus: {
		fontSize: 25,
		fontWeight: '400',
		paddingBottom: 8,
	},
	nameEng: {
		fontSize: 14,
		fontWeight: '600',
		paddingBottom: 20,
	},
});
