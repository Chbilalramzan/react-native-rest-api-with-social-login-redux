import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import getSize from '../../utils/helpers';

const RoundShadowImage = () => {
  return (
    <View>
      <FastImage
        source={require('../../../assets/images/person2b.png')}
        style={styles.imageProfileb}
      />
      <FastImage
        source={require('../../../assets/images/person2.png')}
        style={styles.imageProfile}
      />
    </View>
  );
};

export default RoundShadowImage;

const styles = StyleSheet.create({
  imageProfile: {
    height: getSize(90),
    width: getSize(90),
    borderRadius: getSize(90),
    position: 'absolute',
    top: getSize(170),
  },

  imageProfileb: {
    height: getSize(130),
    width: getSize(130),
    borderRadius: getSize(130),
    position: 'absolute',
    top: getSize(150),
  },
});
