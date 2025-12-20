import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  pending: string[];
  accepted: string[];
}

const initialState: UsersState = {
  pending: [],
  accepted: [],
};

const usersSlice = createSlice({
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

export const { setUsers, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;
