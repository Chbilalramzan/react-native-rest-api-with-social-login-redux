import {StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import getSize from '../../../../utils/helpers';
import TextMedium from '../../../../components/Text/TextMedium';
import Colors from '../../../../styles/Colors';
import getRFSize from '../../../../utils/Helper';

const AnimatedViewItem = ({itemTitle, itemIcon, onPress, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.touch}>
      {itemIcon}
      <TextMedium
        text={itemTitle}
        fontSize={getRFSize(13)}
        color={Colors.heading3Text}
        extraStyles={{marginStart: getSize(6)}}
      />
    </TouchableOpacity>
  );
};

export default React.memo(AnimatedViewItem);

const styles = StyleSheet.create({
  touch: {
    height: getSize(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: getSize(12),
    backgroundColor: '#16151E',
    paddingHorizontal: getSize(11),
    paddingVertical: getSize(7),
    marginHorizontal: getSize(24),
  },
});
