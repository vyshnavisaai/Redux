import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment ,addfive,minfive} from './CounterSlice';



function Counter() {
    const values =useSelector((i)=>i.counter.value)
    const numbers =useSelector((i)=>i.counter.number)

    const dispatch=useDispatch()
  return (
    <div>
        <p>NUMBER : {values}</p>
        <Button style={{marginLeft:30}} onClick={()=>dispatch(increment())}>+</Button>
        <Button style={{marginLeft:30}} onClick={()=>dispatch(decrement())}>-</Button>
        <Button style={{marginLeft:30}} onClick={()=>dispatch(addfive())}>5+</Button><br />
        <p>number:{numbers}</p>

        <Button style={{marginLeft:30}} onClick={()=>dispatch(minfive())}>5-</Button>

    </div>
  )
}

export default Counter