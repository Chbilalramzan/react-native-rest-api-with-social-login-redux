import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import Headings from '../components/Headings';
import Colors from '../../../styles/Colors.jsx';

const First = () => {
  return (
    <View>
      <Headings
        h1={'Save money by sharing, connecting & groups information.'}
        fontSizeh1={24}
        h2={
          'Welcome to B.UP! Start your financial journey and connect with mentors to achieve your goals.'
        }
        extraStyles={styles.extraStyles}
        extraStylesh1={styles.extraStylesh1h2}
        extraStylesh2={styles.extraStylesh1h2}
      />
      <Image
        source={require('../../../../assets/images/onboard1.png')}
        style={styles.image}
      />
    </View>
  );
};

export default First;
const styles = StyleSheet.create({
  extraStyles: {
    marginTop: getSize(100),
    marginHorizontal: 16,
  },
  image: {
    height: getSize(500),
    width: '100%',
    resizeMode: 'contain',
    borderRadius: getSize(20),
  },
  extraStylesh1h2: {
    textAlign: 'center',
  },
  card: {
    marginTop: getSize(86),
    marginHorizontal: getSize(24),
    backgroundColor: Colors.gray1,
    borderRadius: getSize(25),
    paddingHorizontal: getSize(16),
    paddingVertical: getSize(16),
  },
});
