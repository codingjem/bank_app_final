import React, { useState } from "react";
import "./Card.css";
import Deposit from "./Deposit";
import BudgetApp from "./BudgetApp";

function Card({
    id,
    balance,
    accountNumber,
    email,
    password,
    date,
    onDeposit,
}) {
    return (
        <div className="card-section">
            <div className="card">
                <h1 className="balance">
                    ${!balance ? "0.00" : balance.toLocaleString()}
                </h1>
                <div className="card-details">
                    <div>
                        <h3 className="accountNumber">
                            {!accountNumber
                                ? "XXXX XXXX XXXX XXXX"
                                : accountNumber}
                        </h3>
                        <h4 className="date">{!date ? "12 / 29" : date}</h4>
                    </div>
                    <div className="visa-logo">
                        <h3>VISA</h3>
                    </div>
                </div>
            </div>
            <div className="bank-features">
                <Deposit onDeposit={onDeposit} />
            </div>
            <BudgetApp />
        </div>
    );
}
export default Card;
