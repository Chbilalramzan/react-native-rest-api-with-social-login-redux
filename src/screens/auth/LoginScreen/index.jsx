import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import SocialAuth from '../components/SocialAuth';
import BottomTextButton from '../AuthOptionScreen/BottomTextButton';
import TextField from '../../../components/TextField';
import {EmailPurple, Eye, EyeCross, Key} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors';
import TextSemiBold from '../../../components/Text/TextSemiBold';
import GradientButton from '../../../components/buttons/GradientButton';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';

const LoginScreen = ({navigation}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const clickPasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const navigateToSignup = () => {
    navigation.navigate('Register');
  };
  const gotoConfirmationScreen = () => {
    navigation.navigate('Confirmation');
  };

  return (
    <AuthScreensSafeArea style={styles.container}>
      <Headings
        h1={'Sign in, Start Investing, and Begin Earning'}
        h2={'Get Started and enjoy the savings'}
      />

      <TextField
        placeholder={'Email'}
        validateInput="email"
        prefixIcon={
          <EmailPurple
            color={Colors.iconPurple}
            width={getSize(20)}
            height={getSize(20)}
          />
        }
      />
      <TextField
        placeholder={'Password'}
        prefixIcon={<Key width={getSize(20)} height={getSize(20)} />}
        suffixIcon={
          isPasswordVisible ? (
            <Eye width={getSize(20)} height={getSize(20)} />
          ) : (
            <EyeCross width={getSize(20)} height={getSize(20)} />
          )
        }
        isSecure={isPasswordVisible}
        onSuffixPress={clickPasswordVisibility}
      />
      <TouchableOpacity
        style={styles.forgetPassword}
        onPress={navigateToForgotPassword}>
        <TextSemiBold
          text={'Forget Password?'}
          fontSize={14}
          extraStyles={styles.extraTextStyle}
        />
      </TouchableOpacity>
      <View style={{marginTop: getSize(45), marginBottom: getSize(130)}}>
        <GradientButton
          buttonText={'Sign In'}
          onPress={gotoConfirmationScreen}
        />
      </View>

      <SocialAuth />
      <BottomTextButton
        text1={'Don’t have an account? '}
        text2={'Sign Up'}
        onPress={navigateToSignup}
      />
    </AuthScreensSafeArea>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(24), flex: 1},
  forgetPassword: {alignSelf: 'flex-end'},
  extraTextStyle: {textDecorationLine: 'underline'},
});
