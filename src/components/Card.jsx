import React from "react";
import "./Card.css";

function Card({ id, balance, accountNumber, email, password, date }) {
    return (
        <div className="card">
            <h1 className="balance">${!balance ? "0.00" : balance}</h1>
            <div className="card-details">
                <div>
                    <h3 className="accountNumber">
                        {!accountNumber ? "XXXX XXXX XXXX XXXX" : accountNumber}
                    </h3>
                    <h4 className="date">{!date ? "12 / 29" : date}</h4>
                </div>
                <div className="visa-logo">
                    <h3>VISA</h3>
                </div>
            </div>
        </div>
    );
}
export default Card;
