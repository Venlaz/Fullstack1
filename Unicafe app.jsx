import React, { useState } from 'react';

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (type) => () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const all = feedback.good + feedback.neutral + feedback.bad;
  const average = all > 0 ? (feedback.good - feedback.bad) / all : 0;
  const positive = all > 0 ? (feedback.good / all) * 100 : 0;

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    setVotes((prevVotes) => {
      const newVotes = [...prevVotes];
      newVotes[selected] += 1;
      return newVotes;
    });
  };

  const mostVotedIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Statistiikka</h1>
      {Object.entries(feedback).map(([type, count]) => (
        <Button
          key={type}
          text={type.charAt(0).toUpperCase() + type.slice(1)}
          onClick={handleFeedbackClick(type)}
        />
      ))}

      <h2>Palautteen antaneet</h2>
      {all === 0 ? (
        <p>Ei vielä palautetta</p>
      ) : (
        <div>
          <table>
            <tbody>
              {Object.entries(feedback).map(([type, count]) => (
                <StatisticLine key={type} text={type} value={count} />
              ))}
              <StatisticLine text="Yhteensa" value={all} />
              <StatisticLine text="Keskiarvo" value={average.toFixed(2)} />
              <StatisticLine text="Positiivisia" value={`${positive.toFixed(2)}%`} />
            </tbody>
          </table>
        </div>
      )}

      <h1>Ohjelmointianekdootti</h1>
      <p>{anecdotes[selected]}</p>
      <p>Ääniä: {votes[selected]}</p>
      <Button text="Aanesta tata" onClick={handleVote} />
      <Button text="Seuraava anekdootti" onClick={handleNextAnecdote} />

      <h2>Eniten aania saanut anekdootti</h2>
      {votes[mostVotedIndex] > 0 ? (
        <div>
          <p>{anecdotes[mostVotedIndex]}</p>
          <p>Aania: {votes[mostVotedIndex]}</p>
        </div>
      ) : (
        <p>Ei vielä aania</p>
      )}
    </div>
  );
};

export default App;