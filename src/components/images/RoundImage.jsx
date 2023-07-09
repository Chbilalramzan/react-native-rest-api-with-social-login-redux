import {Image, StyleSheet} from 'react-native';
import React from 'react';
import getSize from '../../utils/helpers';

const RoundImage = ({url, path, size, resizeMode, ...props}) => {
  return (
    <Image
      source={path}
      resizeMode={resizeMode}
      style={{
        width: getSize(size),
        height: getSize(size),
        borderRadius: getSize(size),
      }}
    />
  );
};

export default RoundImage;

const styles = StyleSheet.create({
  image: {},
});
