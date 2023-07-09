import {StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../../utils/helpers';
import TextSemiBold from '../../../../components/Text/TextSemiBold';
import Colors from '../../../../styles/Colors';

const TopBlogs = () => {
  return (
    <View
      style={{
        paddingTop: getSize(22),
        paddingBottom: getSize(30),
        paddingStart: getSize(24),
      }}>
      <View style={styles.heading}>
        <TextSemiBold
          text={'Top blogs today'}
          fontSize={15}
          color={Colors.heading3Text}
        />
      </View>
    </View>
  );
};

export default TopBlogs;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: getSize(24),
    marginBottom: getSize(8),
  },
});
