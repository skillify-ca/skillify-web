import React from 'react'
import { 
    debitCardArray
 } from './DebitCardWordProblemData'
import { DropDownMenu } from './DropDownMenu'

const DebitCardWordProblem = () => {
  return (
    <div className="flex flex-col p-12">
        <div className="mb-12">
            <div className="flex justify-center mb-12">
                <h1 className="text-green-500 font-bold text-5xl md:text-7xl uppercase">Debit Cards</h1>
            </div>
            <div className="flex justify-center mb-12">
                <span className="text-4xl">You <DropDownMenu value="" words={debitCardArray}/> a purchase to your debit card</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="px-12">
                    <img className="" src="../../images/credit-card/debit-piggybank.svg"></img>
                </div>
                <div className="text-2xl">
                    <div className="flex justify-center p-8 bg-green-200 rounded-2xl mx-12">
                        <span>The <DropDownMenu value="" words={debitCardArray}/> send your <DropDownMenu value="" words={debitCardArray}/> to the store</span>
                    </div>
                    <div className="flex justify-center p-8 bg-green-300 rounded-2xl mx-12 my-4">
                        <span>Money is <DropDownMenu value="" words={debitCardArray}/> from your <DropDownMenu value="" words={debitCardArray}/> account</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col-reverse gap-12 items-center">
            <img className="max-w-sm p-4" src="../../images/credit-card/debit-wallet.svg"></img>
            <ul className="flex flex-col gap-8 p-12 text-2xl">
                <li>Issued by a <DropDownMenu value="" words={debitCardArray}/> and linked to customer's <DropDownMenu value="" words={debitCardArray}/> account</li>
                <li>Spending <DropDownMenu value="" words={debitCardArray}/> by how much is in the bank account</li>
                <li>May be <DropDownMenu value="" words={debitCardArray}/> fees for spending more than what is in the account</li>
                <li>Overdraft <DropDownMenu value="" words={debitCardArray}/> may be available</li>
                <li>A <DropDownMenu value="" words={debitCardArray}/> is required to make a purchase or get money out of <DropDownMenu value="" words={debitCardArray}/></li>
            </ul>
            <img className="max-w-sm p-4" src="../../images/credit-card/debit-vault.svg"></img>
        </div>
    </div>
  )
}

export default DebitCardWordProblem
