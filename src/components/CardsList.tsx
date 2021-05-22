import React from 'react';
import {View, StyleSheet, RefreshControl, FlatList, Text} from 'react-native';
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
								return <Text style={styles.group}>{item.name}</Text>;
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
		paddingTop: 30,
		paddingBottom: 60,
	},
	header: {
		fontFamily: 'Georgia',
		paddingHorizontal: 15,
		paddingVertical: 30,
		paddingTop: 0,
		fontSize: 30,
		fontWeight: '300',
	},
	list: {
		paddingTop: 50,
	},
	group: {
		fontFamily: 'Georgia',
		fontSize: 17,
		backgroundColor: 'white',
		display: 'flex',
		paddingVertical: 20,
		textAlign: 'center',
		marginBottom: 15,
		shadowRadius: 0,
		borderColor: COLORS.main,
		borderBottomWidth: 1,
		shadowColor: COLORS.main,
		shadowOffset: {
			width: 0,
			height: 1,
		},
	},
});
