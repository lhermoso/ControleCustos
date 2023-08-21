import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    tokens: {
      access: null,
      refresh: '',
    },
  },

  reducers: {
    setTokens: (state, action) => {
      state.tokens.access = action.payload.access_token;
      state.tokens.refresh = action.payload.refresh_token;
    },
    setAccessToken: (state, action) => {
      state.tokens.access = action.payload.access;
    },
    removeTokens: (state) => {
      state.tokens = {
        access: null,
        refresh: '',
      };
    },
  },

});

export const {
  setTokens,
  setAccessToken,
  removeTokens,
} = authSlice.actions;

export default authSlice.reducer;
