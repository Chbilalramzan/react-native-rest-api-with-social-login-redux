import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors';
import {Google, Facebook, Apple} from '../../../styles/SvgIcons';

const SocialAuth = ({onPressGoogle, onPressFacebook, onPressApple}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPressGoogle}
        style={[styles.button]}>
        <Google width={getSize(48)} height={getSize(48)} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPressGoogle}
        style={[styles.button]}>
        <Facebook width={getSize(48)} height={getSize(48)} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPressGoogle}
        style={[styles.button]}>
        <Apple width={getSize(48)} height={getSize(48)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: getSize(51),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    height: getSize(80),
    width: getSize(80),
    borderRadius: getSize(80),
    paddingVertical: getSize(14),
    paddingHorizontal: getSize(21),
    marginVertical: getSize(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.authButton,
  },
});

export default SocialAuth;
