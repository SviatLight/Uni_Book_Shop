import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  currentPage: 1,
  activeThemes: [],
};

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setActiveThemes(state, action) {
      state.activeThemes.push(action.payload);
    },
    removeAnActiveThemes(state, action) {
      state.activeThemes = state.activeThemes.filter((item) => item !== action.payload);
    },
    removeAllThemes(state) {
      state.activeThemes = [];
    },
  },
});

export const { setSearch, setCurrentPage, setActiveThemes, removeAnActiveThemes, removeAllThemes } =
  paramsSlice.actions;
export default paramsSlice.reducer;
