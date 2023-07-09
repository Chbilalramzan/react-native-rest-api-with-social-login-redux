import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import getSize from '../../../utils/helpers';
import TextMedium from '../../../components/Text/TextMedium';
import Colors from '../../../styles/Colors';

const BottomSheetItem = ({
  itemTitle,
  itemIcon,
  iconBackgroundColor,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.touch}>
      <View
        style={[styles.iconContainer, {backgroundColor: iconBackgroundColor}]}>
        {itemIcon}
      </View>
      <TextMedium text={itemTitle} fontSize={16} color={Colors.heading3Text} />
    </TouchableOpacity>
  );
};

export default React.memo(BottomSheetItem);

const styles = StyleSheet.create({
  iconContainer: {
    width: getSize(36),
    height: getSize(36),
    borderRadius: getSize(36),
    marginEnd: getSize(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: getSize(12),
    flex: 1,
    marginHorizontal: getSize(24),
  },
});
