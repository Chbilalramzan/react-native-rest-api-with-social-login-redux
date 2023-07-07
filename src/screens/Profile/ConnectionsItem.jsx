import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import getSize from '../../utils/helpers';
import Colors from '../../styles/Colors.jsx';
import IconButton from '../../components/buttons/IconButton';
import {Plus} from '../../styles/SvgIcons';

const ConnectionsItem = () => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, styles.overlay]}
        source={require('../../../assets/images/i4.png')}
      />
      <Image
        style={[styles.image, styles.overlay]}
        source={require('../../../assets/images/i2.png')}
      />
      <Image
        style={[styles.image, styles.overlay]}
        source={require('../../../assets/images/i3.png')}
      />
      <Image
        style={[styles.image, styles.overlay]}
        source={require('../../../assets/images/i1.png')}
      />
      <Image
        style={[styles.image, styles.overlay]}
        source={require('../../../assets/images/i4.png')}
      />
      <Image
        style={[styles.image, styles.overlay]}
        source={require('../../../assets/images/i2.png')}
      />
      <Image
        style={[styles.image, styles.overlay]}
        source={require('../../../assets/images/i3.png')}
      />
      <Image
        style={[styles.image, styles.overlay]}
        source={require('../../../assets/images/i1.png')}
      />
      <IconButton
        icon={<Plus />}
        onPress={() => {}}
        size={34}
        color={Colors.background}
        extraStyles={{
          borderWidth: 1,
          borderColor: Colors.headingText,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: getSize(14),
  },
  image: {
    resizeMode: 'contain',
    width: getSize(34),
    height: getSize(34),
    borderRadius: getSize(34),
    borderWidth: 1,
    borderColor: Colors.authButton,
  },
  overlay: {
    marginEnd: getSize(5),
  },
});

export default ConnectionsItem;
