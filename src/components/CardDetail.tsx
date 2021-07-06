import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
// import COLORS from '../config/colors';
import storage from '@react-native-firebase/storage';

interface CardsListProps {
	id: string;
	name: any;
	description: any;
	rule: any;
	onFavoritesToggle: Function;
}

let fontMap: any = {
	'61f': '\ue61f',
	'68b': '\ue68b',
	'6d9': '\ue6d9',
	'624': '\ue624',
	'626': '\ue626',
	'611': '\ue611',
	'655': '\ue655',
	'643': '\ue643',
};

const CardItem: React.FC<CardsListProps> = ({
	id,
	name,
	description,
	rule,
	onFavoritesToggle,
}) => {
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

	// const onPress = React.useCallback((id) => {
	// 	onFavoritesToggle(id);
	// }, []);
	const onPress = (id) => {
		onFavoritesToggle(id);
	};

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
					<View style={styles.header}>
						<Text style={styles.nameRus}>{name.rus}</Text>
						<TouchableOpacity
							accessibilityRole="button"
							onPress={() => onPress(id)}
							onLongPress={onPress}
							key={1}>
							<Text
								style={{
									fontFamily: 'iconfont',
									fontSize: 30,
									color: 'gray',
									marginLeft: 20,
								}}>
								{fontMap['655']}
							</Text>
						</TouchableOpacity>
					</View>
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
		width: '100%',
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

	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 15,

	},
	nameRus: {
		fontSize: 25,
		fontWeight: '400',
		width: '70%',
	},
	nameEng: {
		fontSize: 14,
		fontWeight: '600',
		paddingBottom: 20,
	},
});
