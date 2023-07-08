// authSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {apiConfig} from '../../api/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Navigation from '../../stacks/Navigation';

const {login, register} = apiConfig;

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

      if (res.key) {
        AsyncStorage.setItem('userToken', res.key);
        Navigation.navigate('Confirmation');
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
      res;

      console.log(res);
      Navigation.navigate('TopicSelection');
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
  userModal: null,
  token: null,
  isAuthenticated: false,
  error: null,
  isFailed: false,
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
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, {payload}) => {
        state.loading = false;
        console.log(payload.statusCode);
        // Update state based on the specific API call
        if (payload.key) {
          state.token = payload.key;
          // state.isAuthenticated = true;
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
        if (payload.key) {
          state.token = payload.key;
        }
      })
      .addCase(registerThunk.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export const {isAuthenticated, logout, resetError} = authSlice.actions;

export default authSlice.reducer;
