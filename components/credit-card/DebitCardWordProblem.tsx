import React from 'react'

import { 
    makeArray,
    bankArray,
    moneyArray,
    deductedArray,
    bankArray2,
    limitedArray,
    overdraftArray,
    protectionArray,
    pinArray,
    atmArray,
    checkingArray,
    bankArray3,
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
                <span className="text-4xl">You <DropDownMenu key={makeArray[0]} value="make" words={makeArray}/> a purchase to your debit card</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="px-12">
                    <img className="" src="../../images/credit-card/debit-piggybank.svg"></img>
                </div>
                <div className="text-2xl">
                    <div className="flex justify-center p-8 bg-green-200 rounded-2xl mx-12">
                        <span>The <DropDownMenu key={bankArray[0]} value="bank" words={bankArray}/> send your <DropDownMenu key={moneyArray[0]} value="money" words={moneyArray}/> to the store</span>
                    </div>
                    <div className="flex justify-center p-8 bg-green-300 rounded-2xl mx-12 my-4">
                        <span>Money is <DropDownMenu key={deductedArray[0]} value="deducted" words={deductedArray}/> from your <DropDownMenu key={checkingArray[0]} value="checking" words={checkingArray}/> account</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col-reverse gap-12 items-center">
            <img className="max-w-sm p-4" src="../../images/credit-card/debit-wallet.svg"></img>
            <ul className="flex flex-col gap-8 p-12 text-2xl">
                <li>Issued by a <DropDownMenu key={bankArray2[1]} value="bank" words={bankArray2}/> and linked to customer's <DropDownMenu key={bankArray3[2]} value="bank" words={bankArray3}/> account</li>
                <li>Spending <DropDownMenu key={limitedArray[0]} value="limited" words={limitedArray}/> by how much is in the bank account</li>
                <li>May be <DropDownMenu key={overdraftArray[0]} value="overdraft" words={overdraftArray}/> fees for spending more than what is in the account</li>
                <li>Overdraft <DropDownMenu key={protectionArray[0]} value="protection" words={protectionArray}/> may be available</li>
                <li>A <DropDownMenu key={pinArray[0]} value="pin" words={pinArray}/> is required to make a purchase or get money out of <DropDownMenu key={atmArray[0]} value="atm" words={atmArray}/></li>
            </ul>
            <img className="max-w-sm p-4" src="../../images/credit-card/debit-vault.svg"></img>
        </div>
    </div>
  )
}

export default DebitCardWordProblem
