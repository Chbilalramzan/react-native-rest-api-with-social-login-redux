import {StyleSheet, View} from 'react-native';
import React from 'react';
import OptionItem from './OptionItem';
import {Email, Google, Facebook, Apple} from '../../../styles/SvgIcons';
import getSize from '../../../utils/helpers';
import Headings from '../components/Headings';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';

const AuthOptionScreen = ({navigation}) => {
  const navigateToEmailLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <AuthScreensSafeArea hasShadow top>
      <View style={{paddingHorizontal: getSize(30)}}>
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
          onPress={() => {}}
        />
        <OptionItem
          title={'Continue with Facebook'}
          prefix={<Facebook />}
          onPress={() => {}}
        />
        <OptionItem
          title={'Continue with Apple'}
          prefix={<Apple />}
          onPress={() => {}}
        />
      </View>
    </AuthScreensSafeArea>
  );
};

export default AuthOptionScreen;
