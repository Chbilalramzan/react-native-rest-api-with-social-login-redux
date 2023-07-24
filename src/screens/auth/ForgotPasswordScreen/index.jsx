import {Animated, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import TextField from '../../../components/TextField';
import {EmailPurple} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors.jsx';
import GradientButton from '../../../components/buttons/GradientButton';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import ConfirmationMessage from './ConfirmationMessage';
import {isEmpty} from '../../../utils/PermissionsAndValidations';
import {postRequest} from '../../../services/Requests';
import {EndPoint} from '../../../constants/APIEndpoints';
import AlertDialog from '../components/AlertDialog';
import getRFSize from '../../../utils/Helper';

const ForgotPasswordScreen = ({navigation}) => {
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  const opacityValue = useRef(new Animated.Value(1)).current;
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState(false);

  const onPressSendOtpToEmail = async () => {
    if (confirmationMessage) {
      navigation.navigate('OtpVerify');
      setConfirmationMessage(!confirmationMessage);
    } else {
      if (isEmpty(email)) {
        return;
      } else {
        setLoading(true);
        let response = await postRequest(EndPoint.password_reset, {email});
        if (response.success) {
          setLoading(false);
          updateView();
        } else {
          setAlert(true);
          setLoading(false);
        }
      }
    }
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

  const closeAlert = () => {
    setAlert(!alert);
  };

  return confirmationMessage ? (
    <ConfirmationMessage
      h1={'Reset password OTP \nsend successfully.'}
      h2={
        'We have successfully forwarded you the 4 digit reset password OTP to your email.'
      }
      Email={'email'}
      buttonText={'Next'}
      onPress={onPressSendOtpToEmail}
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
            marginTop={getRFSize(195)}
            h1={"Forgotten your password? \nWe're here to help!"}
            h2={'Enter your Email to get the password reset link'}
            fontSizeh1={30}
            extraStylesh1={styles.extraStylesh1}
            extraStylesh2={styles.extraStylesh2}
          />
          <View style={{marginTop: 10, marginBottom: 8}}>
            <TextField
              placeholder={'Email'}
              validateInput="email"
              onChangeText={setEmail}
              prefixIcon={
                <EmailPurple
                  color={Colors.iconPurple}
                  width={getSize(20)}
                  height={getSize(20)}
                />
              }
            />
          </View>
          <View
            style={{
              marginBottom: getSize(130),
              marginHorizontal: getSize(20),
            }}>
            <GradientButton
              disable={loading}
              buttonText={'Send Email'}
              onPress={onPressSendOtpToEmail}
            />
          </View>
        </View>
      </Animated.View>
      <AlertDialog
        message={'Email Does not Exist. Please try different email.'}
        isVisible={alert}
        onClose={closeAlert}
      />
    </AuthScreensSafeArea>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(24), flex: 1},
  forgetPassword: {alignSelf: 'flex-end'},
  extraTextStyle: {textDecorationLine: 'underline'},
  extraStylesh1: {
    lineHeight: getRFSize(42),
    letterSpacing: -0.5,
  },
  extraStylesh2: {},
});
