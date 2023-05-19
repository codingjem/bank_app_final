import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import "./Page.css";

const accounts = [
    {
        id: 0,
        name: "Jerremy Asuncion",
        balance: 252000,
        accountNumber: "4485 7292 7667 4298",
        email: "asuncionjerremyph@gmail.com",
        password: "1234",
        date: "02 / 26",
    },
    {
        id: 1,
        name: "Lemar Gonsay",
        balance: 57400,
        accountNumber: "4824 5157 4243 2126",
        email: "lemargonsay@gmail.com",
        password: "1234",
        date: "05 / 27",
    },
    {
        id: 2,
        name: "Bryan Graganta",
        balance: 178400,
        accountNumber: "4539 2594 9249 7999",
        email: "bryangraganta@gmail.com",
        password: "1234",
        date: "02 / 27",
    },
    {
        id: 3,
        name: "Brix Castro",
        balance: 29400,
        accountNumber: "4786 8362 3630 6147",
        email: "brixcastro@gmail.com",
        password: "1234",
        date: "08 / 27",
    },
];

function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [validAccount, setValidAccount] = useState(true);
    const [userAccount, setUserAccount] = useState({});

    const [numberArray, setNumberArray] = useState([0]);
    const [nameCheck, setNameCheck] = useState("");

    const [receiverAccount, setReceiverAccount] = useState({});

    useEffect(() => {
        final();
    }, [numberArray]);

    const lessBalance = (amount) => {
        setNumberArray([...numberArray, amount]);
    };

    const final = () => {
        console.log(numberArray);
        const newDeduction =
            numberArray[numberArray.length - 2] -
            numberArray[numberArray.length - 1];
        const last = userAccount.balance + newDeduction;
        // console.log(newDeduction);
        // console.log(last + " final balance");
        // console.log(userAccount.balance + " balance");
        // console.log(numberArray[numberArray.length - 1] + "  last");
        // console.log(numberArray[numberArray.length - 2] + "  2nd to last");
        setUserAccount({ ...userAccount, balance: last });
    };

    const addBalance = (amount) => {
        const addedBalance = userAccount.balance + amount;
        setUserAccount({ ...userAccount, balance: addedBalance });
        // console.log(amount);
        // console.log(typeof userAccount.balance);
        // console.log(addedBalance);
    };

    const withdrawBalance = (amount) => {
        console.log("Amount from Budget" + amount);
        const subtractedBalance = userAccount.balance - amount;
        setUserAccount({ ...userAccount, balance: subtractedBalance });
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

    //TRANSFER MONEY TO OTHER ACCOUNTS

    const sendToAccount = (name) => {
        const receiver = accounts.find(
            (account) => account.name.toLowerCase() === name.toLowerCase()
        );
        // console.log(receiver.name);
        // console.log(name);
        // console.log(typeof name);

        if (!receiver) {
            console.log(
                "User not found!, please check if you misstype something!"
            );
            setNameCheck("❎");
        } else {
            console.log(
                "You are about to send money to " +
                    receiver.name +
                    " please check if this is his bank account!" +
                    receiver.accountNumber
            );
            setNameCheck("✅");
            setReceiverAccount(receiver);
        }
    };

    const moneySent = (money) => {
        const addedBalance =
            parseFloat(receiverAccount.balance) + parseFloat(money);
        setReceiverAccount({ ...receiverAccount, balance: addedBalance });
        console.log(money + " is money sent");
        console.log(typeof money);
        console.log(typeof parseFloat(receiverAccount.balance));
    };

    return (
        <div className="page">
            <div
                className={
                    "log-in-section " +
                    (!userAccount.accountNumber ? "" : "hidden")
                }
            >
                <form onSubmit={handleSubmit}>
                    {!validAccount && <p>User Not Found!</p>}
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={addEmail}
                            required
                        />
                    </div>

                    {!validEmail && <p>Please enter a valid email address</p>}
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={addPassword}
                        />
                    </div>
                    <button type="submit" onClick={findAccount}>
                        Log-in
                    </button>
                </form>
            </div>
            <DashBoard
                id={userAccount.id}
                name={userAccount.name}
                balance={userAccount.balance}
                accountNumber={userAccount.accountNumber}
                email={userAccount.email}
                password={userAccount.password}
                date={userAccount.date}
                addBalance={addBalance}
                lessBalance={lessBalance}
                withdrawBalance={withdrawBalance}
                sendToAccount={sendToAccount}
                nameCheck={nameCheck}
                receiverBalance={receiverAccount.balance}
                moneySent={moneySent}
            />
        </div>
    );
}

export default Page;
