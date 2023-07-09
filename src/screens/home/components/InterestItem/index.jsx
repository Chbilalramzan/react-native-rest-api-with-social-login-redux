import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import getSize from '../../../../utils/helpers';
import Colors from '../../../../styles/Colors.jsx';
import TextMedium from '../../../../components/Text/TextMedium';
import TextSemiBold from '../../../../components/Text/TextSemiBold';

const InterestItem = ({item, onPress, onItemSelect, index, ...props}) => {
  const {id, name, isSelected} = item;
  const onPressItem = () => {
    onItemSelect(item);
  };
  const color = isSelected ? Colors.purple1 : 'black';
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      style={[
        styles.itemContainer,
        {
          backgroundColor: color,
        },
      ]}
      onPress={onPressItem}>
      {isSelected ? (
        <TextSemiBold text={name} fontSize={14} color={'white'} />
      ) : (
        <TextMedium text={name} fontSize={14} color={'white'} />
      )}
    </TouchableOpacity>
  );
};

export default React.memo(InterestItem);

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: getSize(8),
    paddingHorizontal: getSize(16),
    height: getSize(35),
    marginTop: getSize(22),
    marginBottom: getSize(34),
    justifyContent: 'center',
    borderRadius: getSize(12),
    marginEnd: 8,
  },
});
