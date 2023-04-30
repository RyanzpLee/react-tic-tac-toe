export const Square = ({ value, onSquareClick, winner }) => {
  return (
    <button className={`square ${winner && 'winner'}`} onClick={onSquareClick}>
      {value}
    </button>
  );
};
