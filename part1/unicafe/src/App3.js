// Usando un solo estado simple, resumiendo y quitando estados redundantes

import React, { useState } from 'react'

const App3 = () => {

  const [allClicks, setAll] = useState([])
  
  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
  }

  const handleClickReset = () => {
    setAll([])
  }

  const allGood = allClicks.filter(click => click ==='G').length
  const allNeutral = allClicks.filter(click => click ==='N').length
  const allBad = allClicks.filter(click => click ==='B').length

  let average = (allGood-allBad) / (allClicks.length)
  let positive = (allGood / (allClicks.length))*100

  console.log('la puntuacion media es: ', average, ' y el porcentaje de positivos es: ', positive)

  const isEmpty = allClicks.length === 0

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
      <p>{isEmpty ? 'Press any button to start' : allClicks.join(' - ')}</p>      {/** Renderizado condicional con ternarias */}
      <p>Good: {allGood}</p>
      <p>Neutral: {allNeutral}</p>
      <p>Bad: {allBad}</p>
      <p>All: {allClicks.length}</p>
      <p>{isEmpty ? 'Average: ' : 'Average: ' + average}</p>                      {/** Renderizado condicional con ternarias */}
      <p>{isEmpty ? 'Positive: ' : 'Positive: ' + positive + '%'}</p>             {/** Renderizado condicional con ternarias */}
    </div>
  )
}

export default App3