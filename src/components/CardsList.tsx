import React from 'react';
import {
	View,
	StyleSheet,
	Platform,
	RefreshControl,
	Text,
	FlatList,
} from 'react-native';
import {FlatList as MyList} from './ScrollContext';
import CardItem from './CardItem';
import Header from '../components/Header';
import {styles as headerStyles} from '../components/Header/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import COLORS from '../config/colors';

import {ScrollContextProvider} from './ScrollContext';

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
	const _keyExtractor = (item: any, index: any) => index;

	const onRefreshClick = React.useCallback(() => {
		onRefresh();
	}, []);

	const List = () => {
		if (itemsMap) {
			return (
				<ScrollContextProvider>
					<View style={styles.container}>
						<FlatList
							style={styles.list}
							ListHeaderComponent={<Text style={styles.title}>Навыки</Text>}
							ListFooterComponent={<Text style={styles.footer} />}
							showsVerticalScrollIndicator={false}
							refreshControl={
								<RefreshControl
									refreshing={loading}
									onRefresh={onRefreshClick}
								/>
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
												renderItem={({item}) => {
													return (<CardItem
															name={skills[item].name}
															description={skills[item].description}
															image={skills[item].image}
															group={skills[item].group}
														/>
													);
												}}
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
				</ScrollContextProvider>
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
				paddingTop: 0,
			},
			default: {
				paddingTop: 0,
			},
		}),
	},
	header: {
		fontFamily: 'Georgia',
		paddingHorizontal: 15,
		paddingBottom: 30,
		paddingTop: 0,
		fontSize: 30,
		fontWeight: '300',
	},
	title: {
		fontSize: 35,
		fontWeight: '600',
		paddingTop: 40,
		paddingHorizontal: 15,
	},
	footer: {
		height: 60,
	},
	list: {
		...Platform.select({
			ios: {
				marginTop: 40,
			},
			android: {
				paddingTop: 80,
			},
			default: {
				paddingTop: 40,
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
});
