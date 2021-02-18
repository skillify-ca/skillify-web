const Rules = () => {
  return (
    <div>
      <p className="text-base">Rules: </p>
      <ul className="list-disc list-inside">
        <li>
          The winner of the game is the player who completes a row, column or
          diagonal that also adds up to a target number.
        </li>
        <li>
          All game pieces are shared by both players. The winner only needs to
          place the last piece, not all pieces in the winning row, column or
          diagonal.
        </li>
      </ul>
    </div>
  );
};

export default Rules;
