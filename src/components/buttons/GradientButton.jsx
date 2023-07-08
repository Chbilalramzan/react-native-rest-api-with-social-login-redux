import React from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getSize from '../../utils/helpers';
import Colors from '../../styles/Colors.jsx';
import TextBold from '../Text/TextBold';
import NativeActivityIndicator from '../ActivityIndicator';

const GradientButton = ({
  disable = false,
  buttonText,
  buttonHeight = getSize(56),
  onPress,
  fontSize = getSize(16),
  extraTextStyle,
}) => {
  const outerShadow = Platform.select({
    ios: {
      shadowOffset: {width: 0, height: 20},
      shadowColor: Colors.gradientButtonOuterShadow,
      shadowOpacity: 0.16,
      shadowRadius: 12,
    },
    android: {
      elevation: 30,
    },
  });
  const innerShadow = Platform.select({
    ios: {
      shadowOffset: {width: 0, height: 15},
      shadowColor: Colors.gradientButtonInnerShadow,
      shadowOpacity: 0.15,
      shadowRadius: 24,
    },
    android: {
      elevation: 10,
    },
  });

  return (
    <View style={outerShadow}>
      <View style={innerShadow}>
        <LinearGradient
          colors={[Colors.gradientButton2, Colors.gradientButton1]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.gradient, {height: buttonHeight}]}>
          <TouchableOpacity
            disabled={disable}
            onPress={onPress}
            style={styles.button}>
            {disable ? (
              <NativeActivityIndicator />
            ) : (
              <TextBold
                text={buttonText}
                fontSize={fontSize}
                extraStyles={extraTextStyle}
              />
            )}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  shadowContainer: {},
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getSize(16),
    height: getSize(56),
  },
  button: {
    width: '100%',
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
