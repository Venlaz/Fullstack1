const App = () => {
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
      <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
    }
    
  
  const Header = (props) => (
    <h1>{props.name}</h1>
  )
  
  
  
  const Content = (props) => {
    const Iltaa = props.parts.map(function(moi) {
          return (
                  <p> {moi.name}: {moikka.exercises}</p>
          )
      })
      
      return Iltaa
  };
  
  const Total = (props) => {
      
    var moi=0
    
    const lists = props.parts.map(function(moikka) {
       
          
  
      moi = moi + moikka.exercises
    })
  
    return (
      <p>{moi}</p>
    );
    };
  
  
      export default App