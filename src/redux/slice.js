import { createSlice } from '@reduxjs/toolkit';
import { UserlogIn } from './operations';

const initialState = {
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(UserlogIn.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
