import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const filterSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
