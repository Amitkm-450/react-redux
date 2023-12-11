const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    noOfCakes: 10,
}
const cakeSlice = createSlice({
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
          .addCase('icecream/ordered', (state) => {
            state.noOfCakes--;
          })
         
      },
})

// console.log(cakeSlice.selectors)
module.exports = cakeSlice.reducer
module.exports.cakeAction = cakeSlice.actions;


