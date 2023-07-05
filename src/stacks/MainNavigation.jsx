import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {useSelector} from 'react-redux';
import {selectIsAuthenticated} from '../redux/selectors/auth';
import {NavigationRef} from './Navigation';

const MainNavigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <NavigationContainer ref={NavigationRef}>
      {!isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;
