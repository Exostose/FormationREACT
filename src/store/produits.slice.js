import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  produits: [],
};
const produits = {};
produits.slice = createSlice({
  name: 'produits',
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.produits.push(...action.payload);
    },
    clearProducts: state => {
      state.produits.splice(0);
    },
  },
});

export const {loadProducts, clearProducts} = produits.slice.actions;

export default produits.slice.reducer;
