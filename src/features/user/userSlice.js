import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    loading: false,
    users: [],
    error: ``
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        const user = response.data.map(user => user.id)
        // console.log(user)
        return user;
    })
})

const useSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(
            fetchUsers.pending, state => {
                state.loading = true;
            }
        )
        .addCase(fetchUsers.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.users = action.payload;
            state.loading = false;
            
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        })

    }
})

export default useSlice.reducer;
