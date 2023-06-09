import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counter" ,
    initialState: {
        value : 0
    },
    reducers : {
        increase : (state) => {
            state.value += 1
        },

        decrease: (state) => {
            state.value -=1
        },
        increaseInput : (state,action) => {
            state.value += Number(action.payload)
        }
    }
})
export const {increase,decrease,increaseInput} = counterSlice.actions;
export default counterSlice.reducer;