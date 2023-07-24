import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
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
  User,
} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors.jsx';
import GradientButton from '../../../components/buttons/GradientButton';
import TextStyles from '../../../styles/TextStyles';
import AlertDialog from '../components/AlertDialog';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import {useDispatch, useSelector} from 'react-redux';
import {isEmpty} from '../../../utils/PermissionsAndValidations';
import {registerThunk, resetError} from '../../../redux/slices/authSlice';
import getRFSize from '../../../utils/Helper';
import OptionItem from '../AuthOptionScreen/OptionItem';
import {
  handleAppleSignIn,
  handleFacebookSignin,
  handleGoogleSignIn,
} from '../../../utils/SocialAuth';

const AccountSetupScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, isFailed, error} = useSelector(state => state.auth);

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');

  const clickPasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const navigateTologin = () => {
    navigation.goBack();
  };

  const closeAlert = () => {
    dispatch(resetError());
  };

  const register = () => {
    if (isEmpty(username)) {
      return;
    }
    if (isEmpty(email)) {
      return;
    }
    if (isEmpty(password1)) {
      return;
    } else {
      dispatch(registerThunk({username, email, password1}));
    }
  };

  return (
    <AuthScreensSafeArea hasShadow>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.innerContainer}>
            <Headings
              h1={'Create account, Start \nInvesting, and Begin Earning'}
              h2={'Get Started and enjoy the savings'}
              fontSizeh1={28}
              extraStylesh1={styles.extraStylesh1}
              extraStylesh2={styles.extraStylesh2}
            />

            <TextField
              placeholder={'Username'}
              onChangeText={setUsername}
              prefixIcon={<User width={getSize(20)} height={getSize(20)} />}
            />
            <TextField
              placeholder={'Email'}
              validateInput="email"
              onChangeText={setEmail}
              prefixIcon={
                <EmailPurple width={getSize(20)} height={getSize(20)} />
              }
            />
            <TextField
              placeholder={'Password'}
              validateInput={'password'}
              onChangeText={setPassword1}
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

            <View style={styles.buttonContainer}>
              <GradientButton
                disable={loading}
                buttonText={'Create Account'}
                onPress={register}
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>
                By creating an account, you agree to our{' '}
                <Text style={[TextStyles.style600, {color: Colors.textPurple}]}>
                  Terms and Conditions.{' '}
                </Text>
                Please read our{' '}
                <Text style={[TextStyles.style600, {color: Colors.textPurple}]}>
                  Policies.
                </Text>
              </Text>
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
              text1={'Already have an account? '}
              text2={'Sign in'}
              onPress={navigateTologin}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <AlertDialog isVisible={isFailed} onClose={closeAlert} message={error} />
    </AuthScreensSafeArea>
  );
};

export default AccountSetupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  innerContainer: {
    paddingHorizontal: getSize(24),
    paddingBottom: getSize(120),
    flexGrow: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: getSize(32),
    marginBottom: getSize(32),
  },
  textContainer: {
    marginBottom: 40,
  },
  textStyle: {
    color: Colors.white,
    fontSize: getSize(14),
    lineHeight: getSize(24),
    textAlign: 'center',
  },
  extraStylesh1: {
    lineHeight: getRFSize(36.4),
    letterSpacing: -0.5,
  },
  extraStylesh2: {},
});
