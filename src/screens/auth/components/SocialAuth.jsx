import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors.jsx';
import {Google, Facebook, Apple} from '../../../styles/SvgIcons';
import {
  handleAppleSignIn,
  handleFacebookSignin,
  handleGoogleSignIn,
} from '../../../utils/SocialAuth';

const SocialAuth = ({...props}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={handleGoogleSignIn}
        style={[styles.button]}>
        <Google width={getSize(48)} height={getSize(48)} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={handleFacebookSignin}
        style={[styles.button]}>
        <Facebook width={getSize(48)} height={getSize(48)} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={handleAppleSignIn}
        style={[styles.button]}>
        <Apple width={getSize(48)} height={getSize(48)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: getSize(48),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
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
