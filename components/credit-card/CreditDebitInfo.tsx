import React from 'react'
import { WordBankData } from './CreditDebitInfoData';

export interface CreditDebitInfoProps {

}

const CreditDebitInfo = () => {

    function allowDrop(ev) {
        ev.preventDefault();
    }
    function drag(ev) {
        ev.dataTransfer.setData("Text", ev.target.id);
    }
    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");

        ev.target.parentNode.replaceChild(document.getElementById(data), ev.target);
        document.getElementById(data).className="";
    }

    function whiteSpace() {
        return (
            <>
                {" "}
                <div className="bg-white inline-block border-b-2 h-6 w-14 border-black" onDrop={drop} onDragOver={allowDrop}></div>
                {" "}
            </>
        )
    }

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
                            Allow consumers to {whiteSpace()} money from a financial institution and {whiteSpace()} it back later
                        </div>
                    </div>
                    <div className="w-full bg-green-200 p-4">
                        <h2 className="text-xl mb-1">Debit Cards</h2>
                        <div>
                            Allow consumers to {whiteSpace()} money they have {whiteSpace()} in their bank account
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <div>
                    <h3 className="text-2xl mb-4">Word Bank</h3>
                    <div className="grid grid-cols-3 gap-4 pr-6">
                        {WordBankData.map((item) => (
                        <div key={item.id} className="bg-gray-200 flex justify-center">
                            <span className="m-5 p-3 text-xl" id={item.word} draggable="true" onDragStart={drag}>{item.word}</span>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="pl-6">
                    <h2 className="text-2xl mb-4">How are they the same?</h2>
                    <div className=" bg-gray-200 p-4">
                        <ul className="flex flex-col gap-4">
                            <li>Allow a person to make {whiteSpace()}</li>
                            <li>If card is {whiteSpace()} or {whiteSpace()}, report import it immediately</li>
                            <li>Hard, {whiteSpace()} card with information stored on a {whiteSpace()} strip.</li>
                            <li>Owner's {whiteSpace()} and an {whiteSpace()} date on the card</li>
                        </ul>
                    </div>
                </div>
                  
            </div>
        </div>
    )
}

export default CreditDebitInfo
