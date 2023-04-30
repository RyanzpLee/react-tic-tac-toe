export const History = ({ currentMove, history, onJump }) => {
  const moves = history.map((squares, move) => {
    console.log(currentMove, move);

    if (currentMove === move) {
      return <li key={move}>You are on move #{move + 1}</li>;
    }
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => onJump(move)}>{description}</button>
      </li>
    );
  });
  return <ol>{moves}</ol>;
};
