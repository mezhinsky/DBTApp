import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
	StyleSheet,
	View,
	Button,
	Pressable,
	Text,
	ActivityIndicator,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {createStructuredSelector} from 'reselect';
import {singInAction, singOutAction} from '../store/actions/profile.actions';
import {
	makeSelectProfileInfo,
	makeSelectProfileLoading,
	makeSelectProfileError,
} from '../store/selectors/profile.selectors';
import ProfileInfo from '../components/Profile';

import COLORS from '../config/colors';

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
					<Button title="войти через Google" onPress={signIn} />
				</View>
			)}
			{profile && (
				<View style={styles.loginButton}>
					{/* <Button title="Выйти" onPress={signOut} /> */}
					<Pressable style={styles.button} onPress={signOut}>
						<Text style={styles.text}>Выйти</Text>
					</Pressable>
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
		backgroundColor: 'white',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginButton: {
		position: 'absolute',
		bottom: 100,
		alignItems: 'center',
	},
	button: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: COLORS.main,
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
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
