import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { linksSlice } from "./linksSlice";

const reducers = combineReducers({
  auth: authSlice.reducer,
  links: linksSlice.reducer
});

const store = configureStore({
  reducer: reducers
});

export default store;