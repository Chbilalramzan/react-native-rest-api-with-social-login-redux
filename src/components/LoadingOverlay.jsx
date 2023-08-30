import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Animated} from 'react-native';

const LoadingOverlay = ({isVisible}) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isVisible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isVisible, opacity]);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.backdrop, {opacity}]} />
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  indicatorContainer: {
    position: 'absolute',
  },
});

export default LoadingOverlay;
