import {createSlice} from '@reduxjs/toolkit';
import {InitialState} from '../typings';

const initialState: InitialState = {
  authenticated: false,
  userRegistered: false,
  token: null,
  user: null,
  navPath: 'HOME',
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUserSession: (state, action) => {
      state.authenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setUserRegistered: state => {
      state.userRegistered = true;
    },
    cleanUserSession: state => {
      state.authenticated = false;
      state.userRegistered = false;
      state.token = null;
      state.user = null;
      state.navPath = 'HOME';
    },
    setNavPathSelected: (state, action) => {
      state.navPath = action.payload;
    },
  },
});

export const {
  setUserSession,
  cleanUserSession,
  setUserRegistered,
  setNavPathSelected,
} = sessionSlice.actions;
export default sessionSlice.reducer;
