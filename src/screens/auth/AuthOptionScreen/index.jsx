import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import OptionItem from './OptionItem';
import {Email, Google, Facebook, Apple} from '../../../styles/SvgIcons';
import getSize from '../../../utils/helpers';
import Headings from '../components/Headings';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {Settings} from 'react-native-fbsdk-next';

// Setting the facebook app id using setAppID
// Remember to set CFBundleURLSchemes in Info.plist on iOS if needed
Settings.setAppID('227203443502512');
Settings.initializeSDK();
// Initialize Google Sign-In
GoogleSignin.configure({
  scopes: ['email'],
  webClientId: 'YOUR_WEB_CLIENT_ID',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

const AuthOptionScreen = ({navigation}) => {
  const navigateToEmailLogin = () => {
    navigation.navigate('Login');
  };

  // Function to handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // Obtain the user's information
      const {idToken, user} = userInfo;
      const {email, givenName, familyName} = user;

      console.log(idToken, email, givenName, familyName);

      // Make a POST request to your REST login API and include the user information
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User canceled the sign-in process
        console.log('Google Sign-In canceled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Another sign-in process is already in progress
        console.log('Another sign-in is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play Services is not available on the device
        console.log('Play Services not available');
      } else {
        // Other error occurred during sign-in
        console.log('Google Sign-In error:', error.message);
      }
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        console.log('Facebook login cancelled');
      } else {
        const accessToken = await AccessToken.getCurrentAccessToken();
        if (accessToken) {
          console.log('Facebook access token:', accessToken.accessToken);
          // Use the obtained access token to make API calls or authenticate the user on your server
        }
      }
    } catch (error) {
      console.log('Facebook login error:', error);
    }
  };

  const handleAppleSignIn = async () => {
    if (appleAuth.isSupported) {
      // Apple Sign-In is supported, continue with the authentication flow
      // Call the necessary Apple Sign-In methods here
      try {
        // Start the Apple Sign-In process
        const appleAuthRequestResponse = await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
        const credentialState = await appleAuth.getCredentialStateForUser(
          appleAuthRequestResponse.user,
        );

        // use credentialState response to ensure the user is authenticated
        if (credentialState === appleAuth.State.AUTHORIZED) {
          // user is authenticated
          // Obtain the user's information
          const {identityToken, email, fullName} = appleAuthRequestResponse;

          // Make a POST request to your REST login API and include the user information

          console.log(
            identityToken,
            email,
            fullName.givenName,
            fullName.familyName,
          );
        }
      } catch (error) {
        // Handle the error
        console.log('Apple Sign-In error:', error.message);
      }
    } else {
      // Apple Sign-In is not supported on this device
      console.log('Apple Sign-In is not supported on the device');
    }
  };

  return (
    <AuthScreensSafeArea hasShadow top>
      <View style={{paddingHorizontal: getSize(30)}}>
        <Headings
          h1={'Sign in, Start Investing, and Begin Earning'}
          h2={'Select how you want to procees'}
        />
        <OptionItem
          title={'Continue with Email'}
          prefix={<Email />}
          onPress={navigateToEmailLogin}
        />
        <OptionItem
          title={'Continue with Google'}
          prefix={<Google />}
          onPress={handleGoogleSignIn}
        />
        <OptionItem
          title={'Continue with Facebook'}
          prefix={<Facebook />}
          onPress={handleFacebookLogin}
        />
        {Platform.OS === 'ios' && (
          <OptionItem
            title={'Continue with Apple'}
            prefix={<Apple />}
            onPress={handleAppleSignIn}
          />
        )}
      </View>
    </AuthScreensSafeArea>
  );
};

export default AuthOptionScreen;
