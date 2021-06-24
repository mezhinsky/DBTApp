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
	items: any[];
	loading: boolean;
	onRefresh: Function;
}

const CardsList: React.FC<CardsListProps> = ({items, loading, onRefresh}) => {
	const _keyExtractor = (item: any, index: any) => index;

	const onRefreshClick = React.useCallback(() => {
		onRefresh();
	}, []);

	const List = () => {
		if (items) {
			return (
				<ScrollContextProvider>
					<View style={styles.container}>
						{/* <Header title="Навыки" /> */}

						<FlatList
							style={styles.list}
							ListHeaderComponent={<Text style={styles.title}>Навыки</Text>}
							ListFooterComponent={<Text style={styles.footer} />}
							showsVerticalScrollIndicator={false}
							// stickyHeaderIndices={items.length ? [0, 6, 16, 25] : undefined}
							refreshControl={
								<RefreshControl
									refreshing={loading}
									onRefresh={onRefreshClick}
								/>
							}
							data={items}
							renderItem={({item}) => {
								if (item.type === 'skill') {
									return (
										<CardItem
											name={item.name}
											description={item.description}
											image={item.image}
											group={item.group}
										/>
									);
								}
								return (
									<View style={styles.group}>
										<Text style={styles.groupTitle}>{item.name}</Text>
									</View>
								);
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
				paddingTop: 30,
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
		paddingHorizontal: 15,
	},
	footer: {
		height: 60,
	},
	list: {
		...Platform.select({
			ios: {
				marginTop: 80,
			},
			android: {
				paddingTop: 80,
			},
			default: {
				paddingTop: 50,
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
