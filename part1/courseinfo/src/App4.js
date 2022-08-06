// COMPONENTE App4 (USANDO 1 OBJETO, DENTRO DEL CUAL HAY UN ARRAY)

const Title = ({course}) => <h1>{course.name}</h1>

const Content = ({parts}) => {  
  return (
    <div>
      {parts.map((part) => <p>{part.name}{" "}{part.exercises}</p>)}
    </div>
  )
}

const Total = ({parts}) => {
  const suma = parts.map(part => part.exercises).reduce((prev, curr) => prev + curr, 0)
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

export default App4     // DEBERIA PONER ";"?