import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors.jsx';
import TextMedium from '../../../components/Text/TextMedium';
import getRFSize from '../../../utils/Helper';

const TopicItem = ({
  item,
  onPress,
  selectedInterests,
  onItemSelect,
  index,
  prefix,
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
      <View
        style={{
          marginEnd: getSize(11),
        }}>
        {item.icon}
      </View>

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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: getSize(16),
    paddingHorizontal: getSize(24),
    width: '100%',
    height: getSize(60),
    marginVertical: getSize(8),
    justifyContent: 'flex-start',
    borderRadius: getSize(15),
  },
});
