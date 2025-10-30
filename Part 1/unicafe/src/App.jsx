import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  } 

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }  

  const handleBadClick = () => {
    setBad(bad + 1)
  } 

  return (
    <div>
      <Button onClick={handleGoodClick} text = "Good"/>
      <Button onClick={handleNeutralClick} text = "Neutral"/>
      <Button onClick={handleBadClick} text = "Bad"/>
    </div>
  )
}

export default App