import React from 'react'
import { 
    borrowArray,
    payArray,
    spendArray,
    depositArray,
    purchaseArray,
    lostArray,
    stolenArray,
    plasticArray,
    magneticArray,
    nameArray,
    expirationArray,
 } from './CreditDebitInfoData';
import { DropDownMenu } from './DropDownMenu';


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
                        <div>
                            Allow consumers to <DropDownMenu value="borrow" words={borrowArray}/> money from a financial institution and <DropDownMenu value="pay" words={payArray}/> it back later
                        </div>
                    </div>
                    <div className="w-full bg-green-200 p-4">
                        <h2 className="text-xl mb-1">Debit Cards</h2>
                        <div>
                            Allow consumers to <DropDownMenu value="spend" words={spendArray}/> money they have <DropDownMenu value="deposit" words={depositArray}/> in their bank account
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-evenly">
                <h2 className="text-2xl">How are they the same?</h2>
                <div className=" bg-gray-200 p-4">
                    <ul className="flex flex-col gap-4">
                        <li>Allow a person to make <DropDownMenu value="purchase" words={purchaseArray}/></li>
                        <li>If card is <DropDownMenu value="lost" words={lostArray}/> or <DropDownMenu value="stolen" words={stolenArray}/>, report import it immediately</li>
                        <li>Hard, <DropDownMenu value="plastic" words={plasticArray}/> card with information stored on a <DropDownMenu value="magnetic" words={magneticArray}/> strip.</li>
                        <li>Owner's <DropDownMenu value="name" words={nameArray}/> and an <DropDownMenu value="expiration" words={expirationArray}/> date on the card</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CreditDebitInfo
