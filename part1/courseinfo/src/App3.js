// COMPONENTE App3 (USANDO 2 OBJETOS, 1 DE LOS CUALES ES UN ARRAY)

const Title = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => {  
  return (
    <div>
      {parts.map((part) => <p>{part.name}{" "}{part.exercises}</p>)} {/** NO ENTIENDO ESTA SINTAXIS. ¿ES LA FORMA RESUMIDA Y HAY UN RETURN IMPLICITO EN LA FLECHA =>? */}
    </div>
  )
}

const Total = ({parts}) => {
  const suma = parts.map(part => part.exercises).reduce((prev, curr) => prev + curr, 0)  // LA SINTAXIS AQUI ES DIFERENTE A CONTENT. NO SE PONERLO DENTRO DEL RETURN ¿OTRO RETURN IMPLICITO?
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
      exercises: 30
    },
    {
      name: 'Using props to pass data',
      exercises: 3
    },
    {
      name: 'State of a component',
      exercises: 33
    },
    {
      name: 'Additional field',
      exercises: 3.3
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

export default App3     // DEBERIA PONER ";"?