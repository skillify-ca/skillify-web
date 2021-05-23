const GameOver = ({ winner, onRematchClick, onNewGameClick }) => (
  <div className="flex flex-col text-center">
    {winner && <p className="text-lg">{winner} won the game</p>}
    <button className="m-4 border-black border-2" onClick={onRematchClick}>Rematch</button>
    <button className="m-4 border-black border-2" onClick={onNewGameClick}>New Game</button>
  </div>
);

export default GameOver;
