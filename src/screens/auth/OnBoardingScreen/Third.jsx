import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import getRFSize from '../../../utils/Helper';

const Second = () => {
  return (
    <View>
      <Headings
        marginTop={getRFSize(100)}
        h1={'Level Up, Mentor: Stand Out, Make a Difference'}
        fontSizeh1={24}
        h2={
          'Get ready to elevate your finances! B.UP connects you with mentors and rewards your progress with rankings and titles'
        }
        extraStyles={styles.extraStyles}
        extraStylesh1={[
          styles.extraStylesh1h2,
          {
            lineHeight: getRFSize(39),
            letterSpacing: -0.5,
            marginHorizontal: 32,
          },
        ]}
        extraStylesh2={[
          styles.extraStylesh1h2,
          {marginHorizontal: getRFSize(28)},
        ]}
      />

      <Image
        source={require('../../../../assets/images/onboard3.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  extraStylesh1h2: {
    textAlign: 'center',
  },
  extraStyles: {
    marginTop: getSize(100),
  },
  image: {
    width: '100%',
    height: getRFSize(480),
    resizeMode: 'cover',
    // borderRadius: getSize(20),
  },
});
