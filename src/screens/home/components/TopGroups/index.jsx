import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../../utils/helpers';
import TextSemiBold from '../../../../components/Text/TextSemiBold';
import Colors from '../../../../styles/Colors';
import TopGroupsItem from './TopGroupsItem';

const TopGroups = () => {
  const data = [
    {
      id: 0,
      image: require('../../../../../assets/images/TG1.png'),
      title: 'Learn, Laugh and Investment',
      people: '1220 people',
    },
    {
      id: 1,
      image: require('../../../../../assets/images/TG2.png'),
      title: 'Duddies FInancials',
      people: '1220 people',
    },
  ];

  return (
    <View
      style={{
        paddingTop: getSize(22),
        paddingBottom: getSize(30),
        paddingStart: getSize(24),
      }}>
      <View style={styles.heading}>
        <TextSemiBold
          text={'Top Groups for investment learning'}
          fontSize={15}
          color={Colors.heading3Text}
        />
        <TextSemiBold
          text={'View more'}
          fontSize={12}
          color={Colors.heading2Text}
        />
      </View>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => <TopGroupsItem item={item} />}
      />
    </View>
  );
};

export default TopGroups;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: getSize(24),
    marginBottom: getSize(8),
  },
});
