import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slice/connectSlice';
import userReducer from './slice/userSlice';
import searchUserReducer from './slice/searchSlice';
export const makestore = () => {
  return configureStore({
    reducer: {
      users: usersReducer,
      user: userReducer,
      searchUser : searchUserReducer
    }
  })
};

export type AppStore = ReturnType<typeof makestore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']