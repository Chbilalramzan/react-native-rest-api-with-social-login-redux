import {View} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';

const Dot = ({
  size,
  marginHorizontal = 0,
  marginVertical = 0,
  color = '#AF9DFB',
  ...props
}) => {
  return (
    <View
      style={{
        height: getSize(size),
        width: getSize(size),
        borderRadius: getSize(size),
        marginHorizontal: getSize(marginHorizontal),
        marginVertical: getSize(marginVertical),
        backgroundColor: color,
      }}
    />
  );
};

export default Dot;
