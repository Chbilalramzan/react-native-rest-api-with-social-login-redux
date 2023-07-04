import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import getSize from '../../utils/helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Cross} from '../../styles/SvgIcons';

const IconButton = ({
  size,
  color,
  iconSize,
  iconName,
  iconClass,
  iconColor,
  onPress,
  extraStyles,
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
      activeOpacity={0.7}
      onPress={onPress}>
      <Cross width={getSize(iconSize)} height={getSize(iconSize)} />
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
