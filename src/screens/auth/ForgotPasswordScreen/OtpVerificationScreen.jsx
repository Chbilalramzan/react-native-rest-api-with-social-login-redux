import {Animated, StyleSheet, View} from 'react-native';
import React from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import TextField from '../../../components/TextField';
import {EmailPurple} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors';
import GradientButton from '../../../components/buttons/GradientButton';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import ConfirmationMessage from './ConfirmationMessage';

const OtpVerificationScreen = ({navigation}) => {
  const [confirmationMessage, setConfirmationMessage] = React.useState(false);
  const opacityValue = React.useRef(new Animated.Value(1)).current;

  const onPressSendOTP = () => {
    // setConfirmationMessage(true);
    if (confirmationMessage) {
      navigation.navigate('PasswordReset');
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
            h1={'OTP verification successful'}
            h2={
              'Your verification has been done successfully, please proceed and change your password.'
            }
            buttonText={'Next'}
            onPress={onPressSendOTP}
          />
        ) : (
          <View>
            <Headings
              h1={'Enter your OTP from your email.'}
              h2={'Enter your 4 digit code from your email.'}
            />

            <TextField placeholder={'OTP'} validateInput="otp" />

            <View
              style={{
                marginTop: getSize(11),
                marginBottom: getSize(130),
                marginHorizontal: getSize(20),
              }}>
              <GradientButton buttonText={'Verify'} onPress={onPressSendOTP} />
            </View>
          </View>
        )}
      </Animated.View>
    </AuthScreensSafeArea>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(24), flex: 1},
  forgetPassword: {alignSelf: 'flex-end'},
  extraTextStyle: {textDecorationLine: 'underline'},
});
