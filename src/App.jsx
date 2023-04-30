import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import { History } from './components/History';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const handleJumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-history">
        <History currentMove={currentMove} history={history} onJump={handleJumpTo} />
      </div>
    </div>
  );
}

export default App;
