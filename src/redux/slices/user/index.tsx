import { createSlice } from "@reduxjs/toolkit";

// const initialState:;

const userSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    email: "",
    id: 0,
    notes: [],
    password: "",
  },
  reducers: {
    createUser: (state, action) => {
      state = action.payload;
      console.log(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser } = userSlice.actions;

export default userSlice;
