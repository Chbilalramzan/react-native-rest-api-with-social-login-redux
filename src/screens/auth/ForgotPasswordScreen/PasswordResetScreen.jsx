import {Animated, StyleSheet, View} from 'react-native';
import React from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import TextField from '../../../components/TextField';
import GradientButton from '../../../components/buttons/GradientButton';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import ConfirmationMessage from './ConfirmationMessage';
import {Eye, EyeCross, Key} from '../../../styles/SvgIcons';
import * as Navigation from '../../../stacks/Navigation';

const PasswordResetScreen = ({navigation}) => {
  const [confirmationMessage, setConfirmationMessage] = React.useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = React.useState(true);
  const [isConfirmNewPasswordVisible, setIsConfirmNewPasswordVisible] =
    React.useState(true);

  const clickNewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };
  const clickConfirmPasswordVisibility = () => {
    setIsConfirmNewPasswordVisible(!isConfirmNewPasswordVisible);
  };

  const opacityValue = React.useRef(new Animated.Value(1)).current;

  const onPressSendOTP = () => {
    if (confirmationMessage) {
      Navigation.reset('Login', 2, {});
    } else {
      Animated.timing(opacityValue, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setConfirmationMessage(true);
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  return (
    <AuthScreensSafeArea hasShadow top>
      <Animated.View
        style={[
          styles.container,
          {paddingHorizontal: getSize(24), opacity: opacityValue},
        ]}>
        {confirmationMessage ? (
          <ConfirmationMessage
            h1={'Your password has been changed.'}
            h2={
              'Your password has been changed successfully, you can use new password to sign in.'
            }
            buttonText={'Take me to Sign in'}
            onPress={onPressSendOTP}
          />
        ) : (
          <View>
            <Headings
              h1={'Create your New password.'}
              h2={'Get Started and enter your password.'}
            />

            <TextField
              placeholder={'New Password'}
              prefixIcon={<Key width={getSize(20)} height={getSize(20)} />}
              suffixIcon={
                isNewPasswordVisible ? (
                  <Eye width={getSize(20)} height={getSize(20)} />
                ) : (
                  <EyeCross width={getSize(20)} height={getSize(20)} />
                )
              }
              isSecure={isNewPasswordVisible}
              onSuffixPress={clickNewPasswordVisibility}
            />
            <TextField
              placeholder={'Confirm New Password'}
              prefixIcon={<Key width={getSize(20)} height={getSize(20)} />}
              suffixIcon={
                isConfirmNewPasswordVisible ? (
                  <Eye width={getSize(20)} height={getSize(20)} />
                ) : (
                  <EyeCross width={getSize(20)} height={getSize(20)} />
                )
              }
              isSecure={isConfirmNewPasswordVisible}
              onSuffixPress={clickConfirmPasswordVisibility}
            />

            <View
              style={{
                marginTop: getSize(11),
                marginBottom: getSize(130),
                marginHorizontal: getSize(20),
              }}>
              <GradientButton
                buttonText={'Create Password'}
                onPress={onPressSendOTP}
              />
            </View>
          </View>
        )}
      </Animated.View>
    </AuthScreensSafeArea>
  );
};

export default PasswordResetScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(24), flex: 1},
  forgetPassword: {alignSelf: 'flex-end'},
  extraTextStyle: {textDecorationLine: 'underline'},
});
