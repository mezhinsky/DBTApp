import React from 'react';
import {View, StyleSheet, RefreshControl, FlatList, Text} from 'react-native';
import {FlatList as MyList} from './ScrollContext';
import CardItem from './CardItem';
import Header from '../components/Header';
import {styles as headerStyles} from '../components/Header/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

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
							ListHeaderComponent={<Text style={styles.header}>Навыки</Text>}
							// stickyHeaderIndices={[1, 3]}
							refreshControl={
								<RefreshControl
									refreshing={loading}
									onRefresh={onRefreshClick}
								/>
							}
							data={items}
							renderItem={({item}) => (
								<CardItem name={item.name} description={item.description} image={item.image} />
							)}
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
		paddingHorizontal: 15,
		paddingVertical: 30,
		fontSize: 35,
		fontWeight: '300',
	},
});
