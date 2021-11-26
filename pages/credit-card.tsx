import React, { useState } from 'react';
import CardColorProblem from '../components/credit-card/CardColorProblem';
import CCDCMulti from '../components/credit-card/CCDCMulti';
import CreditCardWordProblem from '../components/credit-card/CreditCardWordProblem';
import CreditDebitInfo from '../components/credit-card/CreditDebitInfo';
import DebitCardWordProblem from '../components/credit-card/DebitCardWordProblem';
import { Button } from '../components/ui/Button';

export default function CreditCard(props) {
    enum STAGE {
        CreditDebitInfo, //intro with info
        CreditCardWordProblem, //credit card word problem
        DebitCardWordProblem, //debit card word problem
        CCDCMulti, //multiple choice
        CardColorProblem, //credit debit both color problem
    }

    //manages state 
    const [stage, setStage] = useState(STAGE.CreditDebitInfo);

    // CreditDebitInfo states
    const [q1, setq1] = useState("");
    const [a1, seta1] = useState("");

    
    
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
        } else if (stage == STAGE.CreditCardWordProblem) {
            return <CreditCardWordProblem/>
        } else if (stage == STAGE.DebitCardWordProblem) {
            return <DebitCardWordProblem/>
        } else if (stage == STAGE.CCDCMulti) {
            return <CCDCMulti/>
        } else if (stage == STAGE.CardColorProblem) {
            return <CardColorProblem/>
        }
    }

    return (
        <div className={"bg-white"}>
            <div>{getComponent(stage)}</div>
            <div className="flex flex-row space-x-8 justify-center">
                <Button
                    label="submit"
                    backgroundColor="blue"
                    textColor="white"/>
            </div>
            {(stage == STAGE.CreditDebitInfo)
                ?
                <div className="flex flex-col min-w-full p-12">
                    <Button
                        backgroundColor="blue"
                        textColor="white"
                        label="Next"
                        onClick={nextStage}
                    />
                </div>
                :
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
            }
        
        </div>
    )
};


