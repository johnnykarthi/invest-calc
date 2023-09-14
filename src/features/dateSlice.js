import { createSlice } from '@reduxjs/toolkit'

const dateSlice = createSlice(
    {
        name: 'data',
        initialState: {
            amount: 1000,
            rate: 12,
            duration: 12
        },
        reducers: {
            amountChange: (state, action) => {
                if (action.payload > 100000) {
                    state.amount = 100000;
                }
                else {
                    state.amount = action.payload;
                }
            },
            rateChange: (state, action) => {
                if (action.payload > 30) {
                    state.rate = 30;
                }
                else {
                    state.rate = action.payload;
                }
            },
            durationChange: (state, action) => {
                if (action.payload > 40) {
                    state.duration = 40;
                }
                else {
                    state.duration = action.payload;
                }
            }
        }
    }
)


export const { amountChange, rateChange, durationChange } = dateSlice.actions;

export default dateSlice.reducer;