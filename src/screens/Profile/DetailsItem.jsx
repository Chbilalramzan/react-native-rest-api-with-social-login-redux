import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from '../../components/buttons/IconButton';
import TextSemiBold from '../../components/Text/TextSemiBold';
import TextRegular from '../../components/Text/TextRegular';
import Colors from '../../styles/Colors';
import getSize from '../../utils/helpers';

const DetailsItem = ({title, description, icon}) => {
  return (
    <View style={styles.activity2}>
      <IconButton
        disable={true}
        icon={icon}
        onPress={() => {}}
        size={40}
        color={Colors.background}
      />
      <View style={{marginStart: getSize(12)}}>
        <TextSemiBold
          fontSize={14}
          text={title}
          extraStyles={styles.extraStyles}
        />
        <TextRegular
          fontSize={13}
          text={description}
          color={Colors.heading2Text}
          extraStyles={styles.extraStyles}
        />
      </View>
    </View>
  );
};

export default DetailsItem;

const styles = StyleSheet.create({
  activity2: {
    backgroundColor: Colors.authButton,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: getSize(15),
    paddingStart: getSize(13),
    paddingEnd: getSize(44),
    paddingTop: getSize(13),
    paddingBottom: getSize(11),
    marginVertical: getSize(7),
  },
  extraStyles: {
    lineHeight: getSize(20),
  },
});
