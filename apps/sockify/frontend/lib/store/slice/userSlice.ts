import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clearUsers } from "./connectSlice";

interface IUser {
    name: string | null;
    email: string | null;
    id: number | null;
}

const initialState: IUser = {
    name: null,
    email: null,
    id: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.name = action.payload.name,
            state.email = action.payload.email,
            state.id = action.payload.id
        },
        clearUser(state) {
            state.name = null;
            state.email = null;
            state.id = null;
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;