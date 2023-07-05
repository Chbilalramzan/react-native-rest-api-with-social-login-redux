// authSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const apiConfig = {
  login: {
    url: 'https://app.pol.work/user-logged-in',
    method: 'post',
  },
  // Add other API endpoints here
};

const createApiThunk = (name, {url, method}) => {
  return createAsyncThunk(`auth/${name}`, async payload => {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`${name} failed`);
    }
  });
};

const apiThunks = Object.entries(apiConfig).reduce((thunks, [name, config]) => {
  thunks[name] = createApiThunk(name, config);
  return thunks;
}, {});

const initialState = {
  token: null,
  isAuthenticated: true,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: builder => {
    Object.values(apiThunks).forEach(thunk => {
      builder
        .addCase(thunk.pending, state => {
          state.loading = true;
          state.error = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          // Update state based on the specific API call
          if (action.payload.token) {
            state.token = action.payload.token;
            state.isAuthenticated = true;
          }
        })
        .addCase(thunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          state.token = null;
          state.isAuthenticated = false;
        });
    });
  },
});

export const {logout} = authSlice.actions;

export const {login} = apiThunks;

export default authSlice.reducer;
