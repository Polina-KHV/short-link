import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {token: null},
  reducers: {
    logIn: (state, { payload }) => {
      state.token = payload;
    },
    logOut: (state) => {
      state.token = null;
    }
  }
});