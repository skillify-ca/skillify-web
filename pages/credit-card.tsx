import React, { useState } from 'react';

export default function CreditCard(props) {
    enum STAGE {
        CreditDebitInfo, //intro w/ info
        CCWordProblem, //credit card word problem
        DCWordProblem, //debit card word problem
        CCDCMulti, //multiple choice
        CardColorProblem, //credit debit both color

    }

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
            return 
        } else {

        return (
            <div>
                <h1>hello worl</h1>
            </div>
        )
        }
    };

}

