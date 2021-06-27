import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	Text,
	TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../config/colors';

interface CardsListProps {
	name: any;
	description: string;
	image: string;
	group: any;
}

const CardItem: React.FC<CardsListProps> = ({
	name,
	description,
	image,
	group,
}) => {
	const navigation = useNavigation();

	return (
		<View style={[styles.container]}>
			<TouchableWithoutFeedback onPress={() => navigation.navigate('SkillCard')}>
				<View style={styles.wrapper}>
					<View style={styles.imageWrapper}>
						<Image
							style={[styles.image, {borderColor: '#f1f1f1'}]}
							source={{
								uri: image
									? image
									: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7N15fFx3fe//',
							}}
						/>
					</View>
					<View style={styles.meta}>
						<Text style={[styles.rusTitle, {color: 'black'}]}>
							{name.rus}
						</Text>
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
		margin: 5,
		borderRadius: 10,
	},
	wrapper: {
		flex: 1,
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		elevation: 2,
		width: 300,
		borderTopEndRadius: 10,
		borderTopStartRadius: 10,
	},
	imageWrapper: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		elevation: 2,
		height: 200,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	meta: {
		backgroundColor: '#AAC1BE',
		padding: 20,
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
