import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import COLORS from '../config/colors';

interface Props {
	profile: any;
}

const Profile = ({profile}): React.ReactElement<Props> => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.profile}>
				<View style={styles.meta}>
					<Text style={styles.name}>{profile.displayName}</Text>
					<Text style={styles.email}>{profile.email}</Text>
				</View>
				<Image
					style={[styles.image]}
					source={{
						uri: profile.photoURL,
					}}
				/>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 80,
	},

	profile: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		width: '100%',
		height: 150,
	},

	meta: {
		flex: 1,
	},

	image: {
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		borderWidth: 3,
		borderColor: 'white',
		padding: 3,
	},

	name: {
		fontSize: 35,
		fontWeight: '800',
		paddingTop: 10,
		width: 200,
	},
	email: {
		fontSize: 14,
		paddingTop: 4,
	},
});
