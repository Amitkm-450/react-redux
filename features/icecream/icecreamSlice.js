import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    noOfIcecreams: 20,
}

export const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfIcecreams--;
        },
        restocked: (state, action) => {
            state.noOfIcecreams += action.payload;
        }

    }
});

export default icecreamSlice.reducer;
