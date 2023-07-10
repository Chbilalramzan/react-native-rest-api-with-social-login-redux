import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../../utils/helpers';
import TextSemiBold from '../../../../components/Text/TextSemiBold';
import Colors from '../../../../styles/Colors';
import TopMentorsItem from './TopMentorsItem';

const TopMentors = () => {
  const data = [
    {
      id: 0,
      image: require('../../../../../assets/images/TG1.png'),
      name: 'Andrew Russell',
      role: 'Financial Expert',
      rating: '5',
      company: 'Tuchman Company, CEO',
    },
    {
      id: 1,
      image: require('../../../../../assets/images/TG1.png'),
      name: 'Waleed Khan',
      role: 'UI/UX Designer',
      rating: '5',
      company: 'Tuchman Company, CEO',
    },
    {
      id: 2,
      image: require('../../../../../assets/images/TG1.png'),
      name: 'Bill',
      role: 'Financial Expert',
      rating: '5',
      company: 'Tuchman Company, CEO',
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
          text={'Top mentors you can know'}
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
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => <TopMentorsItem item={item} />}
      />
    </View>
  );
};

export default TopMentors;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: getSize(24),
    marginBottom: getSize(8),
  },
  flatList: {
    paddingTop: 50,
  },
});
