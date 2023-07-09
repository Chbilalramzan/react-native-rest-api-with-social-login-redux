import {StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../../utils/helpers';
import TextSemiBold from '../../../../components/Text/TextSemiBold';
import Colors from '../../../../styles/Colors';

const TopMentors = () => {
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
});
