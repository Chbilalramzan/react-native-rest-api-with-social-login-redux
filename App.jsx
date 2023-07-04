/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import AccountSetupScreen from './src/screens/auth/AccountSetupScreen';

function App() {
  return (
    <View style={styles.sectionContainer}>
      <AccountSetupScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {flex: 1, backgroundColor: '#17161F'},
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
