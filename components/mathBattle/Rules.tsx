const Rules = () => {
  return (
    <div>
      <p className="text-lg">Math Battle Rules: </p>
      <ul className="list-disc list-inside">
        <li>
          The winner of the game is the player who gets most of the questions
          from the question set correct. If it is a tie then the winner is who
          completed the question set first.
        </li>
        <li>
          Both Players will have the same number of questions and will be given
          the exact same questions so it is fair.
        </li>
      </ul>
    </div>
  );
};

export default Rules;
