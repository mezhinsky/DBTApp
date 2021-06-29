import React, {useEffect} from 'react';
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
														group={skills[item]?.group}
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
		fontSize: 35,
		fontWeight: '600',
		paddingHorizontal: 15,
	},
	list: {
		...Platform.select({
			ios: {
				marginTop: 70,
			},
			android: {
				paddingTop: 30,
				marginBottom: 30,
			},
		}),
	},
	group: {
		paddingTop: 25,
		paddingBottom: 14,
	},
	groupTitle: {
		fontSize: 23,
		fontWeight: '600',
		paddingHorizontal: 15,
		color: '#cccccc',
	},
	footer: {
		height: 80,
	},
});
