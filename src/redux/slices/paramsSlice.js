import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
};

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = paramsSlice.actions;
export default paramsSlice.reducer;
