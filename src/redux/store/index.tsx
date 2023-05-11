import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import notesSlice from "../slices/notes/notesSlice";
// Configurando Persist Store
const persisConfig = {
  key: "root",
  storage,
  whiteList: ["token"],
};
const rootReducer = combineReducers({
  authTokenState: authSlice.reducer,
});

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    notes: notesSlice,
  },
  middleware: [thunk],
});
