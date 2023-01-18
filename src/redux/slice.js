import { createSlice } from '@reduxjs/toolkit';
import { UserlogIn, refreshUser } from './operations';

const initialState = {
  user: { name: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [UserlogIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
