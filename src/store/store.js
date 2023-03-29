import {configureStore} from '@reduxjs/toolkit';
import produitsReducer from './produits.slice';

export const store = configureStore({
  reducer: produitsReducer,
});

store.subscribe(() => {
  console.log('================================');
  console.log(store.getState());
  console.log('================================');
});
