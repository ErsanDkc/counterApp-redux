import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increase,decrease,increaseInput } from '../../Redux/Counter/counterSlice'

function Counter() {
    const [amount,setAmount] =  useState("")
    const counterValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <>
    <div>{counterValue}</div> <br /><br />
    <button onClick={() => dispatch(increase())}>Incerase</button>
    <button onClick={() => dispatch(decrease())}>Decrease</button>

    <br />
    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
    <button onClick={() => dispatch(increaseInput(amount))}>Incerease by input</button>


    </>
  )
}

export default Counter