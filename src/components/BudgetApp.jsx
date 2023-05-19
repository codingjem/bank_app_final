import React, { useState } from "react";
import "./BudgetApp.css";
import EachExpenses from "./EachExpenses";

function BudgetApp(props) {
    const [expenseTabs, setExpenseTabs] = useState([]);

    // const deleteExpenseTabs = (id) => {
    //     const remainingTabs = expenseTabs.filter((tab) => {
    //         return tab.num !== id;
    //     });
    //     // const tabs = [...expenseTabs];
    //     // tabs.splice(id, 1);
    //     // console.log(remainingTabs);
    //     // console.log(id + " clicked");
    //     setExpenseTabs(remainingTabs);
    //     console.log(id);
    // };

    const deleteExpenseTabs = (id) => {
        const remainingTabs = expenseTabs.filter((tab) => {
            return tab.props.id !== id;
        });
        setExpenseTabs(remainingTabs);
    };

    const addExpenseTabs = () => {
        const id = expenseTabs.length;
        setExpenseTabs([
            ...expenseTabs,
            <EachExpenses
                key={id}
                lessBalance={props.lessBalance}
                id={id}
                num={id}
                deleteTabs={() => {
                    deleteExpenseTabs(id);
                }}
            />,
        ]);
        // console.log(id);
    };

    return (
        <div className="">
            <h3>Budget App</h3>
            <div className="expense-label">
                <div className="expense-item">
                    <h4>Expense Name</h4>
                </div>
                <div className="cost">
                    <h4>Cost</h4>
                </div>
                <div className="action">
                    <h4>Action</h4>
                </div>
            </div>
            {expenseTabs}
            <a onClick={addExpenseTabs}>
                <button>Add Expense</button>
            </a>
        </div>
    );
}
export default BudgetApp;
