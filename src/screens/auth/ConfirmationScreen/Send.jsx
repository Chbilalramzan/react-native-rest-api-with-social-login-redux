import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../styles/Colors';
import {SendIcon} from '../../../styles/SvgIcons';

const Send = () => {
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.middleContainer}>
        <LinearGradient
          colors={[Colors.gradientButton2, Colors.gradientButton1]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.innerContainer}>
          <SendIcon />
        </LinearGradient>
      </View>
    </View>
  );
};

export default Send;

const styles = StyleSheet.create({
  OuterContainer: {
    height: getSize(223),
    width: getSize(223),
    borderRadius: getSize(223),
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleContainer: {
    height: getSize(193),
    width: getSize(193),
    borderRadius: getSize(193),
    backgroundColor: 'rgba(255, 255, 255, 0.17)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    height: getSize(164),
    width: getSize(164),
    borderRadius: getSize(164),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
