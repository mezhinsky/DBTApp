import { iteratorSymbol } from 'immer/dist/internal';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  StyleSheet,
  Button,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';

interface CardsListProps {
  items: any[];
}

const CardsList: React.FC<CardsListProps> = ({items}) => {
  const List = () => {
    if (items) {
      return (
        <>
          {Object.keys(items).map(function (key: any) {
            return (
              <Text key={key}>
                {items[key].name}---{items[key].group.name}
              </Text>
            );
          })}
        </>
      );
    } else {
      return <Text>empty</Text>;
    }
  };

  return List();
};

export default CardsList;

const style = StyleSheet.create({
  tabContainer: {
    height: 60,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
  },
  slider: {
    height: 5,
    position: 'absolute',
    top: 0,
    left: 10,
    backgroundColor: '#ffff',
    borderRadius: 10,
  },
});
