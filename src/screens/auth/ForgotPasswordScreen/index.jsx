import {Animated, StyleSheet, View} from 'react-native';
import React from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import TextField from '../../../components/TextField';
import {EmailPurple} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors.jsx';
import GradientButton from '../../../components/buttons/GradientButton';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import ConfirmationMessage from './ConfirmationMessage';

const ForgotPasswordScreen = ({navigation}) => {
  const [confirmationMessage, setConfirmationMessage] = React.useState(false);
  const opacityValue = React.useRef(new Animated.Value(1)).current;

  const onPressSendOTP = () => {
    // setConfirmationMessage(true);
    if (confirmationMessage) {
      navigation.navigate('OtpVerify');
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
            h1={'Reset password OTP send successfully.'}
            h2={
              'We have successfully forwarded you the 4 digit reset password OTP to your email.'
            }
            Email={'email'}
            buttonText={'Next'}
            onPress={onPressSendOTP}
          />
        ) : (
          <View>
            <Headings
              h1={"Forgotten your password? We're here to help!"}
              h2={'Enter your Email to get the password reset link'}
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

            <View
              style={{
                marginTop: getSize(11),
                marginBottom: getSize(130),
                marginHorizontal: getSize(20),
              }}>
              <GradientButton
                buttonText={'Send Email'}
                onPress={onPressSendOTP}
              />
            </View>
          </View>
        )}
      </Animated.View>
    </AuthScreensSafeArea>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(24), flex: 1},
  forgetPassword: {alignSelf: 'flex-end'},
  extraTextStyle: {textDecorationLine: 'underline'},
});
