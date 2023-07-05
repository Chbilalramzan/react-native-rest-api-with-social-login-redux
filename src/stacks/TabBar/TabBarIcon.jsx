import * as React from 'react';
import {
  Community,
  Connections,
  Discover,
  Home,
  Profile,
} from '../../styles/SvgIcons';
import getSize from '../../utils/helpers';

const TabBarIcon = ({route, focused, color, size}) => {
  if (route.name === 'Home') {
    return focused ? (
      <Home width={getSize(24)} height={getSize(24)} />
    ) : (
      <Home width={getSize(24)} height={getSize(24)} />
    );
  } else if (route.name === 'Discover') {
    return focused ? (
      <Discover width={getSize(24)} height={getSize(24)} />
    ) : (
      <Discover width={getSize(24)} height={getSize(24)} />
    );
  } else if (route.name === 'Community') {
    return focused ? (
      <Community width={getSize(24)} height={getSize(24)} />
    ) : (
      <Community width={getSize(24)} height={getSize(24)} />
    );
  } else if (route.name === 'Connections') {
    return focused ? (
      <Connections width={getSize(24)} height={getSize(24)} />
    ) : (
      <Connections width={getSize(24)} height={getSize(24)} />
    );
  } else if (route.name === 'Profile') {
    return <Profile width={getSize(36)} height={getSize(36)} />;
  }

  return null;
};

export default TabBarIcon;
