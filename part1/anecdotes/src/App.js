import { useState } from "react";

const MostVotes = ({ vote, anecdotes }) => {
  console.log(vote);

  const arr = Object.values(vote);
  const max = Math.max(...arr);
  const index = arr.indexOf(max);

  return (
    <>
      <p>{anecdotes[index]}</p>
      <p>has {vote[index]} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });
  const handleVote = () => {
    const copyOfVote = { ...vote };
    copyOfVote[selected] += 1;
    setVote({
      ...vote,
      ...copyOfVote,
    });
  };
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <div>
        <button onClick={handleVote}>vote</button>
        <button
          onClick={() =>
            setSelected(Math.floor(Math.random() * anecdotes.length))
          }
        >
          next anecdote
        </button>
      </div>
      <h2>Anecdote with most votes</h2>
      <MostVotes vote={vote} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
