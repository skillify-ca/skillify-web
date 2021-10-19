import React, { ReactNode, useState } from "react";

const BudgetTable = () => {

  const [ isCorrect, setIsCorrect ] = useState(false);
  const displayAnswer = () => {

  }

  return (
    <div>
     <p>Cassie has $1.50. Does she have enough to buy a roll of electrical tape and a light bulb?</p>
      <p className="italic">Do not round.</p>

      <table className="bg">
        <tr>
          <td>brass clip</td>
          <td>$0.15</td>
        </tr>
        <tr>
          <td>piece of rope</td>
          <td>$0.73</td>
        </tr>
        <tr>
          <td>roll of electrical tape</td>
          <td>$0.89</td>
        </tr>
        <tr>
          <td>light bulb</td>
          <td>$0.67</td>
        </tr>
        <tr>
          <td>ball of twine</td>
          <td>$0.62</td>
        </tr>
      </table>
      <div className="btn-container">
        <button className="btn" onClick={displayAnswer()}>Yes</button>
        <button className="btn" onClick={displayAnswer()}>No</button>
      </div>

      <div className="answer">
        <h1></h1>
      </div>
    </div>
  );
};
export default BudgetTable;
