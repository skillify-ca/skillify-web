import React from 'react'

const DebitCardWordProblem = () => {
  return (
    <div className="flex flex-col p-12">
    <div className="flex justify-center mb-12">
        <h1 className="text-green-500 font-bold text-4xl uppercase">Debit Cards</h1>
    </div>
    <div className="flex justify-center mb-12">
        <h3>You charge a purchase to your debit card</h3>
    </div>
    <div className="grid grid-cols-3 gap-4 mb-12">
        <span>The bank send your money to the store</span>
        <span>insert image here</span>
        <span>
            Money is deducted from your checking account
        </span>
    </div>
    <div>
        <ul>
            <li>Issued by a bank and linked to customer's bank account</li>
            <li>Spending limited by how much is in the bank account</li>
            <li>May be overdraft fees for spending more than what is in the account</li>
            <li>Overdraft protection may be available</li>
            <li>A PIN is required to make a purchase or get money out of ATM</li>
        </ul>
    </div>

</div>
  )
}

export default DebitCardWordProblem
