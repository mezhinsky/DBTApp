import React from 'react';
import {StyleSheet, View, Text, Button, ActivityIndicator} from 'react-native';

interface Props {
	profile: any;
}

const Profile = ({profile}): React.ReactElement<Props> => {
	return (
		<View>
			<Text>{profile.displayName}</Text>
		</View>
	);
};

export default Profile;
