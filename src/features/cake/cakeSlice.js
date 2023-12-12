import {createSlice} from '@reduxjs/toolkit';
import { ordered as icecreamOrdered } from '../icecream/icecreamSlice';

const initialState = {
    noOfCakes: 10,
}
export const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfCakes--;
        },
        restocked: (state, action) => {
           state.noOfCakes += action.payload;
        }, 

    },
    //extra reducers
    
    extraReducers: (builder) => {
        builder
          .addCase(icecreamOrdered, (state) => {
             state.noOfCakes--;
          })
         
      },
})

// console.log(cakeSlice.selectors)
export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions;



