import {StyleSheet, Platform} from 'react-native';
import COLORS from '../../config/colors';

export const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		display: 'flex',
		width: '100%',
		height: 80,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		backgroundColor: '#fff',
		shadowRadius: 0,
		borderBottomColor: COLORS.main,
		borderBottomWidth: 1,
		shadowColor: COLORS.main,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		zIndex: 9,
	},
	headerTitle: {
		display: 'flex',
		flexBasis: '33%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		color: 'black',
		...Platform.select({
			ios: {
				paddingTop: 30,
			},
			android: {
				paddingTop: 20,
			},
			default: {
				paddingTop: 30,
			},
		}),
	},
	headerLeft: {
		flexBasis: '33%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignContent: 'center',
	},
	headerRight: {
		flexBasis: '33%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		alignContent: 'center',
	},
	title: {
		fontSize: 17,
		fontWeight: '600',
		textAlign: 'center',
		color: COLORS.main,
	},
	headerText: {
		textAlign: 'center',
		paddingHorizontal: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignContent: 'center',
		fontSize: 17,
		fontWeight: '600',
	},
});

export default styles;
