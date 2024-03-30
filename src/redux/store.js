import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; // Aquí importa tus reducers

const store = configureStore({
  reducer: rootReducer, // Combina todos tus reducers aquí
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Para evitar errores de serialización
    }),
});

export default store;