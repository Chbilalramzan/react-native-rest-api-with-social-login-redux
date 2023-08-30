// authSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {apiConfig} from '../../api/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Navigation from '../../stacks/Navigation';

const {login, register, social} = apiConfig;

export const loginThunk = createAsyncThunk(
  `auth/${login.name}`,
  async (payload, {rejectWithValue}) => {
    try {
      const res = await fetch(login.url, {
        method: login.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).then(response => response.json());
      if (res.success) {
        AsyncStorage.setItem('userToken', res.data.Token);
        // Navigation.navigate('Confirmation');
        //  isAuthenticated(true);
      }
      return res;
    } catch (error) {
      // throw new Error(`${name} failed`);
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
export const registerThunk = createAsyncThunk(
  `auth/${register.name}`,
  async (payload, {rejectWithValue}) => {
    try {
      console.log(payload);
      const res = await fetch(register.url, {
        method: register.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).then(response => response.json());

      console.log(res);
      if (res.success) {
        Navigation.navigate('TopicSelection');
      }

      // if (data.stausCode === 200) {
      //   AsyncStorage.setItem('userToken', data.key);
      // }
      return res;
    } catch (error) {
      // throw new Error(`${name} failed`);
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const socialThunk = createAsyncThunk(
  `auth/${social.name}`,
  async (payload, {rejectWithValue}) => {
    try {
      const {access_token, id_token, apiUrl} = payload;
      const res = await fetch(apiUrl, {
        method: social.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({access_token, id_token}),
      }).then(response => response.json());

      console.log(res);
      if (res.success) {
        if (res.data.user.new_login) {
          Navigation.navigate('TopicSelection');
        } else {
          AsyncStorage.setItem('userToken', res.data.Token);
        }
      }

      // if (data.stausCode === 200) {
      //   AsyncStorage.setItem('userToken', data.key);
      // }
      return res;
    } catch (error) {
      // throw new Error(`${name} failed`);
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

const initialState = {
  initialRoute: 'Onboarding',
  loading: false,
  socialLoading: false,
  userModal: null,
  token: null,
  isAuthenticated: false,
  error: null,
  isFailed: false,
  isOnBoardFinished: false,
};

// Async function to fetch the token from AsyncStorage
const fetchToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    console.error('Error fetching token from AsyncStorage:', error);
    return null;
  }
};

// Fetch the token when the slice is initialized
fetchToken().then(token => {
  initialState.token = token;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null;
      state.isAuthenticated = false;
    },
    resetError: state => {
      state.error = null;
      state.isFailed = false;
    },
    isAuthenticated: (state, {payload}) => {
      state.isAuthenticated = payload;
    },
    isFinishOnBorad: (state, {payload}) => {
      state.isOnBoardFinished = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, {payload}) => {
        state.loading = false;
        // Update state based on the specific API call
        if (payload.success) {
          state.token = payload.data.Token;
          state.isAuthenticated = true;
        } else {
          state.error = payload.non_field_errors;
          state.token = null;
          state.isFailed = true;
        }
      })
      .addCase(loginThunk.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload.non_field_errors;
        state.token = null;
        state.isFailed = true;
        state.isAuthenticated = false;
      })
      .addCase(registerThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        if (payload.success) {
          state.token = ''; //token here
        } else {
          let concatenatedString = '';
          Object.keys(payload).forEach(key => {
            if (payload.hasOwnProperty(key)) {
              concatenatedString += payload[key].join(' ');
            }
          });
          state.error = concatenatedString;
          state.token = null;
          state.isFailed = true;
        }
      })
      .addCase(registerThunk.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(socialThunk.pending, state => {
        state.socialLoading = true;
        state.error = null;
      })
      .addCase(socialThunk.fulfilled, (state, {payload}) => {
        state.socialLoading = false;
        state.error = null;
        if (payload.success && !payload.data.user.new_login) {
          state.token = payload.data.Token;
          state.isAuthenticated = true;
          state.isFailed = false;
        } else {
          state.error = payload.non_field_errors;
          state.token = null;
          state.isFailed = true;
        }
      })
      .addCase(socialThunk.rejected, (state, {payload}) => {
        state.socialLoading = false;
        state.error = payload;
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export const {isAuthenticated, logout, resetError, isFinishOnBorad} =
  authSlice.actions;

export default authSlice.reducer;
