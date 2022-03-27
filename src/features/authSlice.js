import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userPending: (state) => {
      state.isLoading = true;
    },
    userAuth: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = payload;
    },
    userError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { userAuth } = authSlice.actions;
export default authSlice.reducer;
