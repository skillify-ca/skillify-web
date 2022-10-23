import { Question } from "../../question";
import { Skill } from "../../skill";
import { QuestionType } from "../../questionTypes";
import {
    getRndInteger,
    getRndTenthsDecimal,
    getRndHundredthsDecimal,
    getRandomItemFromArray,
  } from "../../random";
import { CoinType, Coin, CoinProp } from "../../../../components/questionTypes/finance/Coin";
import { randomize } from "./binaryQuestionGenerator";



export type CountingModel = {
    coins: CoinType[];
    };

export type CountingCoinsQuestion = {
    questionType:QuestionType.FINANCE_COUNTING_COINS_BILLS_PROBLEM,
    answer: string,
    text: string,
    countingModel: CountingModel, 
    };

export function generateCountingQuestion() {
    // this below code is for randomizing the coins (between 1-6) that show, using for loop. 
    var coinsArray = [];
    
    var answerCoin = 0;
    for(var i=0;i<6;i++){
        var randomCoinChoice = randomize(1,6);        
        if(randomCoinChoice ==1){
            coinsArray.push(CoinType.PENNY);
            answerCoin += 0.01;
        }
        else if(randomCoinChoice ==2){
            coinsArray.push (CoinType.NICKEL);
            answerCoin += 0.05;
        }
        else if (randomCoinChoice ==3){
            coinsArray.push (CoinType.DIME);
            answerCoin += 0.10; 
        }
        else if (randomCoinChoice ==4){
            coinsArray.push (CoinType.QUARTER);
            answerCoin += 0.25;
        }
        else if (randomCoinChoice ==5){
            coinsArray.push (CoinType.LOONIE);
            answerCoin += 1.00;             
        }
        else if (randomCoinChoice ==6){
            coinsArray.push (CoinType.TOONIE);
            answerCoin += 2.00;
        }
    };
      
    var newCoinModel:CountingModel ={
        coins: coinsArray
    };

  
    var newQuestion:CountingCoinsQuestion = {
        questionType:QuestionType.FINANCE_COUNTING_COINS_BILLS_PROBLEM,
        answer: answerCoin.toFixed(2).toString(),
        text: "",
        countingModel: newCoinModel,
    };

    return newQuestion;

    
}
