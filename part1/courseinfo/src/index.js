import React from 'react'
import ReactDOM from 'react-dom'
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';


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
/*
const Title = ({course}) => <h1>{course}</h1>                // SOLO FUNCIONA PARA COSAS SIMPLES, YA QUE SOLO EVALUA LO PRIMERO
*/

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
/*
const Content = ({part, exercise}) => <div><p>{part}{" "}{exercise}</p></div>     // EN ESTE CASO FUNCIONA ¿CUANDO NO LO HARIA?
*/

// COMPONENTE App1
/*
const App1 = () => {
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
*/

// ReactDOM.render(<App1 />, document.getElementById('root'))



// COMPONENTE App2 (USANDO 4 OBJETOS INDEPENDIENTES)
/*
const Title = ({course}) => <h1>{course}</h1>

const Content = ({part, exercise}) => {
  return (
    <div>
      <p>{part}{" "}{exercise}</p>
    </div>
  )
}

const App2 = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Title course = {course} />

      <Content part = {part1.name} exercise = {part1.exercises}/>
      <Content part = {part2.name} exercise = {part2.exercises}/>
      <Content part = {part3.name} exercise = {part3.exercises}/>

      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

ReactDOM.render(<App2 />, document.getElementById('root'))
*/



// COMPONENTE App3 (USANDO 2 OBJETOS, 1 DE LOS CUALES ES UN ARRAY)
/*
const Title = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => {  
  return (
    <div>
      {parts.map((part) => <p>{part.name}{" "}{part.exercises}</p>)} {/** NO ENTIENDO ESTA SINTAXIS. ¿ES LA FORMA RESUMIDA Y HAY UN RETURN IMPLICITO EN LA FLECHA =>? }
    </div>
  )
}

const Total = ({parts}) => {
  const suma = parts.map(part => part.exercises).reduce((prev, curr) => prev + curr, 0)  // LA SINTAXIS AQUI ES DIFERENTE A CONTENT. NO SE PONERLO DENTRO DEL RETURN, DE HECHO ¿OTRO RETURN IMPLICITO?
  return (
    <div>
      <p>Number of exercises {suma}</p>
    </div>
  )
}

const App3 = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
    {
      name: 'Additional field',
      exercises: 22
    }
  ]

  return (
    <div>
      <Title course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App3 />, document.getElementById('root'))
*/




// COMPONENTE App4 (USANDO 1 OBJETO, DENTRO DEL CUAL HAY UN ARRAY)

const Title = ({course}) => <h1>{course.name}</h1>

const Content = ({parts}) => {  
  return (
    <div>
      {parts.map((part) => <p>{part.name}{" "}{part.exercises}</p>)} {/** NO ENTIENDO ESTA SINTAXIS. ¿ES LA FORMA RESUMIDA Y HAY UN RETURN IMPLICITO EN LA FLECHA =>? */}
    </div>
  )
}

const Total = ({parts}) => {
  const suma = parts.map(part => part.exercises).reduce((prev, curr) => prev + curr, 0)  // LA SINTAXIS AQUI ES DIFERENTE A CONTENT. NO SE PONERLO DENTRO DEL RETURN, DE HECHO ¿OTRO RETURN IMPLICITO?
  return (
    <div>
      <p>Number of exercises {suma}</p>
    </div>
  )
}

const App4 = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Title course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

ReactDOM.render(<App4 />, document.getElementById('root'))