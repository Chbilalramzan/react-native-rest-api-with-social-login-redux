import {Animated, StyleSheet, View} from 'react-native';
import React from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import TextField from '../../../components/TextField';
import GradientButton from '../../../components/buttons/GradientButton';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import ConfirmationMessage from './ConfirmationMessage';
import {postOTP, postRequest} from '../../../services/Requests';
import {EndPoint} from '../../../constants/APIEndpoints';
import {isEmpty} from '../../../utils/PermissionsAndValidations';
import OtpField from '../../../components/TextField/OtpField';
import AlertDialog from '../components/AlertDialog';

const OtpVerificationScreen = ({navigation}) => {
  const [confirmationMessage, setConfirmationMessage] = React.useState(false);
  const opacityValue = React.useRef(new Animated.Value(1)).current;
  const [loading, setLoading] = React.useState(false);
  const [otp, setOtp] = React.useState('');
  const [alert, setAlert] = React.useState(false);

  const onPressSendOTP = async () => {
    if (confirmationMessage) {
      navigation.navigate('PasswordReset', {otp});
      setConfirmationMessage(!confirmationMessage);
    } else {
      if (isEmpty(otp)) {
        return;
      } else {
        setLoading(true);
        let response = await postOTP(EndPoint.otp_verify, {otp});
        if (response.success) {
          setLoading(false);
          updateView();
        } else {
          setLoading(false);
          setAlert(true);
        }
      }
    }
  };
  const closeAlert = () => {
    setAlert(!alert);
  };
  const updateView = () => {
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
  };

  return confirmationMessage ? (
    <ConfirmationMessage
      h1={'OTP verification successful'}
      h2={
        'Your verification has been done successfully, please proceed and change your password.'
      }
      buttonText={'Next'}
      onPress={onPressSendOTP}
    />
  ) : (
    <AuthScreensSafeArea hasShadow top>
      <Animated.View
        style={[
          styles.container,
          {paddingHorizontal: getSize(24), opacity: opacityValue},
        ]}>
        <View>
          <Headings
            h1={'Enter your OTP from your email.'}
            h2={'Enter your 6 digit code from your email.'}
          />

          <OtpField
            placeholder={'OTP'}
            validateInput="otp"
            onChangeText={setOtp}
          />

          <View
            style={{
              marginTop: getSize(11),
              marginBottom: getSize(130),
              marginHorizontal: getSize(20),
            }}>
            <GradientButton
              disable={loading}
              buttonText={'Verify'}
              onPress={onPressSendOTP}
            />
          </View>
        </View>
      </Animated.View>
      <AlertDialog
        message={'Something Went Wrong. Please send OTP again.'}
        isVisible={alert}
        onClose={closeAlert}
      />
    </AuthScreensSafeArea>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(24), flex: 1},
  forgetPassword: {alignSelf: 'flex-end'},
  extraTextStyle: {textDecorationLine: 'underline'},
});
