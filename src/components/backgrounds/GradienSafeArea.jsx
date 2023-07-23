import React from 'react';
import {StyleSheet, StatusBar, View, Image} from 'react-native';
import Colors from '../../styles/Colors.jsx';
import LinearGradient from 'react-native-linear-gradient';
import getRFSize from '../../utils/Helper.js';

const GradientSafeArea = ({
  style,
  backgroundColor,
  bottom,
  hasShadow,
  children,
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8542FE', '#4336F1']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1.4}}
        locations={[0, 1]}
        style={styles.gradient}
      />
      <StatusBar hidden />
      {hasShadow && (
        <Image
          source={
            bottom
              ? require('../../../assets/images/shadowblurrbot.png')
              : require('../../../assets/images/shadowblurr.png')
          }
          style={bottom ? styles.imageBottom : styles.image}
          resizeMode="contain"
        />
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: getRFSize(76),
  },
  imageBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 116,
  },
});

export default GradientSafeArea;
