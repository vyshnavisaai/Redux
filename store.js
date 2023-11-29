import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice'
// import { MathsSlice } from './MathsSlice'
// import MathsSlice from './MathsSlice'
import MathsSlice from './MathsSlice'

export default configureStore({
  reducer: {
    counter:CounterSlice,
    maths:MathsSlice
    
  },
})