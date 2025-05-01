import { createSlice } from "@reduxjs/toolkit";

export const getUsers = createSlice({
    name: "get-users",
    initialState: {
        data: ["test data"],
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setData } = getUsers.actions;
export default getUsers.reducer;
