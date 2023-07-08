import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import TabNavigator from './TabNavigator';
import {Animated, Easing, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const startAnimation = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    };

    startAnimation();
  }, [fadeAnim]);
  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Tabs'}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {flex: 1},
});
