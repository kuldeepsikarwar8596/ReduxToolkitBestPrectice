import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
  const count = useSelector((state) => state.counter.value)

  return (
    <div><h1 style={{color: "crimson"}}>This is a Navbar Redus Toolkit concept:  {count}</h1> </div>
  )
}

export default Navbar