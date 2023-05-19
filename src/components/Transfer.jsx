import React, { useEffect, useState } from "react";
import "./Transfer.css";

function Transfer(props) {
    const {
        sendToAccount,
        nameCheck,
        receiverBalance,
        moneySent,
        withdrawBalance,
    } = props;

    const [receiver, setReceiver] = useState("");
    const [moneyTrasfer, setMoneyTransfer] = useState(0);

    const getName = (event) => {
        const name = event.target.value;
        setReceiver(name);
        sendToAccount(name);
    };

    const getAmount = (event) => {
        setMoneyTransfer(event.target.value);
    };

    const sendMoney = () => {
        moneySent(parseFloat(moneyTrasfer));
        withdrawBalance(parseFloat(moneyTrasfer));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Needed so it will not refresh the page
    };
    return (
        <div className="">
            <div className="">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="transfer">
                        <h3>Transfer</h3>
                    </label>
                    <div className="transfer-inputs">
                        <div className="">
                            <input
                                type="text"
                                id="name"
                                placeholder="Receiver's Name"
                                onChange={getName}
                            />
                            {!receiver ? "" : nameCheck}
                        </div>
                        <div className="">
                            <input
                                type="number"
                                id="amount"
                                placeholder="Amount"
                                onChange={getAmount}
                            />
                            {!moneyTrasfer ? "" : "✅"}
                        </div>
                        <button type="submit" onClick={sendMoney}>
                            Transfer
                        </button>
                    </div>
                    {moneyTrasfer} <br></br>
                    {!receiver ? 0.0 : receiverBalance}
                </form>
            </div>
        </div>
    );
}

export default Transfer;
