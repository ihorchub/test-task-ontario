import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://dev.api.fundee.io/';

/*
 * POST @ /account/login
 * body: { login, password }
 */
export const UserlogIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await toast.promise(
        axios.post('/account/login', credentials),
        {
          pending: 'Checking the entered data',
          success: `Welcome, ${credentials.login}, for logging in 👌`,
          error: 'User not found. Try again 🤯',
        }
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
