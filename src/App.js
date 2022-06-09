import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {increment, decrement} from './JS/counterSlice'

function App() {

  const value = useSelector(state=>state.counterSlice.value)
  const dispatch = useDispatch()



  return (
    <div className="App">
      <button onClick={()=>dispatch(increment(5))} >+</button>
      <h3>{value}</h3>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
