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



export type CountingCoinsQuestion = {
    questionType: QuestionType.FINANCE_COUNTING_COINS_BILLS_PROBLEM;
    //coins: CoinType[];
    answer: string;
    countingModel: CountingModel;
    text: string;
   };


export type CountingModel = {
    coins: CoinType[];
    };


export function generateCountingQuestion() {
    // this below code is for randomizing the coins that show, need that, also need to limit value. look at for loops. 
    var coinsArray = [];
    
    var answerCoin = 0;
    for(var i=0;i<6;i++){
        var randomNumber = randomize(1,6);        
        if(randomNumber ==1){
            coinsArray.push(CoinType.PENNY);
            answerCoin += 0.01;
        }
        else if(randomNumber ==2){
            coinsArray.push (CoinType.NICKEL);
            answerCoin += 0.05;
        }
        else if (randomNumber ==3){
            coinsArray.push (CoinType.DIME);
            answerCoin += 0.10; 
        }
        else if (randomNumber ==4){
            coinsArray.push (CoinType.QUARTER);
            answerCoin += 0.25;
        }
        else if (randomNumber ==5){
            coinsArray.push (CoinType.LOONIE);
            answerCoin += 1.00;             
        }
        else if (randomNumber ==6){
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
