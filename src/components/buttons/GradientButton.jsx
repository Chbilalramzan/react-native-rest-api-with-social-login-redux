import React from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getSize from '../../utils/helpers';
import Colors from '../../styles/Colors';
import TextBold from '../Text/TextBold';

const GradientButton = ({buttonText, onPress, ...props}) => {
  const shadowStyle = Platform.select({
    ios: {
      shadowColor: 'rgba(20, 102, 204, 0.16)',
      shadowOffset: {width: 0, height: 15},
      shadowOpacity: 1,
      shadowRadius: 30,
    },
    android: {
      elevation: 10,
    },
  });

  return (
    <View style={styles.shadowContainer}>
      <LinearGradient
        colors={[Colors.gradientButton2, Colors.gradientButton1]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <TextBold text={buttonText} fontSize={16} />
        </TouchableOpacity>
      </LinearGradient>
      {Platform.OS === 'android' && (
        <View style={[styles.shadow, shadowStyle]} />
      )}
    </View>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  shadowContainer: {
    ...Platform.select({
      ios: {
        backgroundColor: 'transparent',
      },
      android: {
        backgroundColor: 'white', // Background color should match parent's background
        borderRadius: getSize(16),
      },
    }),
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getSize(16),
    height: getSize(56),
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
