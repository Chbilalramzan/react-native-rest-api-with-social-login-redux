import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {useSelector} from 'react-redux';
import {NavigationRef} from './Navigation';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';

const MainNavigation = () => {
  const {isAuthenticated} = useSelector(state => state.auth);

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer ref={NavigationRef}>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;
