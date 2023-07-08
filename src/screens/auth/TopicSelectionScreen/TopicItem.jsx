import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors.jsx';
import TextMedium from '../../../components/Text/TextMedium';

const TopicItem = ({
  item,
  onPress,
  selectedInterests,
  onItemSelect,
  index,
  ...props
}) => {
  function isSelected() {
    return selectedInterests.some(selectedItem => selectedItem.id === item.id);
  }
  const onPressItem = () => {
    onItemSelect(item);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      style={[
        styles.itemContainer,
        {
          backgroundColor: isSelected() ? Colors.white : Colors.authButton,
        },
      ]}
      onPress={onPressItem}>
      <TextMedium
        text={item.name}
        fontSize={14}
        color={isSelected() && 'black'}
      />
    </TouchableOpacity>
  );
};

export default React.memo(TopicItem);

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
