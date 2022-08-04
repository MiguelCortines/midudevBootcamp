import React from 'react'
import ReactDOM from 'react-dom'

// DEFINICION DE COMPONENTE TITLE NORMAL, SIN RESUMIR
/*
const Title = (props) => {
  return <h1>{props.course}</h1>
}
*/

// DEFINICION DE COMPONENTE TITLE INTERMEDIA, UN POCO RESUMIDA PERO AUN CON "return". RECOMENDADA POR MIDU
/*
const Title = ({course}) => {
  return <h1>{course}</h1>
}
*/

// DEFINICION DE COMPONENTE TITLE TOTALMENTE RESUMIDA, EN UNA SOLA LINEA

const Title = ({course}) => <h1>{course}</h1>                // SOLO FUNCIONA PARA COSAS SIMPLES, YA QUE SOLO EVALUA LO PRIMERO

// DEFINICION DE COMPONENTE CONTENT NORMAL, SIN RESUMIR
/*
const Content = (props) => {
  return (
    <div>
      <p>{props.part}{" "}{props.exercise}</p>
    </div>
  )
}
*/

// DEFINICION DE COMPONENTE CONTENT INTERMEDIA, UN POCO RESUMIDA PERO AUN CON "return". RECOMENDADA POR MIDU
/*
const Content = ({part, exercise}) => {
  return (
    <div>
      <p>{part}{" "}{exercise}</p>
    </div>
  )
}
*/

// DEFINICION DE COMPONENTE CONTENT TOTALMENTE RESUMIDA, EN UNA SOLA LINEA

const Content = ({part, exercise}) => <div><p>{part}{" "}{exercise}</p></div>     // EN ESTE CASO FUNCIONA ¿CUANDO NO LO HARIA?


// COMPONENTE App

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course = {course} />

      <Content part = {part1} exercise = {exercises1}/>
      <Content part = {part2} exercise = {exercises2}/>
      <Content part = {part3} exercise = {exercises3}/>

      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
