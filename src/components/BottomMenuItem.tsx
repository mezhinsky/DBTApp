import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const blue = '#3A36D5';
export const grey = '#CFD2D7';

let fontMap: any = {
	'626': '\ue626',
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
				style={{color: isCurrent ? blue : grey}}
			/> */}
			<Text
				style={{
					fontFamily: 'iconfont',
					fontSize: 32,
					color: isCurrent ? blue : grey,
				}}>
				{fontMap[iconName]}
			</Text>
		</View>
	);
};
