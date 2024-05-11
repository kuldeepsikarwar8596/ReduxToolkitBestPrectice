
import './App.css'
import Navbar from './Components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counter/CounterSlice'
import Footer from './Components/Footer'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <h1>Redux Toolkit example</h1>
      <Navbar />
      <br />
      <div style={{backgroundColor:"gray", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <button onClick={() => dispatch(decrement())}>-</button>
        <h2>Currently count is {count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <br />
      <Footer />
    </>
  )
}

export default App
