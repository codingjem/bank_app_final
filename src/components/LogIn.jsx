import React, { useState } from "react";
import Card from "./Card";

const accounts = [
    {
        id: 0,
        balance: 252000,
        accountNumber: "4485 7292 7667 4298",
        email: "asuncionjerremyph@gmail.com",
        password: "1234",
        date: "02 / 26",
    },
    {
        id: 1,
        balance: 57400,
        accountNumber: "4824 5157 4243 2126",
        email: "asuncionjem@gmail.com",
        password: "1234",
        date: "05 / 27",
    },
    {
        id: 2,
        balance: 178400,
        accountNumber: "4539 2594 9249 7999",
        email: "jerremyasuncion@gmail.com",
        password: "1234",
        date: "02 / 27",
    },
    {
        id: 3,
        balance: 29400,
        accountNumber: "4786 8362 3630 6147",
        email: "asuncionjerremy01@gmail.com",
        password: "1234",
        date: "08 / 27",
    },
];

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [validAccount, setValidAccount] = useState(true);
    const [userAccount, setUserAccount] = useState({});

    const newDepositBalance = (amount) => {
        const addedBalance = userAccount.balance + amount;
        setUserAccount({ ...userAccount, balance: addedBalance });
        console.log(amount);
        console.log(userAccount);
        console.log(addedBalance);
    };

    const findAccount = () => {
        const userAccountFound = accounts.find((account) => {
            return account.email === email && account.password === password;
        });
        if (!userAccountFound) {
            console.log("User Not Found, You need to Create an Account!");
            setValidAccount(false);
        } else {
            setValidAccount(true);
            setUserAccount(userAccountFound);
        }
    };

    const addEmail = (event) => {
        const enteredEmail = event.target.value;
        setEmail(enteredEmail);

        const regEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        setValidEmail(regEx.test(enteredEmail));
    };
    const addPassword = (event) => {
        const enteredPassword = event.target.value;
        setPassword(enteredPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Needed so it will not refresh the page
    };

    return (
        <div className="log-in-section">
            <form onSubmit={handleSubmit}>
                {!validAccount && (
                    <p>User Not Found, You need to create an Account!</p>
                )}
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={addEmail}
                    required
                />

                {!validEmail && <p>Please enter a valid email address</p>}
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={addPassword}
                />
                <button type="submit" onClick={findAccount}>
                    Log-in
                </button>
            </form>

            <Card
                id={userAccount.id}
                balance={userAccount.balance}
                accountNumber={userAccount.accountNumber}
                email={userAccount.email}
                password={userAccount.password}
                date={userAccount.date}
                onDeposit={newDepositBalance}
            />
        </div>
    );
}

export default LogIn;
