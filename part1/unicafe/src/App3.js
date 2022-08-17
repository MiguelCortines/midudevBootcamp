// Resumiendo estados redundantes

import React, { useState } from 'react'

const App3 = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  const handleClickReset = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
    setAll([])
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <div>
        <button onClick={handleClickReset}>Reset</button>
      </div>

      <h3>Statistics</h3>
      <p>{allClicks.join(' - ')}</p>      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {good + neutral + bad}</p>
      <p>Average {(good-bad) / (good + neutral + bad)}</p>
      <p>Positive {(good / (good + neutral + bad))*100}%</p>
    </div>
  )
}

export default App3