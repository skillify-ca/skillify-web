import React from "react";


export interface TrueorFalseProp {
  question?: string;
  answer: boolean;
}


export const TrueorFalse: React.FC<TrueorFalseProp> = ({
    question, answer,
    ...props
  }) => {
    return (
        <div className="items-center" > 
      <p className = "text-5xl text-center">{question}</p>
      <button className="items-center">True</button>
      <button>False</button>    
        </div>
    )
  }
/* trial code
 export const TrueorFalse: React.FC<TrueorFalseProp> = ({
    question,
    ...props
  }) => {
    const [answer, setAnswer] = useState();
    const parse = () => {
        const part = question.split(" ");
        return {
          first: part[0],
          operator: part[1],
          second: part[2],
          sol: part[4],
        };
      }
      var num1 = parseInt(parse().first)
      var num2 = parseInt(parse().second)
      var ans = parseInt(parse().sol)
      switch(parse().operator) {
          case '+': if (num1 + num2 == ans) {
              answer = 
          }
      }
      return (
          <div className = "text-5xl flex flex-wrap"> 
        <p className = "text-center">question</p>
          </div>
      )

      }; */
