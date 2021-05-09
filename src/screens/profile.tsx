import React, {useState} from 'react';
import {StyleSheet, View, Button, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const googleSignConfiguration = {
	// scopes: ["email", "profile"],
	webClientId:
		'1037407465463-2amgc8nqqb17b5mg7r7smjggndg52b4h.apps.googleusercontent.com',
	// androidClientId:
	// 	'1037407465463-2amgc8nqqb17b5mg7r7smjggndg52b4h.apps.googleusercontent.com',
	// iosClientId:
	// 	'1037407465463-vgnu73m03rkkj8ivker0vrh7ckoc0ni1.apps.googleusercontent.com',
	offlineAccess: true,
	// prompt: 'select-account',
};
GoogleSignin.configure(googleSignConfiguration);

const Profile = (): React.ReactElement => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	async function onGoogleButtonPress() {
		setLoading(true);
		// Get the users ID token
		const info = await GoogleSignin.signIn();
		console.log('info', info);
		const {idToken} = info;
		// Create a Google credential with the token
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);
		// Sign-in the user with the credential
		return auth().signInWithCredential(googleCredential);
	}

	return (
		<View style={styles.main}>
			{loading && (
				<ActivityIndicator style={styles.spinner} size="large" color={'blue'} />
			)}
			<View style={styles.loginButton}>
				<Button
					disabled={loading}
					title="Sign in with Google"
					onPress={() =>
						onGoogleButtonPress().then(
							d => {
								setLoading(false);
								console.log(d);
								return;
							},
							err => {
								setLoading(false);
								setError(err.message);
							},
						)
					}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	spinner: {
		position: 'absolute',
		bottom: 230,
	},
	main: {
		backgroundColor: 'beige',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleText: {
		fontSize: 40,
		marginBottom: 20,
		position: 'absolute',
		top: '30%',
	},
	loginButton: {
		position: 'absolute',
		bottom: 120,
		alignItems: 'center',
	},
});

export default Profile;
