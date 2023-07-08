import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken, Settings} from 'react-native-fbsdk-next';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import * as Navigation from '../stacks/Navigation';

export const initializeSocialAuthHelpers = () => {
  // Setting the Facebook app id
  Settings.setAppID('227203443502512');
  Settings.initializeSDK();

  // Configure Google Sign-In
  GoogleSignin.configure({
    scopes: ['email'],
    webClientId: 'YOUR_WEB_CLIENT_ID',
    offlineAccess: true,
    forceCodeForRefreshToken: true,
  });
};

//  Google Sign-In
export const handleGoogleSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    // Obtain the user's information
    const {idToken, user} = userInfo;
    const {email, givenName, familyName} = user;

    console.log(idToken, email, givenName, familyName);
    if (userInfo) {
      Navigation.navigate('TopicSelection');
      return {success: true, data: userInfo};
    }

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
    return {success: false, error};
  }
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
        Navigation.navigate('TopicSelection');
        // Use the obtained access token to make API calls or authenticate the user on your server
        return {success: true, data: accessToken};
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
        const {identityToken, email, fullName} = appleAuthRequestResponse;

        console.log(
          identityToken,
          email,
          fullName.givenName,
          fullName.familyName,
        );
        Navigation.navigate('TopicSelection');
        // Make a POST request to your REST login API and include the user information
        return {success: true, data: appleAuthRequestResponse};
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
