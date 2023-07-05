import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Headings from '../components/Headings';
import MessageItem from './MessageItem';
import getSize from '../../../utils/helpers';
import {Note} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors';

const Second = () => {
  const data = {
    icon: (
      <View style={styles.noteIcon}>
        <Note width={getSize(20)} height={getSize(20)} />
      </View>
    ),
    title: 'Learn how to Investment with us',
    message: 'Be the one and learn the tricks for finance.',
  };
  return (
    <View>
      <Headings
        h1={'Mentors, Advisors, and Investors: Guiding You on Your Journey'}
        fontSizeh1={24}
        h2={
          'Discover the power of financial community. Join B.UP, connect, learn, and rise through the ranks'
        }
        extraStyles={styles.extraStyles}
        extraStylesh1={styles.extraStylesh1h2}
        extraStylesh2={styles.extraStylesh1h2}
      />

      <Image
        source={require('../../../../assets/images/onboard2.png')}
        style={styles.image}
        resizeMode="contain"
      />
      {/*
      <View style={styles.card}>

        <View style={styles.pos}>
          <MessageItem
            data={data}
            extraStyle={{backgroundColor: Colors.gray1}}
            titleSize={14}
            messageSize={10}
          />
        </View>
      </View> */}
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
