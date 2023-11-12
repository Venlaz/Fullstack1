const course = 'Half Stack application development'
const exercises1 = 10
const exercises2 = 7
const exercises3 = 14
 return (
    <div>
      <Header course={course} />
      <Content/>
   <Total 
       exercises1={exercises1}
       exercises2={exercises2}
       exercises3={exercises3}
      />
    </div>
  );

const Header =({course}) => {
  return(
    <h1>{course}</h1>
  );
};
const Content = () => {
  const lists = PartLists.map(
      function(list) {
          return (
              <div>
                  <Part part={list.part} exercises={list.exercises} />
              </div>
          )
      })
  return lists
};
const Part = (props) => {
return(
  <p>
    {props.part} {props.exercises}
  </p>
);
};
const PartLists= [
  {
      id: 1,
      part: 'Fundamentals of React',
      exercises: 10
  },
  {
      id: 2,
      part: 'Using props to pass data',
      exercises: 7
  },
  {
      id: 3,
      part: 'State of a component',
      exercises: 14
  }
];
  const Total = ({exercises1, exercises2, exercises3})=>{
return(
<div> 
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  </div>
);
};
export default App