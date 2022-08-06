// COMPONENTE App2 (USANDO 4 OBJETOS INDEPENDIENTES)

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
    exercises: 20
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 2
  }
  const part3 = {
    name: 'State of a component',
    exercises: 22
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

export default App2     // DEBERIA PONER ";"?