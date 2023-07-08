import {Dimensions, Platform, StatusBar} from 'react-native';
import getSize from '../utils/helpers';

export const BASE_URL = 'http://54.165.173.158/accounts/';

export const IMAGE_CONFIG_HEADER = {
  'Content-Type': 'multipart/form-data',
  accept: 'application/json',
};

export const statusBarHeight = height =>
  Platform.select({
    ios:
      Dimensions.get('window').height >= 812 &&
      Dimensions.get('window').height <= 932
        ? getSize(50) // iPhone X, XS, XR, XS Max and later seriese
        : getSize(20), // Other iPhones
    android: StatusBar.currentHeight,
  });
