import { useState } from 'react';
import { Button, Display } from "./components";

const App = () => {

  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const resetSetToZero = () => setCounter(0);
  
  return (
    <div>
    <Display counter = {counter}/>
    <Button handleClick = {increaseByOne} text = 'plus'/>
    <Button handleClick = {resetSetToZero} text = 'zero'/>
    <Button handleClick = {decreaseByOne} text = 'minus'/>
    </div>
  )
}
  
export default App;