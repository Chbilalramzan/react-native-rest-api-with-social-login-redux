import * as React from 'react';
import TextSemiBold from '../../components/Text/TextSemiBold';
import Colors from '../../styles/Colors.jsx';
import TextRegular from '../../components/Text/TextRegular';

const TabBarLabel = ({route, focused, color}) => {
  // Define your tab bar labels based on the route name
  let labelComponent;

  if (route.name === 'Home') {
    labelComponent = focused ? (
      <TextSemiBold text={'Home'} fontSize={11} color={Colors.white} />
    ) : (
      <TextRegular
        text={'Home'}
        fontSize={11}
        color={Colors.tabBarInActiveIconColor}
      />
    );
  } else if (route.name === 'Discover') {
    labelComponent = focused ? (
      <TextSemiBold text={'Discover'} fontSize={11} color={Colors.white} />
    ) : (
      <TextRegular
        text={'Discover'}
        fontSize={11}
        color={Colors.tabBarInActiveIconColor}
      />
    );
  } else if (route.name === 'Community') {
    labelComponent = focused ? (
      <TextSemiBold text={'Community'} fontSize={11} color={Colors.white} />
    ) : (
      <TextRegular
        text={'Community'}
        fontSize={11}
        color={Colors.tabBarInActiveIconColor}
      />
    );
  } else if (route.name === 'Connections') {
    labelComponent = focused ? (
      <TextSemiBold text={'Connections'} fontSize={11} color={Colors.white} />
    ) : (
      <TextRegular
        text={'Connections'}
        fontSize={11}
        color={Colors.tabBarInActiveIconColor}
      />
    );
  }
  //   else if (route.name === 'Profile') {
  //     labelComponent = focused ? (
  //       <TextSemiBold text={'Profile'} fontSize={11} color={Colors.white} />
  //     ) : (
  //       <TextRegular
  //         text={'Profile'}
  //         fontSize={11}
  //         color={Colors.tabBarInActiveIconColor}
  //       />
  //     );
  //   }

  return labelComponent;
};

export default TabBarLabel;
