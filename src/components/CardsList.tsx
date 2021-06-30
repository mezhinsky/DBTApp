import React, {useEffect} from 'react';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {
	View,
	StyleSheet,
	Platform,
	RefreshControl,
	Text,
	FlatList,
} from 'react-native';
import CardItem from './CardItem';
interface CardsListProps {
	itemsMap: any;
	skills: any;
	groups: any;
	loading: boolean;
	onRefresh: Function;
}

let fontMap: any = {
	'61f': '\ue61f',
	'68b': '\ue68b',
	'6d9': '\ue6d9',
	'624': '\ue624',
	'626': '\ue626',
	'611': '\ue611',

};

const CardsList: React.FC<CardsListProps> = ({
	itemsMap,
	skills,
	groups,
	loading,
	onRefresh,
}) => {
	useEffect(() => {}, []);

	const _keyExtractor = (item: any, index: any) => index;

	const onRefreshClick = React.useCallback(() => {
		onRefresh();
	}, []);

	const List = () => {
		if (itemsMap) {
			return (
				<View style={styles.container}>
					<FlatList
						style={styles.list}
						ListHeaderComponent={<Text style={styles.title}>Навыки</Text>}
						ListFooterComponent={<Text style={styles.footer} />}
						showsVerticalScrollIndicator={false}
						refreshControl={
							<RefreshControl refreshing={loading} onRefresh={onRefreshClick} />
						}
						data={itemsMap}
						renderItem={({item}) => {
							if (Array.isArray(item)) {
								return (
									<View>
										<FlatList
											data={item}
											horizontal={true}
											keyExtractor={item => item}
											showsHorizontalScrollIndicator={false}
											renderItem={({item}) =>
												item && (
													<CardItem
														key={skills[item]?.id}
														id={skills[item]?.id}
														name={skills[item]?.name}
														description={skills[item]?.description}
														image={skills[item]?.image}
														color={groups[skills[item]?.skillGroupID].color}
													/>
												)
											}
										/>
									</View>
								);
							}
							if (typeof item === 'string') {
								return (
									<View style={styles.group}>
										<Text style={styles.groupTitle}>{groups[item].name}</Text>
										{/* <Text
											style={{
												fontFamily: 'iconfont',
												fontSize: 28,
												color: groups[item].color,
											}}>
											{fontMap[groups[item].icon]}
										</Text> */}
									</View>
								);
							}
							return <Text />;
						}}
						keyExtractor={_keyExtractor}
					/>
				</View>
			);
		} else {
			return <Text>empty</Text>;
		}
	};

	return List();
};

export default CardsList;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		...Platform.select({
			ios: {
				paddingTop: 0,
			},
			android: {
				paddingTop: 30,
			},
			default: {
				paddingTop: 0,
			},
		}),
	},
	title: {
		...Platform.select({
			ios: {
				paddingTop: 30,
			},
		}),
		paddingHorizontal: 10,
		fontSize: 35,
		fontWeight: '600',
	},
	list: {
		...Platform.select({
			ios: {
				marginTop: 0,
			},
			android: {
				paddingTop: 30,
				marginBottom: 30,
			},
		}),
	},
	group: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 25,
		paddingBottom: 14,
	},
	groupTitle: {
		paddingHorizontal: 10,
		fontSize: 22,
		fontWeight: '600',
		paddingRight: 8,
		color: '#cccccc',
	},
	footer: {
		...ifIphoneX(
			{
				height: 60,
			},
			{
				height: 60,
			},
		),
	},
});
