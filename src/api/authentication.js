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

export const getAppleAccessToken = async serverAuthCode => {
  /* Expiration Time of this key or secret is 6 months max.
  After that developer has to create a new key from folder
  "apple-client-secret-generator" */

  const privateKeyString =
    'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijg2TDI4OFQ2RkMifQ.eyJpc3MiOiJGNTQ3NURVSDgzIiwiaWF0IjoxNjkzNDI1NzM4LCJleHAiOjE3MDkyMDI3MzgsImF1ZCI6Imh0dHBzOi8vYXBwbGVpZC5hcHBsZS5jb20iLCJzdWIiOiJjb20uYnVwLmZpbmFuY2UifQ.Dx3SLXzM3X-8GHoIb8I2StwZHW2V76cvCSH8yBNQqEEcO4cDGfDyArfHZTq7bjFS2vK1aW1TcJqPodPBo5ISXQ';

  const tokenEndpoint = 'https://appleid.apple.com/auth/token';
  const clientId = 'com.bup.finance'; // Replace with the actual client ID

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const requestBody = new URLSearchParams();
  requestBody.append('client_id', clientId);
  requestBody.append('client_secret', privateKeyString);
  requestBody.append('code', serverAuthCode);
  requestBody.append('grant_type', 'authorization_code');
  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: headers,
      body: requestBody.toString(),
    });
    const data = await response.json();
    if (data.access_token) {
      const accessToken = data.access_token;
      const idToken = data.id_token;
      console.log('Access Token from apple auth:', accessToken);
      console.log('id Token from apple auth:', idToken);
      return {accessToken, idToken};
    } else {
      console.error('Error:', data);
      // Handle error cases
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle fetch error
  }
};
