import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/CounterSlice'

function Footer() {
    const dispatch = useDispatch()
    return (
        <>
            <div style={{backgroundColor:"seagreen", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <button onClick={() => dispatch(decrement())}>-</button>
                <h1>This is a Footer change value by footer</h1>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </>
    )
}

export default Footer