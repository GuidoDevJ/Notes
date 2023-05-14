import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../../store/index'

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
    updateData:(state,action)=>{
      state.name = action.payload.name
      state.password = action.payload.password
    },
    deleteAuth:(state)=>{
      state.token = ""
      state.email =""
      state.id=0
      state.notes=[]
      state.password=""
      state.name=""

    }
  },
});

// Action creators are generated for each case reducer function
export const { authUser,updateData,deleteAuth } = authSlice.actions;
export const auth = (state: RootState) => state
export default authSlice;
