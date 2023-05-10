import { createSlice } from "@reduxjs/toolkit";
import { User } from "src/interfaces";

const initialState = {
 token:""
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser:(state,action)=>{
        state.token = action.payload.token
        console.log(state)
    }
  },
});

// Action creators are generated for each case reducer function
export const { authUser } = authSlice.actions;

export default authSlice;
