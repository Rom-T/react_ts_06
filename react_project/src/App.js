import { useState } from 'react'

const App = () => {

  const Display = ({counter}) => <div>{counter}</div>
  const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button>

  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const resetSetToZero = () => setCounter(0)
  
  return (
    <div>
    <Display counter = {counter}/>
    <Button handleClick = {increaseByOne} text = 'plus'/>
    <Button handleClick = {resetSetToZero} text = 'zero'/>
    <Button handleClick = {decreaseByOne} text = 'minus'/>
    </div>
  )
}
  
export default App