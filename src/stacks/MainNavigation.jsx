import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {useSelector} from 'react-redux';
import {NavigationRef} from './Navigation';

const MainNavigation = () => {
  const {isAuthenticated} = useSelector(state => state.auth);

  return (
    <NavigationContainer ref={NavigationRef}>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;
