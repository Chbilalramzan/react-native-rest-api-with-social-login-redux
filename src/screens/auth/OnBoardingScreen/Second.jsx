import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors.jsx';
import getRFSize from '../../../utils/Helper';

const Second = () => {
  return (
    <View>
      <Headings
        h1={'Mentors, Advisors, and Investors: Guiding You on Your Journey'}
        fontSizeh1={getRFSize(24)}
        h2={
          'Discover the power of financial community. Join \nB.UP, connect, learn, and rise through the ranks'
        }
        extraStyles={styles.extraStyles}
        extraStylesh1={[
          styles.extraStylesh1h2,
          {lineHeight: getRFSize(31.2), letterSpacing: -0.5},
        ]}
        extraStylesh2={[
          styles.extraStylesh1h2,
          {marginHorizontal: getRFSize(16)},
        ]}
      />

      <Image
        source={require('../../../../assets/images/onboard2.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  noteIcon: {
    height: getSize(34),
    width: getSize(34),
    borderRadius: getSize(34),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  extraStyles: {
    marginTop: getSize(100),
    marginHorizontal: 16,
  },
  extraStylesh1h2: {
    textAlign: 'center',
  },
  pos: {
    marginHorizontal: 58,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -40,
  },
  card: {alignItems: 'center', justifyContent: 'center'},
  image: {
    width: '100%',
    height: getRFSize(568),
    resizeMode: 'cover',
    borderRadius: getSize(20),
  },
});
