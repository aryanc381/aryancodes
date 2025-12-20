import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slice/connectSlice';
import userReducer from './slice/userSlice';

export const makestore = () => {
  return configureStore({
    reducer: {
      users: usersReducer,
      user: userReducer
    }
  })
};

export type AppStore = ReturnType<typeof makestore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']