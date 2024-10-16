import React from 'react';
import {StyleSheet, StatusBar, View, Image} from 'react-native';
import Colors from '../../styles/Colors.jsx';

const AuthScreensSafeArea = ({
  style,
  backgroundColor,
  bottom,
  hasShadow,
  children,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : Colors.background,
        },
        // style,
      ]}>
      <StatusBar hidden />
      {hasShadow ? (
        bottom ? (
          <Image
            source={require('../../../assets/images/shadowblurrbot.png')}
            style={styles.imageBottom}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={require('../../../assets/images/shadowblurr.png')}
            style={styles.image}
            resizeMode="cover"
          />
        )
      ) : (
        <View />
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -45,
    width: '100%',
    height: 116,
  },
  imageBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -45,
    width: '100%',
    height: 116,
  },
});

export default AuthScreensSafeArea;
