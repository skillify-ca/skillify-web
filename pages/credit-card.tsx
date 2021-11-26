import React, { useState } from 'react';
import CardColorProblem from '../components/credit-card/CardColorProblem';
import CCDCMulti from '../components/credit-card/CCDCMulti';
import CCWordProblem from '../components/credit-card/CCWordProblem';
import CreditDebitInfo from '../components/credit-card/CreditDebitInfo';
import DCWordProblem from '../components/credit-card/DCWordProblem';
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
        } else if (stage == STAGE.CCWordProblem) {
            return <CCWordProblem/>
        } else if (stage == STAGE.DCWordProblem) {
            return <DCWordProblem/>
        } else if (stage == STAGE.CCDCMulti) {
            return <CCDCMulti/>
        } else if (stage == STAGE.CardColorProblem) {
            return <CardColorProblem/>
        }
    }

    return (
        <div className={"bg-white"}>
            <div>{getComponent(stage)}</div>
<<<<<<< Updated upstream
                {(stage == STAGE.CreditDebitInfo)
                    ?
                    <div className="flex flex-col min-w-full p-12">
                        <Button
                            backgroundColor="blue"
                            textColor="white"
                            label="Start"
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
=======
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
>>>>>>> Stashed changes
        
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


