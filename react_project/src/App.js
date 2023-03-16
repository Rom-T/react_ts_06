const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  // return (
  //   <p>
  //     {props.part1} {props.excercises1}
  //   </p>
  //   <p>
  //     {props.part2} {props.excercises2}
  //   </p>
  //   <p>
  //     {props.part3} {props.excercises3}
  //   </p>
  // )
  return (
    <p>
      {props.part} {props.excercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of excercises {props.excercises}</p>
    // <p>Number of excercises {props.excercises1 + props.excercises2 + props.excercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const excercises2 = 7
  const part3 = 'State of a component'
  const excercises3 = 14
  return (
    <div>
      <Header course={course} />
      {/* <Content part1={part1} exercises1={exercises1}
               part2={part2} exercises2={exercises2}
               part3={part3} exercises3={exercises3}
      /> */}
      <Content part={part1} excercises={excercises1}/>
      <Content part={part2} excercises={excercises2}/>
      <Content part={part3} excercises={excercises3}/>
      <Total excercises={excercises1 + excercises2 + excercises3} />
      {/* <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} /> */}
    </div>
  )
}

export default App;