// import {
//   SIGNUP_USER_REQUEST,
//   SIGNUP_USER_SUCCESS,
//   SIGNUP_USER_FAIL,
//   LOGIN_USER_REQUEST,
//   LOGIN_USER_SUCCESS,
//   LOGIN_USER_FAIL,
//   FORGOT_PASSWORD_USER_REQUEST,
//   FORGOT_PASSWORD_USER_SUCCESS,
//   FORGOT_PASSWORD_USER_FAIL,
//   RESET_PASSWORD_USER_REQUEST,
//   RESET_PASSWORD_USER_SUCCESS,
//   RESET_PASSWORD_USER_FAIL,
//   UPDATE_PASSWORD_USER_REQUEST,
//   UPDATE_PASSWORD_USER_SUCCESS,
//   UPDATE_PASSWORD_USER_FAIL,
//   LOGOUT_USER_REQUEST,
//   LOGOUT_USER_SUCCESS,
//   LOGOUT_USER_FAIL,
//   LOAD_USER_REQUEST,
//   LOAD_USER_SUCCESS,
//   LOAD_USER_FAIL,
//   PROFILE_USER_REQUEST,
//   PROFILE_USER_SUCCESS,
//   PROFILE_USER_FAIL,
//   PROFILE_UPDATE_USER_REQUEST,
//   PROFILE_UPDATE_USER_SUCCESS,
//   PROFILE_UPDATE_USER_FAIL,
// } from "../constants/UserConstants";

import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const userReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  SignupRequest: (state) => {
    state.loading = true;
  },
  SignupSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  SignupFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
