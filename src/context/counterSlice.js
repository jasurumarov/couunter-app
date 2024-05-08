import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        inc(state) {
            state.value += 1
        },
        dec(state) {
            state.value -= 1
        },
        reset(state) {
            state.value = 0
        }
    }
})

export const {inc} = counterSlice.actions
export const {dec} = counterSlice.actions
export const {reset} = counterSlice.actions
export default counterSlice.reducer