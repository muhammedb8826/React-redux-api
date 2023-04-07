import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://randomuser.me/api/?results=5';

const initialState = {
    users: [],
    isLoading: true,
    error: '',
}

export const getUsers = createAsyncThunk('user/getUsers',()=>{
    return fetch(url)
    .then((resp) => resp.json())
    .catch((err)=> console.log(err));
})

const usersSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [getUsers.pending] : (state) => {
            state.isLoading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]: (state) => {
            state.isLoading = false;
        }
    }
})

export default usersSlice.reducer;

