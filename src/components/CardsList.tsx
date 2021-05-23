import React from 'react';
import {View, StyleSheet, Platform, RefreshControl, Text} from 'react-native';
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
						<Header title="Навыки" />
						<MyList
							style={styles.list}
							ListHeaderComponent={<Text style={styles.header}>Навыки</Text>}
							ListFooterComponent={<Text style={styles.footer} />}
							showsVerticalScrollIndicator={false}
							stickyHeaderIndices={[1, 7, 17, 26]}
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
										/>
									);
								}
								return (
									<View style={[styles.group, {borderColor: item.color}]}>
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
				paddingTop: 30,
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
	footer: {
		height: 140,
	},
	list: {
		...Platform.select({
			ios: {
				paddingTop: 50,
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
		backgroundColor: 'white',
		display: 'flex',
		paddingVertical: 20,
		marginBottom: 15,
		borderColor: COLORS.main,
		borderLeftWidth: 5,
		borderBottomColor: '#f1f1f1de',
		borderBottomWidth: 1,
		shadowOffset: {
			width: 0,
			height: -1,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4.0,
	},
	groupTitle: {
		fontFamily: 'Georgia',
		textAlign: 'center',
		fontSize: 20,
		left: -5,
	},
});
