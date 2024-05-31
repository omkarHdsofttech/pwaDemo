import { createSlice } from "@reduxjs/toolkit";
import { promptmuleApi } from "../api";


type User = {
    isAuthorized: boolean,
    token: string,
    username: string
}


const initialState: User = {
    isAuthorized: false,
    token: "",
    username: "",
};


const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsers(state, { payload }) {
            state.isAuthorized = true,
                state.token = '123',
                state.username = "Test"
        }
    },

});

export const { setUsers } = user.actions;
export default user.reducer;
