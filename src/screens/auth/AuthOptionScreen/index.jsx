import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import OptionItem from './OptionItem';
import {Email, Google, Facebook, Apple} from '../../../styles/SvgIcons';
import getSize from '../../../utils/helpers';
import Headings from '../components/Headings';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import {
  handleAppleSignIn,
  handleFacebookSignin,
  handleGoogleSignIn,
  initializeSocialAuthHelpers,
} from '../../../utils/SocialAuth';
import getRFSize from '../../../utils/Helper';

const AuthOptionScreen = ({navigation}) => {
  React.useEffect(() => {
    initializeSocialAuthHelpers();
  }, []);

  const navigateToEmailLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <AuthScreensSafeArea hasShadow top>
      <View style={{paddingHorizontal: getSize(24)}}>
        <Headings
          h1={'Sign in, Start Investing, \nand Begin Earning'}
          h2={'Select how you want to procees'}
          fontSizeh1={getRFSize(28)}
          extraStylesh1={styles.extraStylesh1}
          extraStylesh2={styles.extraStylesh2}
        />
        <OptionItem
          title={'Continue with Email'}
          prefix={<Email />}
          onPress={navigateToEmailLogin}
        />
        <OptionItem
          title={'Continue with Google'}
          prefix={<Google />}
          onPress={handleGoogleSignIn}
        />
        <OptionItem
          title={'Continue with Facebook'}
          prefix={<Facebook />}
          onPress={handleFacebookSignin}
        />
        {Platform.OS === 'ios' && (
          <OptionItem
            title={'Continue with Apple'}
            prefix={<Apple />}
            onPress={handleAppleSignIn}
          />
        )}
      </View>
    </AuthScreensSafeArea>
  );
};

export default AuthOptionScreen;

const styles = StyleSheet.create({
  extraStylesh1: {
    lineHeight: getRFSize(36.4),
    letterSpacing: -0.5,
  },
  extraStylesh2: {},
});
