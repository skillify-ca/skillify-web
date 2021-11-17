import React from 'react'

export interface CreditDebitInfoProps {

}

const CreditDebitInfo = () => {
    return (
        <div className="flex flex-col p-12">
            <div className="mb-12 flex justify-center">
                <h1 className="font-extrabold text-6xl uppercase -pl-12">
                    <span className="text-purple-500">Credit</span>
                     {" "}vs{" "}
                    <span className="text-green-500">Debit</span>
                </h1>
            </div>
    
            <div className="mb-12">
                <div className="mb-4 flex justify-center">
                    <h2 className="text-2xl">What's the difference?</h2>
                </div>

                <div className="grid grid-cols-2 gap-11">
                    <div className="w-full bg-purple-200 p-4">
                        <h2 className="text-xl mb-1">Credit Cards</h2>
                        <p>Allow consumers to borrow money from a financial institution and pay it back later</p>
                    </div>
                    <div className="w-full bg-green-200 p-4">
                        <h2 className="text-xl mb-1">Debit Cards</h2>
                        <p>Allow consumers to spend money they have deposited in their bank account</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-evenly">
                <h2 className="text-2xl">How are they the same?</h2>
                <div className=" bg-gray-200 p-4">
                    <ul className="flex flex-col gap-4">
                        <li>Allow a person to make purchases</li>
                        <li>If card is lost or stolen, report import it immediately</li>
                        <li>A hard plastic card with information stored on a magnetic strip.</li>
                        <li>Owner's name and an expiration date on the card</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CreditDebitInfo
