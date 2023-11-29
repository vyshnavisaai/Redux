import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice =createSlice({
    name: 'counter',
    initialState:{
    value:0,
    number:50
    },
    
reducers:{
    increment:(i)=>{
        i.value=i.value+1
    },

    decrement:(i)=>{
        i.value=i.value-1
    },

    addfive:(i)=>{
        i.value=i.value+5
    },
    minfive:(i)=>{
        i.number=i.number-5
    }
    }
    
})

export const {increment,decrement,addfive,minfive}=CounterSlice.actions
export default CounterSlice.reducer