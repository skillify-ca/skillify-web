import React from 'react'

export interface CreditDebitInfoProps {

}

const CreditDebitInfo = () => {
    return (
        <div>
            <h1>Credit Card / Debit Card Info</h1>
    
            <div>
                <h2>Credit Card</h2>
                <p>
                    Credit cards all consumers to borrow money
                    from a financial institution and pay it back
                    later
                </p>
            </div>

            <div>
                <h2>Debit Card</h2>
                <p>
                    Debit cards allow consumers to spend money
                    they have deposited in their bank account
                </p>
            </div>

            <div>
                <h2>Both Credit Cards and Debit Cards</h2>
                <ul>
                    <li>Allow a person to make purchases</li>
                    <li>If card is lost or stolen, report import it immediately</li>
                    <li>A hard plastic card with information stored on a magnetic strip.</li>
                    <li>Owner's name and an expiration date on the card</li>

                </ul>
            </div>
        </div>
    )
}

export default CreditDebitInfo
