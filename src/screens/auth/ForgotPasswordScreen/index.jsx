import {StyleSheet, View} from 'react-native';
import React from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import TextField from '../../../components/TextField';
import {EmailPurple} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors';
import GradientButton from '../../../components/buttons/GradientButton';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';

const ForgotPasswordScreen = () => {
  return (
    <AuthScreensSafeArea style={styles.container}>
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
        <GradientButton buttonText={'Send Email'} />
      </View>
    </AuthScreensSafeArea>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(24), flex: 1},
  forgetPassword: {alignSelf: 'flex-end'},
  extraTextStyle: {textDecorationLine: 'underline'},
});
