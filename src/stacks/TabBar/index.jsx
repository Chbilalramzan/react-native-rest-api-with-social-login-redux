import * as React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import getSize from '../../utils/helpers';
import Colors from '../../styles/Colors.jsx';
import TabBarIcon from './TabBarIcon';
import TabBarLabel from './TabBarLabel';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}>
            <TabBarIcon
              route={route}
              focused={isFocused}
              color={isFocused ? 'blue' : 'gray'}
              size={24}
            />
            <TabBarLabel
              route={route}
              focused={isFocused}
              color={isFocused ? 'blue' : 'gray'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: getSize(70),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tabBarColor,
  },
  tabButton: {flex: 1, alignItems: 'center'},
});

export default TabBar;
