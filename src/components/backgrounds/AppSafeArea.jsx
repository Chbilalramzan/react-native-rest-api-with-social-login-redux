import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import Colors from '../../styles/Colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const AppSafeArea = ({style, children}) => {
  const insets = useSafeAreaInsets();
  const [statusBarHeight, setStatusBarHeight] = React.useState(0);

  React.useEffect(() => {
    StatusBar.currentHeight && setStatusBarHeight(StatusBar.currentHeight);
  }, []);
  return (
    <View
      style={[
        styles.container,
        {paddingTop: statusBarHeight + insets.top},
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
    backgroundColor: Colors.background,
  },
});

export default AppSafeArea;
