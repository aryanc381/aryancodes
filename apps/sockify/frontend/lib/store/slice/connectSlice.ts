import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConnectUser {
  name: string;
  email: string;
}

interface UsersState {
  pending: ConnectUser[];
  accepted: ConnectUser[];
}

const initialState: UsersState = {
  pending: [],
  accepted: [],
};

const connectSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<UsersState>) {
      state.pending = action.payload.pending;
      state.accepted = action.payload.accepted;
    },
    clearUsers(state) {
      state.pending = [];
      state.accepted = [];
    },
  },
});

export const { setUsers, clearUsers } = connectSlice.actions;
export default connectSlice.reducer;
