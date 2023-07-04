import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsFeed from '../screens/home/NewsFeed';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Home" component={NewsFeed} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
