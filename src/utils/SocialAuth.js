import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken, Settings} from 'react-native-fbsdk-next';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {getAppleAccessToken, getGoogleAccessToken} from '../api/authentication';
import store from '../redux/store';
import {isSocialLoading, socialThunk} from '../redux/slices/authSlice';
import {EndPoint} from '../constants/APIEndpoints';

export const initializeSocialAuthHelpers = () => {
  // Setting the Facebook app id
  Settings.setAppID('227203443502512');
  Settings.initializeSDK();

  // Configure Google Sign-In
  GoogleSignin.configure({
    scopes: ['email'],
    androidClientId:
      '294334576451-oejnn9qtn35ajup95pg8mj7pupsd9qp2.apps.googleusercontent.com',
    iosClientId:
      '294334576451-mmh005ghvpst48t4som6e6bapu2s6bq6.apps.googleusercontent.com',
    webClientId:
      '294334576451-tduamj75cvd3r8pbv5p023vmg23o3lnt.apps.googleusercontent.com',
    offlineAccess: true,
    forceCodeForRefreshToken: true,
  });
};

//  Google Sign-In
export const handleGoogleSignIn = async () => {
  initializeSocialAuthHelpers();

  await GoogleSignin.hasPlayServices()
    .then(hasPlayService => {
      if (hasPlayService) {
        GoogleSignin.signIn().then(async userInfo => {
          // Obtain the user's information
          const {serverAuthCode} = userInfo;
          if (userInfo) {
            const accessToken = await getGoogleAccessToken(serverAuthCode);
            if (accessToken) {
              store.dispatch(
                socialThunk({
                  access_token: accessToken,
                  apiUrl: EndPoint.google_login,
                }),
              );
            }
          }
        });
      }
    })
    .catch(error => {
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
      return {success: false, error};
    });

  // Make a POST request to your REST login API and include the user information
};

// Helper function for Facebook Login
export const handleFacebookSignin = async () => {
  try {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      console.log('Facebook login cancelled');
      return {success: false, error: 'Facebook login cancelled'};
    } else {
      const accessToken = await AccessToken.getCurrentAccessToken();
      if (accessToken) {
        console.log('Facebook access token:', accessToken.accessToken);
        // Use the obtained access token to make API calls or authenticate the user on your server
        store.dispatch(
          socialThunk({
            access_token: accessToken.accessToken,
            apiUrl: EndPoint.facebook_login,
          }),
        );
      }
    }
  } catch (error) {
    console.log('Facebook login error:', error);
    return {success: false, error};
  }
};

// Helper function for Apple Sign-In
export const handleAppleSignIn = async () => {
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
        const {authorizationCode} = appleAuthRequestResponse;
        // Make a POST request to your REST login API and include the user information authorizationCode
        store.dispatch(isSocialLoading(true));
        const {accessToken, idToken} = await getAppleAccessToken(
          authorizationCode,
        );
        if (accessToken && idToken) {
          store.dispatch(
            socialThunk({
              access_token: accessToken,
              id_token: idToken,
              apiUrl: EndPoint.apple_login,
            }),
          );
        }
      }
    } catch (error) {
      // Handle the error
      console.log('Apple Sign-In error:', error.message);
      return {success: false, error};
    }
  } else {
    // Apple Sign-In is not supported on this device
    console.log('Apple Sign-In is not supported on the device');
    return {
      success: false,
      error: 'Apple Sign-In is not supported on this device',
    };
  }
};
