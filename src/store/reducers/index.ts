import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import SkillsReducer, {SkillsState} from './skills.reducer';
import ProfileReducer, {ProfileState} from './profile.reducer';

export interface RootState {
	skills: SkillsState;
	profile: ProfileState;
}

const RootReducer = combineReducers<RootState>({
	skills: SkillsReducer,
	profile: ProfileReducer,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	debug: true,
};

export const pReducer = persistReducer<RootState>(persistConfig, RootReducer);

export default RootReducer;
