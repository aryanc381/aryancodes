import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchUser {
    name: string;
    email: string;
};

interface User {
    users: SearchUser[]
};

const initialState: User = {
    users: []
};

const searchUserSlice = createSlice({
    name: "search_users",
    initialState,
    reducers: {
        setSearchUsers(state, action: PayloadAction<User>) {
            state.users = action.payload.users
        },
        clearSearchUser(state) {
            state.users = []
        },
    },
});

export const { setSearchUsers, clearSearchUser } = searchUserSlice.actions;
export default searchUserSlice.reducer;