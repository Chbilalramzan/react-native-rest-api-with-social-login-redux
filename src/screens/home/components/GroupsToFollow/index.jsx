import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../../utils/helpers';
import TextSemiBold from '../../../../components/Text/TextSemiBold';
import Colors from '../../../../styles/Colors';
import TopGroupsItem from '../TopGroups/TopGroupsItem';
import GroupsToFollowItem from './GroupsToFollowItem';

const GroupsToFollow = () => {
  const data = [
    {
      id: 0,
      image: require('../../../../../assets/images/TG1.png'),
      icon: require('../../../../../assets/images/love.png'),
      title: 'Get some cash',
      people: '1,434,343 members',
    },
    {
      id: 1,
      image: require('../../../../../assets/images/TG2.png'),
      icon: require('../../../../../assets/images/twitterr.png'),
      title: 'Get some cash',
      people: '1,434,343 members',
    },
    {
      id: 2,
      image: require('../../../../../assets/images/TG2.png'),
      icon: require('../../../../../assets/images/love.png'),
      title: 'Get some cash',
      people: '1,434,343 members',
    },
  ];
  return (
    <View
      style={{
        paddingTop: getSize(22),
        paddingBottom: getSize(30),
        paddingStart: getSize(24),
      }}>
      <TextSemiBold
        text={'Groups to Follow'}
        fontSize={15}
        color={Colors.heading3Text}
      />
      <FlatList
        horizontal
        style={styles.flatList}
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => <GroupsToFollowItem item={item} />}
      />
    </View>
  );
};

export default GroupsToFollow;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: getSize(24),
    marginBottom: getSize(8),
  },
  flatList: {
    marginTop: 8,
  },
});
