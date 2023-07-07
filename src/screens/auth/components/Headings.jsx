import {View, StyleSheet} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import TextBold from '../../../components/Text/TextBold';
import Colors from '../../../styles/Colors.jsx';
import TextMedium from '../../../components/Text/TextMedium';

const Headings = ({
  h1,
  h2,
  extraStyles,
  extraStylesh1,
  extraStylesh2,
  fontSizeh1,
  fontSizeh2,
  ...props
}) => {
  return (
    <View style={[styles.container, extraStyles]}>
      <TextBold
        text={h1}
        color={Colors.headingText}
        fontSize={fontSizeh1 ? fontSizeh1 : 32}
        extraStyles={[extraStylesh1, {lineHeight: getSize(41.6)}]}
      />
      <TextMedium
        text={h2}
        color={Colors.heading2Text}
        fontSize={fontSizeh2 ? fontSizeh2 : 15}
        extraStyles={[
          extraStylesh2,
          {
            marginTop: getSize(13),
            lineHeight: getSize(25.5),
          },
        ]}
      />
    </View>
  );
};

export default Headings;

const styles = StyleSheet.create({
  container: {marginTop: getSize(100)},
});
