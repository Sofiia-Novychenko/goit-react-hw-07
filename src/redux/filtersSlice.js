import { createSlice } from '@reduxjs/toolkit';

//* changeFilter - зміна значення фільтра в властивості name

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default slice.reducer;
export const { changeFilter } = slice.actions;
