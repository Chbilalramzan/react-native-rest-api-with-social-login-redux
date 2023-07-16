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

const AuthOptionScreen = ({navigation}) => {
  React.useEffect(() => {
    initializeSocialAuthHelpers();
  }, []);

  const navigateToEmailLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <AuthScreensSafeArea hasShadow top>
      <View style={{paddingHorizontal: getSize(29)}}>
        <Headings
          h1={'Sign in, Start Investing, and Begin Earning'}
          h2={'Select how you want to procees'}
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
  extraStylesh1: {lineHeight: 41.6},
});
