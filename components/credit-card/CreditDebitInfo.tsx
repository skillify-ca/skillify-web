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
} from '../../pages/api/credit-card/CreditDebitInfoData';
import { DropDownMenu } from './DropDownMenu';

export interface DropDownMenuProps {
    word: string,
    answer: string,
}

const CreditDebitInfo = ({ q1, setq1 }) => {

    return (
        <div className="flex flex-col p-12">
            <div className="mb-12 flex justify-center">
                <h1 className="font-extrabold text-8xl uppercase -pl-12 text-yellow-400">
                    <span className="text-purple-500">Credit</span>
                    {" "}vs{" "}
                    <span className="text-green-500">Debit</span>
                </h1>
            </div>

            <div className="mb-12">
                <div className="mb-4 flex justify-center">
                    <h2 className="text-5xl">What's the difference?</h2>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="w-full p-12">
                        <div className="flex md:flex-row flex-col-reverse justify-center">
                            <div className="flex flex-col justify-center bg-purple-200 p-12 mx-12 rounded-2xl">
                                <h2 className="text-4xl mb-4">Credit Cards</h2>
                                <span className="text-2xl">
                                    Allow consumers to <DropDownMenu value={q1} setValue={setq1} words={borrowArray} />
                                    money from a financial institution and <DropDownMenu words={payArray} />
                                    it back later
                                </span>
                            </div>
                            <img className="max-w-xs sm:w-5/6" src="/images/credit-card/credit-card.svg" />
                        </div>
                    </div>
                    <div className="w-full p-12">
                        <div className="flex md:flex-row-reverse flex-col-reverse justify-center">
                            <div className="flex flex-col justify-center bg-green-200 p-12 mx-12 rounded-2xl">
                                <h2 className="text-4xl mb-4">Debit Cards</h2>
                                <span className="text-2xl">
                                    Allow consumers to <DropDownMenu words={spendArray} /> money they have <DropDownMenu words={depositArray} /> in their bank account
                                </span>
                            </div>
                            <img className="max-w-md" src="/images/credit-card/card-with-hand.svg" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex md:flex-row-reverse flex-col justify-center px-12">
                <img className=" max-w-md" src="/images/credit-card/both-card-woman.svg" />
                <div className=" flex flex-col justify-center bg-gray-200 p-12 mx-12 rounded-2xl">
                    <h2 className="text-4xl mb-12">So how are they similar?</h2>
                    <ul className="flex flex-col gap-4 text-2xl">
                        <li>Allow a person to make <DropDownMenu words={purchaseArray} /></li>
                        <li>If card is <DropDownMenu words={lostArray} /> or <DropDownMenu words={stolenArray} />, report import it immediately</li>
                        <li>Hard, <DropDownMenu words={plasticArray} /> card with information stored on a <DropDownMenu words={magneticArray} /> strip.</li>
                        <li>Owner's <DropDownMenu words={nameArray} /> and an <DropDownMenu words={expirationArray} /> date on the card</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CreditDebitInfo
