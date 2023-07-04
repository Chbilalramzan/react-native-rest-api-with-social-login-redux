import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';

const Second = () => {
  return (
    <View>
      <Headings
        h1={'Level Up, Mentor: Stand Out, Make a Difference'}
        fontSizeh1={26}
        h2={
          'Get ready to elevate your finances! B.UP connects you with mentors and rewards your progress with rankings and titles'
        }
        extraStyles={styles.extraStyles}
        extraStylesh1={styles.extraStylesh1h2}
        extraStylesh2={styles.extraStylesh1h2}
      />
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  extraStylesh1h2: {
    textAlign: 'center',
  },
  extraStyles: {marginHorizontal: getSize(16)},
  image: {width: getSize(305), height: getSize(387), marginTop: getSize(50)},
});
