import React from 'react';
import {View, ActivityIndicator, StyleSheet, Platform} from 'react-native';

const NativeActivityIndicator = ({size = 'small', color = 'white', style}) => {
  return (
    <View style={[styles.container, style]}>
      {Platform.OS === 'android' ? (
        <ActivityIndicator size={size} color={color} />
      ) : (
        <ActivityIndicator
          size={size}
          color={color}
          animating={true}
          hidesWhenStopped={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NativeActivityIndicator;
