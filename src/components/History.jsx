export const History = ({ currentMove, history, onJump, isAscending }) => {
  const historyOrder = isAscending ? history : history.slice(0).reverse();

  const moves = historyOrder.map((squares, move) => {
    if (!isAscending) {
      move = historyOrder.length - move - 1;
    }
    if (currentMove === move) {
      return <li key={move}>You are on move #{move + 1}</li>;
    }
    let description;
    if (move > 0) {
      description = `Go to move #${move + 1}`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => onJump(move)}>{description}</button>
      </li>
    );
  });

  return <ol reversed={!isAscending}>{moves}</ol>;
};
