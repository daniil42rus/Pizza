import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: { name: 'популярности (DESC)', sortProperty: 'rating' },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, actions) {
      state.sortType = actions.payload;
    },
  },
});

export const { setCategoryId, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
