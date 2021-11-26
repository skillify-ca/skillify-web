import React from 'react'
import { 
    debitCardArray
 } from './DebitCardWordProblemData'
import { DropDownMenu } from './DropDownMenu'

const DebitCardWordProblem = () => {
  return (
    <div className="flex flex-col p-12">
    <div className="flex justify-center mb-12">
        <h1 className="text-green-500 font-bold text-4xl uppercase">Debit Cards</h1>
    </div>
    <div className="flex justify-center mb-12">
        <h3>You <DropDownMenu value="" words={debitCardArray}/> a purchase to your debit card</h3>
    </div>
    <div className="grid grid-cols-3 gap-4 mb-12">
        <span>The <DropDownMenu value="" words={debitCardArray}/> send your <DropDownMenu value="" words={debitCardArray}/> to the store</span>
        <span>insert image here</span>
        <span>
            Money is <DropDownMenu value="" words={debitCardArray}/> from your <DropDownMenu value="" words={debitCardArray}/> account
        </span>
    </div>
    <div>
        <ul>
            <li>Issued by a <DropDownMenu value="" words={debitCardArray}/> and linked to customer's <DropDownMenu value="" words={debitCardArray}/> account</li>
            <li>Spending <DropDownMenu value="" words={debitCardArray}/> by how much is in the bank account</li>
            <li>May be <DropDownMenu value="" words={debitCardArray}/> fees for spending more than what is in the account</li>
            <li>Overdraft <DropDownMenu value="" words={debitCardArray}/> may be available</li>
            <li>A <DropDownMenu value="" words={debitCardArray}/> is required to make a purchase or get money out of <DropDownMenu value="" words={debitCardArray}/></li>
        </ul>
    </div>

</div>
  )
}

export default DebitCardWordProblem
