import {StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../../utils/helpers';
import TextMedium from '../../../../components/Text/TextMedium';

const PostFooterButton = ({value, icon, onPress, ...props}) => {
  return (
    <View style={styles.rating}>
      {icon}
      <TextMedium text={` ${value}`} fontSize={14} />
    </View>
  );
};

export default PostFooterButton;

const styles = StyleSheet.create({
  rating: {
    backgroundColor: '#151320',
    paddingVertical: getSize(5),
    paddingHorizontal: getSize(10),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: getSize(20),
  },
});
