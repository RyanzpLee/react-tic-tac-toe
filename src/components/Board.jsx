import { Square } from './Square';

export const Board = ({ xIsNext, squares, onPlay, currentMove }) => {
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  };

  const { winner, line } = calculateWinner(squares) || {};
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (currentMove === 9) {
    status = 'Draw';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      {renderBoard(squares, handleClick, line)}
    </>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: line };
    }
  }
  return null;
};

const renderBoard = (squares, handleClick, line) => {
  let rows = [];
  for (let i = 0; i < 3; i++) {
    let columns = [];
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      columns.push(
        <Square
          winner={line && line.includes(index)}
          key={`square-${index}`}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        ></Square>
      );
    }
    rows.push(
      <div key={`board-row-${i}`} className="board-row">
        {columns}
      </div>
    );
  }
  return rows;
};
