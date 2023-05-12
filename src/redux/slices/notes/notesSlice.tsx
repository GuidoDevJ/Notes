import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../../helpers/localStorage";

const initialState = getItem("notes") || { notes: [] };

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      console.log(action.payload);
      state.notes = [...state.notes, ...action.payload];
      console.log("state.notes", state);
    },
    updateNote: (state, action) => {
      const { id, content } = action.payload;
      console.log(id, content);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const foundNote: any = state.notes.find((note: any) => note.id === id);
      console.log(foundNote);
      if (foundNote) {
        foundNote.content = content;
        console.log(foundNote.content);
        console.log("inital state desde update", initialState);
        // setItem("notes", { notes: initialState });
      }
    },
    deleteNot: (state, action) => {
      const id = action.payload;
      console.log("entrando en el delete", id);
      state.notes = state.notes.filter((note: any) => note.id !== id);
      console.log(state.notes);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, updateNote, deleteNot } = notesSlice.actions;

export default notesSlice.reducer;
