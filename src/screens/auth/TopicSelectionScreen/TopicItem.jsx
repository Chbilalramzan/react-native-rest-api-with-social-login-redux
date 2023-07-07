import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors.jsx';
import TextMedium from '../../../components/Text/TextMedium';

const TopicItem = ({item, onPress, onItemSelect, ...props}) => {
  const onPressItem = () => {
    onItemSelect(item);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      style={[
        styles.itemContainer,
        {
          backgroundColor: Colors.authButton,
        },
      ]}
      onPress={onPressItem}>
      <TextMedium text={item.text} fontSize={14} />
    </TouchableOpacity>
  );
};

export default TopicItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: getSize(16),
    paddingHorizontal: getSize(24),
    width: '100%',
    height: getSize(60),
    marginVertical: getSize(8),
    justifyContent: 'center',
    borderRadius: getSize(15),
  },
});
