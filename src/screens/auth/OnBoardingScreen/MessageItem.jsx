import {StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors.jsx';
import TextSemiBold from '../../../components/Text/TextSemiBold';
import TextRegular from '../../../components/Text/TextRegular';

const MessageItem = ({data, extraStyle, titleSize, messageSize, ...props}) => {
  return (
    <View style={[styles.itemContainer, extraStyle]}>
      {data.icon}
      <View style={{marginStart: getSize(10)}}>
        <TextSemiBold
          text={data.title}
          fontSize={titleSize ? titleSize : 10.8}
        />
        <View style={{height: getSize(4)}} />
        <TextRegular
          text={data.message}
          fontSize={messageSize ? messageSize : 9.3}
        />
      </View>
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: getSize(12),
    paddingHorizontal: getSize(8),
    marginVertical: getSize(6),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: getSize(15),
    backgroundColor: Colors.focusedInputBackground,
  },
});
