import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  /*
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      
      {
        name: 'Reactin perusteet',
        exercises: 10,
        id: 1
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
        id: 2
      },
      {
        name: 'Komponenttien tila',
        exercises: 14,
        id: 3
      },
      {
        name: 'Elektroniikan perusteet',
        exercises: 9,
        id: 4
      } 
    ]
  }

*/
  
 /*
  const total = course.parts.reduce( (s, p) => {
    
    console.log('what is happening', s, p)
    
    return 
  })
*/



  
  return (
    <div>
     
      <Course courses={courses} />


    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))