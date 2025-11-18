import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  if (props.total === 0){
    return(
      <div>
      <Button onClick={props.handleGoodClick} text = "Good"/>
      <Button onClick={props.handleNeutralClick} text = "Neutral"/>
      <Button onClick={props.handleBadClick} text = "Bad"/>

      <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <Button onClick={props.handleGoodClick} text = "Good"/>
      <Button onClick={props.handleNeutralClick} text = "Neutral"/>
      <Button onClick={props.handleBadClick} text = "Bad"/>

      <h1>Statistics</h1>
      <StatisticLine text="Good" value ={props.good} />
      <StatisticLine text="Neutral" value ={props.neutral} />
      <StatisticLine text="Bad" value ={props.bad} />
      <StatisticLine text="All" value ={props.total} />
      <StatisticLine text="Average" value ={props.average/props.total} />
      <StatisticLine text="Positive" value ={100*(props.positive/props.total)} />
      
    </div>
  )
}

const StatisticLine = (props) => {
  return(
    <table>
      <tbody>
        <tr>
          <td>{props.text}: {props.value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    setAverage(average + 1)
    setPositive(positive + 1)
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
  setAverage(average - 1)
  } 


  return (
    <div>
      <Statistics handleGoodClick = {handleGoodClick}
      handleNeutralClick = {handleNeutralClick}
      handleBadClick = {handleBadClick}
      total = {total}
      good = {good}
      neutral = {neutral}
      bad = {bad}
      average={average}
      positive={positive}/>
    </div>
  )
}

export default App