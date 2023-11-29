import { createSlice } from "@reduxjs/toolkit"

export const MathsSlice =createSlice({
    name: 'maths',
    initialState:{
    numbers:100,
    },
    reducers:{
        multiply:(i)=>{
            i.numbers=i.numbers*5
        },
        divide:(i)=>{
            i.numbers=i.numbers/5
        }
    }
})

export const {multiply,divide} =MathsSlice.actions
export default MathsSlice.reducer