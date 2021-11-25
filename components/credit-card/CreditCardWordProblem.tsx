import React from 'react'

const CreditCardWordProblem = () => {
    return (
        <div className="flex flex-col p-12">
            <div className="flex justify-center mb-12">
                <h1 className="text-purple-600 font-bold text-4xl uppercase">Credit Cards</h1>
            </div>
            <div className="flex justify-center mb-12">
                <h3>You charge a purchase to your credit card</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-12">
                <span>Credit card compony pays the store</span>
                <span>insert image here</span>
                <span>
                    Credit card componay sends you a bil and you pay the credit
                    card company
                </span>
            </div>
            <div>
                <ul>
                    <li>You receive a bill each month</li>
                    <li>Full bill doesn't need to be paid</li>
                    <li>Interest is charged on unpaid amount</li>
                    <li>a minimum payment is required each month</li>
                    <li>Late fee is billed not paid on time</li>
                    <li>Spending is limited by a credit limit</li>
                    <li>You apply for a credit card and need to be approved</li>
                    <li>Build your credit with responsible credit card use</li>
                </ul>
            </div>

        </div>
    )
}

export default CreditCardWordProblem
