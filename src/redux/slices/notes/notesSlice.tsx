import { createSlice } from "@reduxjs/toolkit";

// const initialState:;

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state.notes = action.payload;
    },
    updateNote: (state, action) => {
      const { id, title, content } = action.payload;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const foundNote: any = state.notes.find((note: any) => note.id === id);
      if (foundNote) {
        foundNote.title = title;
        foundNote.content = content;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, updateNote } = notesSlice.actions;

export default notesSlice;
