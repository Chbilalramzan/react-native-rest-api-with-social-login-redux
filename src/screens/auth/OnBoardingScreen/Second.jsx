import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors.jsx';

const Second = () => {
  return (
    <View>
      <Headings
        h1={'Mentors, Advisors, and Investors: Guiding You on Your Journey'}
        fontSizeh1={22}
        h2={
          'Discover the power of financial community. Join \nB.UP, connect, learn, and rise through the ranks'
        }
        extraStyles={styles.extraStyles}
        extraStylesh1={[styles.extraStylesh1h2, {lineHeight: getSize(31.6)}]}
        extraStylesh2={styles.extraStylesh1h2}
      />

      <Image
        source={require('../../../../assets/images/onboard2.png')}
        style={styles.image}
        resizeMode="contain"
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
    height: getSize(500),
    resizeMode: 'contain',
    borderRadius: getSize(20),
  },
});
