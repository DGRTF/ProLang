import { configureStore } from '@reduxjs/toolkit';
import currentOrder from './reducers/currentOrder';

const store = configureStore({
  reducer: {
    currentOrder,
  },
});

export type storeType = ReturnType<typeof store.getState>;
export default store;
