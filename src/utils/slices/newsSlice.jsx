import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsObject: null,
  },
  reducers: {
    addNewsInObject: (state, action) => {
      state.newsObject = action.payload;
    },
  },
});
export const { addNewsInObject } = newsSlice.actions;
export default newsSlice.reducer;
