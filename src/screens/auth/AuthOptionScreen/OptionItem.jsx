import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import TextSemiBold from '../../../components/Text/TextSemiBold';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors';

const OptionItem = ({title, height, width, prefix, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.button, {height: height, width: width}]}>
      {prefix && prefix}
      <TextSemiBold
        text={title}
        color={'#FFFFFF'}
        fontSize={14}
        extraStyles={{lineHeight: getSize(32), marginLeft: getSize(11)}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: getSize(15),
    paddingVertical: getSize(14),
    paddingHorizontal: getSize(21),
    marginVertical: getSize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.authButton,
  },
});

export default OptionItem;
