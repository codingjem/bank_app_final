import React, { useState } from "react";

function Deposit({ onDeposit }) {
    const [depositAmount, setDepositAmount] = useState(0);

    const handleAmountChange = (e) => {
        const amountChange = parseFloat(e.target.value); // use parseFloat to turn it to numbers
        setDepositAmount(isNaN(amountChange) ? "" : amountChange);
        console.log(depositAmount);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onDeposit(depositAmount);

        // Needed so it will not refresh the page
    };
    return (
        <div className="">
            <div className="">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="deposit-money">
                        <h3>Deposit Money</h3>
                    </label>
                    <input
                        type="number"
                        id="deposit-money"
                        value={depositAmount}
                        onChange={handleAmountChange}
                    />
                    {depositAmount}
                    <a>
                        <button type="submit">Deposit</button>
                    </a>
                </form>
            </div>
        </div>
    );
}
export default Deposit;
