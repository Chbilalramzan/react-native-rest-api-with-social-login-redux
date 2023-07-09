import {View, StyleSheet} from 'react-native';
import React from 'react';
import getSize from '../../utils/helpers';
import FastImage from 'react-native-fast-image';
import NativeActivityIndicator from '../ActivityIndicator';
import Colors from '../../styles/Colors';

const BoxImage = ({
  url,
  path,
  height,
  width,
  radius,
  resizeMode = 'cover',
  ...props
}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <View
      style={{
        width: width,
        height: getSize(height),
        borderRadius: getSize(radius),
      }}>
      <FastImage
        source={path}
        resizeMode={resizeMode}
        style={{
          width: width,
          height: getSize(height),
          borderRadius: getSize(radius),
        }}
        onLoad={handleImageLoad}
      />
      {isLoading && (
        <NativeActivityIndicator size="large" color={Colors.white} />
      )}
    </View>
  );
};

export default BoxImage;

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
