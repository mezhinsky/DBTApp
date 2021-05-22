import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../config/colors';

export const main = COLORS.main;
export const grey = '#CFD2D7';

let fontMap: any = {
	'61f': '\ue61f',
	'68b': '\ue68b',
};

type Props = {
	iconName: string;
	title?: string;
	isCurrent?: boolean;
};

export const BottomMenuItem = ({iconName, isCurrent}: Props) => {
	return (
		<View
			style={{
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			{/* <Icon
				name={iconName}
				size={32}
				style={{color: isCurrent ? main : grey}}
			/> */}
			<Text
				style={{
					fontFamily: 'iconfont',
					fontSize: 32,
					color: isCurrent ? main : grey,
				}}>
				{fontMap[iconName]}
			</Text>
		</View>
	);
};
