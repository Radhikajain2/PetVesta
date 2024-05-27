/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  itemList: [] || null,
};

export const productSlice = createSlice({
  name: 'sliceData',
  initialState,
  reducers: {
    itemList: (state, action) => {
      if (state.itemList.length !== null) {
        state.itemList = action.payload;
      }
    },
    increment: (state, action) => {
      state.itemList = state.itemList.map(item =>
        item.id === action.payload ? {...item, qty: item.qty + 1} : item,
      );
    },
    decrement: (state, action) => {
      state.itemList = state.itemList.map(item =>
        item.id === action.payload ? {...item, qty: item.qty - 1} : item,
      );
    },
  },
});

export const {itemList, increment, decrement} = productSlice.actions;
export default productSlice.reducer;
