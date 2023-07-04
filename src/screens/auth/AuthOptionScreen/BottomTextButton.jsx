import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import TextBold from '../../../components/Text/TextBold';
import TextRegular from '../../../components/Text/TextRegular';
import getSize from '../../../utils/helpers';

const BottomTextButton = ({text1, text2, onPress, extraStyle, ...props}) => {
  return (
    <TouchableOpacity
      style={[styles.container, extraStyle]}
      activeOpacity={0.8}
      onPress={onPress}>
      <TextRegular text={text1} fontSize={14} />
      <TextBold text={text2} fontSize={14} />
    </TouchableOpacity>
  );
};

export default BottomTextButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: getSize(28),
    left: 0,
    right: 0,
  },
});
