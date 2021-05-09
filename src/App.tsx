/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'react-native-elements';

import createStore from './store/configureStore';
import {HomeStackScreen} from './navigation';

const {store, persistor} = createStore();

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider>
					<HomeStackScreen />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
