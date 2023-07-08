import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import Colors from '../../styles/Colors.jsx';
import * as constants from '../../constants/constants.jsx';

const AppSafeArea = ({style, children}) => {
  return (
    <View
      style={[
        styles.container,
        {paddingTop: constants.statusBarHeight(48)},
        style,
      ]}>
      <StatusBar hidden />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tabScreenBackgorund,
  },
});

export default AppSafeArea;
