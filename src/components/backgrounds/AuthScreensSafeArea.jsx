import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../styles/Colors';

const AuthScreensSafeArea = ({style, children}) => {
  return (
    <View style={[styles.container, style]}>
      <StatusBar hidden />
      {/* <SafeAreaView style={styles.container} edges={['top', 'bottom']}> */}
      {children}
      {/* </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 0,
    margin: 0,
  },
});

export default AuthScreensSafeArea;
