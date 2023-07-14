import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {useSelector} from 'react-redux';
import {NavigationRef} from './Navigation';
import SplashScreen from 'react-native-splash-screen';

const MainNavigation = () => {
  const {isAuthenticated} = useSelector(state => state.auth);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer ref={NavigationRef}>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;
