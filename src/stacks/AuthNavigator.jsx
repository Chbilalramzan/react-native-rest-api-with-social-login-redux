import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/auth/OnBoardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import AuthOptionScreen from '../screens/auth/AuthOptionScreen';
import AccountSetupScreen from '../screens/auth/AccountSetupScreen';
import ConfirmationScreen from '../screens/auth/ConfirmationScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import TopicSelectionScreen from '../screens/auth/TopicSelectionScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      <Stack.Screen name="AuthOptions" component={AuthOptionScreen} />
      <Stack.Screen name="Register" component={AccountSetupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="TopicSelection" component={TopicSelectionScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
