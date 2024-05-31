import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from './api/index';
import pokemonReducer from './slice/pokemon';
import { getDefaultMiddleware } from 'redux-toolkit';
export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
});
setupListeners(store.dispatch);
