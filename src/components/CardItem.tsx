import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface CardsListProps {
	name: any;
	description: string;
	image: string,
}

const CardItem: React.FC<CardsListProps> = ({name, description, image}) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.wrapper}
				onPress={() => navigation.navigate('SkillCard')}>
				<Text>{name.rus}</Text>
				{/* <Image
					style={{
						width: 100,
						height: 100,
						position: 'absolute',
						right: 10,
						resizeMode: 'contain',
					}}
					source={{
						uri: image ? image : '',
					}}
				/> */}
			</TouchableOpacity>
		</View>
	);
};

export default CardItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginHorizontal: 10,
		marginTop: 0,
		marginBottom: 20,
		overflow: 'hidden',
	},
	wrapper: {
		flex: 1,
		paddingVertical: 30,
		borderRadius: 5,
		elevation: 2,
		backgroundColor: 'white',
	},
});
