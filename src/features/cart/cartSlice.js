import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({...action.payload, uniqueId : Date.now()});
    },
    removeItem: (state, action) => {
      let index = state.items.findIndex((item) => item.uniqueId === action.payload);

      if (index !== -1) {
        state.items.splice(index, 1);
      }
      // state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
