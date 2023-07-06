import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import SocialAuth from '../components/SocialAuth';
import BottomTextButton from '../AuthOptionScreen/BottomTextButton';
import TextField from '../../../components/TextField';
import {EmailPurple, Eye, EyeCross, Key, User} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors';
import GradientButton from '../../../components/buttons/GradientButton';
import TextStyles from '../../../styles/TextStyles';
import AlertDialog from '../components/AlertDialog';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';

const AccountSetupScreen = ({navigation}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [alertVisiblity, setAlertVisiblity] = useState(true);

  const clickPasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const navigateTologin = () => {
    navigation.goBack();
  };
  const gotoConfirmationScreen = () => {
    navigation.navigate('TopicSelection');
  };

  const closeAlert = () => {
    setAlertVisiblity(false);
  };
  return (
    <AuthScreensSafeArea hasShadow>
      <View style={[styles.container, {paddingHorizontal: getSize(24)}]}>
        <Headings
          h1={'Sign up, Start Investing, and Begin Earning'}
          h2={'Get Started and enjoy the savings'}
        />

        <TextField
          placeholder={'Username'}
          prefixIcon={<User width={getSize(20)} height={getSize(20)} />}
        />
        <TextField
          placeholder={'Email'}
          validateInput="email"
          prefixIcon={<EmailPurple width={getSize(20)} height={getSize(20)} />}
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

        <View style={{marginTop: getSize(32), marginBottom: getSize(32)}}>
          <GradientButton
            buttonText={'Create Account'}
            onPress={gotoConfirmationScreen}
          />
        </View>
        <View style={{marginBottom: getSize(120)}}>
          <Text style={[TextStyles.style500, styles.textStyle]}>
            {'By creating an account, you agree to our '}
            <Text style={[TextStyles.style600, {color: Colors.textPurple}]}>
              {'Terms and Conditions. '}
            </Text>
            <Text>{'Please read our '}</Text>
            <Text style={[TextStyles.style600, {color: Colors.textPurple}]}>
              {'Policies.'}
            </Text>
          </Text>
        </View>
        <SocialAuth />
        <BottomTextButton
          text1={'Already have an account? '}
          text2={'Sign in'}
          onPress={navigateTologin}
        />
      </View>

      <AlertDialog isVisible={alertVisiblity} onClose={closeAlert} />
    </AuthScreensSafeArea>
  );
};

export default AccountSetupScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(24), flex: 1},
  forgetPassword: {alignSelf: 'flex-end'},
  extraTextStyle: {textDecorationLine: 'underline'},
  textStyle: {
    color: Colors.white,
    fontSize: getSize(14),
    lineHeight: getSize(24),
    textAlign: 'center',
  },
});
