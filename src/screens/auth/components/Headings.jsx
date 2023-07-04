import {View, StyleSheet} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import TextBold from '../../../components/Text/TextBold';
import Colors from '../../../styles/Colors';
import TextMedium from '../../../components/Text/TextMedium';

const Headings = ({h1, h2, ...props}) => {
  return (
    <View style={styles.container}>
      <TextBold
        text={h1}
        color={Colors.headingText}
        fontSize={32}
        extraStyles={{lineHeight: getSize(41.6)}}
      />
      <TextMedium
        text={h2}
        color={Colors.heading2Text}
        fontSize={15}
        extraStyles={{
          marginTop: getSize(13),
          lineHeight: getSize(25.5),
        }}
      />
    </View>
  );
};

export default Headings;

const styles = StyleSheet.create({
  container: {marginTop: getSize(116), marginBottom: getSize(11)},
});
