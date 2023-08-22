import {EndPoint} from '../constants/APIEndpoints';

export const getGoogleAccessToken = async serverAuthCode => {
  try {
    const data = new URLSearchParams();
    data.append('code', serverAuthCode);
    data.append(
      'client_id',
      '294334576451-tduamj75cvd3r8pbv5p023vmg23o3lnt.apps.googleusercontent.com',
    );
    data.append('client_secret', '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');
    data.append('redirect_uri', 'urn:ietf:wg:oauth:2.0:oob');
    data.append('grant_type', 'authorization_code');

    const response = await fetch(EndPoint.google_accesstoken, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data.toString(),
    });

    const res = await response.json();
    console.log(res);

    if (res.access_token) {
      return res.access_token;
    } else {
      throw new Error('Access token not received.');
    }
  } catch (error) {
    console.error('Token Exchange Error:', error);
    throw error; // Rethrow the error for the calling function to handle
  }
};
