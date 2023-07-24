import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/auth/OnBoardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import AuthOptionScreen from '../screens/auth/AuthOptionScreen';
import AccountSetupScreen from '../screens/auth/AccountSetupScreen';
import ConfirmationScreen from '../screens/auth/ConfirmationScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import TopicSelectionScreen from '../screens/auth/TopicSelectionScreen';
import OtpVerificationScreen from '../screens/auth/ForgotPasswordScreen/OtpVerificationScreen';
import PasswordResetScreen from '../screens/auth/ForgotPasswordScreen/PasswordResetScreen';
import {Animated, Easing, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const {initialRoute, isOnBoardFinished} = useSelector(state => state.auth);

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
        screenOptions={{headerShown: false}}
        initialRouteName={initialRoute}>
        {/*<Stack.Screen name="AuthOptions" component={AuthOptionScreen} /> */}
        {isOnBoardFinished ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
        )}
        <Stack.Screen name="Register" component={AccountSetupScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="OtpVerify" component={OtpVerificationScreen} />
        <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
        <Stack.Screen name="TopicSelection" component={TopicSelectionScreen} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({
  container: {flex: 1},
});
