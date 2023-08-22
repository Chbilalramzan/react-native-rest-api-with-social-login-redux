import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import TextSemiBold from '../../../components/Text/TextSemiBold';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors.jsx';
import NativeActivityIndicator from '../../../components/ActivityIndicator';

const OptionItem = ({
  title,
  height = 60,
  width,
  prefix,
  onPress,
  disable = false,
  paddingStart = getSize(21),
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        styles.button,
        {
          height: height,
          width: width,
          paddingStart: disable ? 0 : paddingStart,
        },
      ]}>
      {disable ? (
        <NativeActivityIndicator />
      ) : (
        <>
          {prefix && prefix}
          <TextSemiBold
            text={title}
            color={'#FFFFFF'}
            fontSize={14}
            extraStyles={{lineHeight: getSize(32), marginLeft: getSize(11)}}
          />
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: getSize(15),

    marginVertical: getSize(10),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.authButton,
  },
});

export default OptionItem;
