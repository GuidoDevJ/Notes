import { createSlice } from "@reduxjs/toolkit";

// const initialState:;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    email: "",
    id: 0,
    notes: [],
    password: "",
    name: "",
  },
  reducers: {
    authUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.notes = action.payload.notes;
      state.password = action.payload.password;
      state.name = action.payload.name;
      console.log(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { authUser } = authSlice.actions;

export default authSlice;
