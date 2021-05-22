import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {StyleSheet, View, Button, ActivityIndicator} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {createStructuredSelector} from 'reselect';
import {singInAction, singOutAction, singInSilentAction} from '../store/actions/profile.actions';
import {
	makeSelectProfileInfo,
	makeSelectProfileLoading,
	makeSelectProfileError,
} from '../store/selectors/profile.selectors';
import ProfileInfo from '../components/Profile';

import COLORS from '../config/colors';

// const googleSignConfiguration = {
// 	webClientId:
// 		'1037407465463-2amgc8nqqb17b5mg7r7smjggndg52b4h.apps.googleusercontent.com',
// 	// androidClientId:
// 	// 	'1037407465463-2amgc8nqqb17b5mg7r7smjggndg52b4h.apps.googleusercontent.com',
// 	// iosClientId:
// 	// 	'1037407465463-vgnu73m03rkkj8ivker0vrh7ckoc0ni1.apps.googleusercontent.com',
// 	offlineAccess: true,
// };
// GoogleSignin.configure(googleSignConfiguration);

interface PageProps {
	profile: any;
	loading: any;
	error: any;
}

const Profile = ({profile, loading, error}): React.ReactElement<PageProps> => {
	const dispatch = useDispatch();

	const signIn = () => {
		dispatch(singInAction());
	};

	const signOut = () => {
		dispatch(singOutAction());
	};
	
	return (
		<View style={styles.main}>
			{loading && (
				<ActivityIndicator
					style={styles.spinner}
					size="large"
					color={COLORS.main}
				/>
			)}

			{profile && <ProfileInfo profile={profile} />}

			{!profile && (
				<View style={styles.loginButton}>
					<Button title="Sign in with Google" onPress={signIn} />
				</View>
			)}
			{profile && (
				<View style={styles.loginButton}>
					<Button title="Sign out" onPress={signOut} />
				</View>
			)}
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

function mapDispatchToProps(dispatch: any) {
	return {};
}

const mapStateToProps = createStructuredSelector({
	profile: makeSelectProfileInfo(),
	loading: makeSelectProfileLoading(),
	error: makeSelectProfileError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
