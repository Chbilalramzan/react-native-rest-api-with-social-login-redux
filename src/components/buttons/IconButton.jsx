import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import getSize from '../../utils/helpers';

const IconButton = ({
  size,
  color,
  onPress,
  extraStyles,
  disable,
  icon,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        extraStyles,
        {
          backgroundColor: color,
          height: getSize(size),
          width: getSize(size),
          borderRadius: getSize(size),
        },
      ]}
      activeOpacity={disable ? 1 : 0.7}
      onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
