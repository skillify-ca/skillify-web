import React from 'react'
import { DropDownMenu } from './DropDownMenu'
import { 
    chargeArray, creditCardArray
 } from './CreditCardWordProblemData'

const CreditCardWordProblem = () => {
    return (
        <div className="flex flex-col p-12">
            <div className="flex justify-center mb-12">
                <h1 className="text-purple-600 font-bold text-4xl uppercase">Credit Cards</h1>
            </div>
            <div className="flex justify-center mb-12">
                <h3>You <DropDownMenu value="" words={chargeArray}/> a purchase to your credit card</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-12">
                <span><DropDownMenu value="" words={creditCardArray}/> company pays the store</span>
                <span>insert image here</span>
                <span>
                    Credit card componay sends you a <DropDownMenu value="" words={chargeArray}/> and you <DropDownMenu value="" words={chargeArray}/> the credit
                    card company
                </span>
            </div>
            <div>
                <ul>
                    <li>You receive a <DropDownMenu value="" words={chargeArray}/> each month</li>
                    <li>Full bill <DropDownMenu value="" words={chargeArray}/> need to be paid</li>
                    <li><DropDownMenu value="" words={chargeArray}/> is charged on <DropDownMenu value="" words={chargeArray}/> amount</li>
                    <li>a <DropDownMenu value="" words={chargeArray}/> payment is required each month</li>
                    <li><DropDownMenu value="" words={chargeArray}/> is billed not paid on time</li>
                    <li>Spending is limited by a <DropDownMenu value="" words={chargeArray}/></li>
                    <li>You <DropDownMenu value="" words={chargeArray}/> for a credit card and need to be <DropDownMenu value="" words={chargeArray}/></li>
                    <li><DropDownMenu value="" words={chargeArray}/> your credit with <DropDownMenu value="" words={chargeArray}/> credit card use</li>
                </ul>
            </div>

        </div>
    )
}

export default CreditCardWordProblem
