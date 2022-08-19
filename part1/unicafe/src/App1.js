// Usando un solo estado complejo con varios atributos

import React, { useState } from 'react'

const App1 = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    const newClicks = {                  // Asignacion de una variable al controlador el evento para actualizar el estado
      ...clicks, 
      good: clicks.good + 1
    }
    setClicks(newClicks)
  }

  const handleNeutralClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })             // No es necesario asignar una variable, asi es mas simple
  }

  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 })
  }

  const handleClickReset = () => {
    setClicks({good:0, neutral:0, bad:0})
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
        <p>Good {clicks.good}</p>
        <p>Neutral {clicks.neutral}</p>
        <p>Bad {clicks.bad}</p>
        <p>All {clicks.good + clicks.neutral + clicks.bad}</p>
        <p>Average {(clicks.good-clicks.bad) / (clicks.good + clicks.neutral + clicks.bad)}</p>
        <p>Positive {(clicks.good / (clicks.good + clicks.neutral + clicks.bad))*100}%</p>
    </div>
  )
}

export default App1