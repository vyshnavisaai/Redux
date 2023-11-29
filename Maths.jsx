import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { divide, multiply } from './MathsSlice'

function Maths() {
    const value3=useSelector((i)=>i.maths.numbers);
    const dispatched=useDispatch()
      return (
    <div>
        <h1>NUMBER : {value3}</h1>
        {/* <button onClick={()=>dispatch(multiply())}>MULTIPLY BY 5</button>
        <button onClick={()=>dispatch(divide())}>DIVIDE BY 5</button> */}
        <button onClick={()=>dispatched(multiply())}>Multiply by 5</button><br /><br />
        <button onClick={()=>dispatched(divide())}>Divide by 5</button>


    </div>
  )
}

export default Maths