import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// import {firebaseReducer} from 'react-redux-firebase';
// import {firestoreReducer} from 'redux-firestore';
import SkillsReducer, {SkillsState} from './skills.reducer';

export interface RootState {
  skills: SkillsState;
}

const RootReducer = combineReducers<RootState>({
  skills: SkillsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['firestore', 'skills'],
  // stateReconciler: hardSet,
  // stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  debug: true,
};

export const pReducer = persistReducer<RootState>(persistConfig, RootReducer);

export default RootReducer;
