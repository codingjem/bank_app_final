import React, { useState } from "react";
import "./DashBoard.css";
import Feature from "./Feature";
import Transfer from "./Transfer";
import BudgetApp from "./BudgetApp";
import NewBudgetApp from "./NewBudgetApp";
import NewerBudgetApp from "./NewerBudgetApp";

function DashBoard(props) {
    const {
        id,
        name,
        balance,
        accountNumber,
        email,
        password,
        date,
        addBalance,
        lessBalance,
        withdrawBalance,
        sendToAccount,
        nameCheck,
        receiverBalance,
        moneySent,
    } = props;
    return (
        <>
            <div
                className={"overlay " + (!accountNumber ? "" : "hidden")}
            ></div>
            <div className="card-section">
                <h3>Welcome Back, {!name ? "User" : name.split(" ")[0]}!</h3>
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
                    <Feature feature={addBalance} featureLabel="Deposit" />
                    <Feature
                        feature={withdrawBalance}
                        featureLabel="Withdraw"
                    />
                    <Transfer
                        sendToAccount={sendToAccount}
                        nameCheck={nameCheck}
                        receiverBalance={receiverBalance}
                        moneySent={moneySent}
                        withdrawBalance={withdrawBalance}
                    />
                </div>
                {/* <BudgetApp lessBalance={lessBalance} /> */}
                {/* <NewBudgetApp lessBalance={lessBalance} balance={balance} /> */}
                <NewerBudgetApp lessBalance={lessBalance} balance={balance} />
            </div>
        </>
    );
}
export default DashBoard;
