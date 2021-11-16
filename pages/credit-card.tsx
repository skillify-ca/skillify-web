import React, { useState } from 'react';
import CCWordProblem from '../components/credit-card/CCWordProblem';
import CreditDebitInfo from '../components/credit-card/CreditDebitInfo';
import { Button } from '../components/ui/Button';

export default function CreditCard(props) {
    enum STAGE {
        CreditDebitInfo, //intro with info
        CCWordProblem, //credit card word problem
        DCWordProblem, //debit card word problem
        CCDCMulti, //multiple choice
        CardColorProblem, //credit debit both color problem
    }

    //manages state 
    const [stage, setStage] = useState(STAGE.CreditDebitInfo);
    
    const previousStage = () => {
        if (stage > STAGE.CreditDebitInfo) {
          setStage(stage - 1);
        }
      };
    
      const nextStage = () => {
        if (stage < STAGE.CardColorProblem) {
          setStage(stage + 1);
        }
      };


    const getComponent = (stage: STAGE) => {
        if (stage == STAGE.CreditDebitInfo) {
            return <CreditDebitInfo/>
        } else if (stage == STAGE.CCWordProblem) {
            return <CCWordProblem/>
        }
    }

    return (
        <div className={"bg-white"}>
            <div>{getComponent(stage)}</div>
            <div className="flex flex-row space-x-8 justify-center p-12">
                <Button
                    backgroundColor="red"
                    textColor="white"
                    label="Go Back"
                    onClick={previousStage}
                />
        
                <Button
                    backgroundColor="blue"
                    textColor="white"
                    label="Next"
                    onClick={nextStage}
                />
            </div>
      </div>
    )
};


