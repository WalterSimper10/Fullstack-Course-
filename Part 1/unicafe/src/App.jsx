import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  } 

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
  }  

  const handleBadClick = () => {
  const updatedBad = bad + 1
  setBad(updatedBad)
  setTotal(good + neutral + updatedBad)
  } 


  return (
    <div>
      <Button onClick={handleGoodClick} text = "Good"/>
      <Button onClick={handleNeutralClick} text = "Neutral"/>
      <Button onClick={handleBadClick} text = "Bad"/>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
    </div>
  )
}

export default App