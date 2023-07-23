import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import SocialAuth from '../components/SocialAuth';
import BottomTextButton from '../AuthOptionScreen/BottomTextButton';
import TextField from '../../../components/TextField';
import {
  Apple,
  EmailPurple,
  Eye,
  EyeCross,
  Facebook,
  Google,
  Key,
} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors.jsx';
import TextSemiBold from '../../../components/Text/TextSemiBold';
import GradientButton from '../../../components/buttons/GradientButton';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import {isEmpty} from '../../../utils/PermissionsAndValidations';
import AlertDialog from '../components/AlertDialog';
import {useDispatch, useSelector} from 'react-redux';
import {loginThunk, resetError} from '../../../redux/slices/authSlice';
import getRFSize from '../../../utils/Helper';
import OptionItem from '../AuthOptionScreen/OptionItem';
import {
  handleAppleSignIn,
  handleFacebookSignin,
  handleGoogleSignIn,
} from '../../../utils/SocialAuth';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, isFailed, error} = useSelector(state => state.auth);

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(true);
  const [passwordEmpty, setPasswordEmpty] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const clickPasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const navigateToSignup = () => {
    navigation.navigate('Register');
  };

  const closeAlert = () => {
    dispatch(resetError());
  };

  const signIn = () => {
    if (isEmpty(username)) {
      setEmailEmpty(true);
      return;
    }
    if (isEmpty(password)) {
      setPasswordEmpty(true);
      return;
    } else {
      dispatch(loginThunk({username, password}));
    }
  };

  return (
    <AuthScreensSafeArea hasShadow top>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.innerContainer}>
            <Headings
              h1={'Sign in, Start Investing, \nand Begin Earning'}
              h2={'Get Started and enjoy the savings'}
              fontSizeh1={getRFSize(28)}
              extraStylesh1={styles.extraStylesh1}
              extraStylesh2={styles.extraStylesh2}
            />

            <TextField
              placeholder={'Username'}
              isEmpty={emailEmpty}
              onChangeText={setUsername}
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
              validateInput={'password'}
              isEmpty={passwordEmpty}
              onChangeText={setPassword}
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
            <View style={styles.buttonContainer}>
              <GradientButton
                disable={loading}
                buttonText={'Sign In'}
                onPress={signIn}
              />
            </View>

            {/* <SocialAuth /> */}
            <View>
              <OptionItem
                height={getRFSize(55)}
                paddingStart={getRFSize(86)}
                title={'Continue with Google'}
                prefix={<Google />}
                onPress={handleGoogleSignIn}
              />
              <OptionItem
                height={getRFSize(55)}
                paddingStart={getRFSize(86)}
                title={'Continue with Facebook'}
                prefix={<Facebook />}
                onPress={handleFacebookSignin}
              />
              {Platform.OS === 'ios' && (
                <OptionItem
                  height={getRFSize(55)}
                  paddingStart={getRFSize(86)}
                  title={'Continue with Apple'}
                  prefix={<Apple />}
                  onPress={handleAppleSignIn}
                />
              )}
            </View>
            <BottomTextButton
              text1={'Don’t have an account? '}
              text2={'Sign Up'}
              onPress={navigateToSignup}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <AlertDialog isVisible={isFailed} onClose={closeAlert} message={error} />
    </AuthScreensSafeArea>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    paddingHorizontal: getSize(24),
    paddingBottom: getSize(120),
    flexGrow: 1,
    // justifyContent: 'center',
  },
  forgetPassword: {
    alignSelf: 'flex-end',
  },
  extraTextStyle: {
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginTop: getSize(45),
    marginBottom: getSize(80),
  },
  extraStylesh1: {
    lineHeight: getRFSize(36.4),
    letterSpacing: -0.5,
  },
  extraStylesh2: {},
});
