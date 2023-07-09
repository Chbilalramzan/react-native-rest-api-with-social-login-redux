import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import AppSafeArea from '../../components/backgrounds/AppSafeArea';
import Header from '../../components/Header';
import InterestItem from './components/InterestItem';
import getSize from '../../utils/helpers';
import CreatePostButton from './components/CreatePostButton';

const HomeScreen = ({navigation}) => {
  const [data] = React.useState([
    {
      id: 0,
      name: 'New',
      isSelected: true,
    },
    {
      id: 1,
      name: 'Hot Topic',
      isSelected: false,
    },
    {
      id: 2,
      name: 'Financials',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Shares',
      isSelected: false,
    },
    {
      id: 4,
      name: 'Investments',
      isSelected: false,
    },
    {
      id: 5,
      name: 'Intial Investments',
      isSelected: false,
    },
  ]);

  const onItemSelect = item => {};

  return (
    <AppSafeArea>
      <Header showMenu showNotification showRightButton />
      <View>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          horizontal
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <InterestItem item={item} onItemSelect={onItemSelect} />
          )}
        />
      </View>
      <CreatePostButton />
    </AppSafeArea>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contentContainer: {
    marginStart: getSize(24),
    paddingEnd: getSize(24),
  },
});
