import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import getSize from '../../utils/helpers';
import Colors from '../../styles/Colors';

const FollowersStacked = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/i4.png')}
      />
      <Image
        style={[styles.image, styles.overlay, {left: 15}]}
        source={require('../../../assets/images/i2.png')}
      />
      <Image
        style={[styles.image, styles.overlay, {left: 30}]}
        source={require('../../../assets/images/i3.png')}
      />
      <Image
        style={[styles.image, styles.overlay, {left: 45}]}
        source={require('../../../assets/images/i1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    resizeMode: 'contain',
    width: getSize(29.24),
    height: getSize(29.24),
    borderRadius: getSize(29.24),
    borderWidth: 1,
    borderColor: Colors.authButton,
  },
  overlay: {
    position: 'absolute',
    top: 0,
  },
});

export default FollowersStacked;
