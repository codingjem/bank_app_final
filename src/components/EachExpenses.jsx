import React, { useState, useEffect } from "react";
import "./BudgetApp.css";

function EachExpenses(props) {
    const [expense, setExpense] = useState({ item: "", cost: "" });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        subtractCost();
    }, [expense.cost]); // everytime expense.cost is changed, subtractCost will be called

    const subtractCost = () => {
        const newCost = expense.cost;
        console.log(newCost);
        props.lessBalance(newCost);
    };

    const updateExpenseItem = (e) => {
        setExpense({ ...expense, item: e.target.value });
    };
    const updateExpenseCost = (e) => {
        setExpense({ ...expense, cost: e.target.value });
        subtractCost(e);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };
    const handleDoneEdit = () => {
        setIsEditing(false);
    };
    const deleteExpense = () => {
        props.deleteTabs(props.num);
        // put delete here
    };

    return (
        <div className="expense-label">
            <div className="expense-item">
                {isEditing ? (
                    <input
                        type="text"
                        value={expense.item}
                        onChange={updateExpenseItem}
                    />
                ) : (
                    <div>{!expense.item ? "Food" : expense.item}</div>
                )}
            </div>
            <div className="cost">
                {isEditing ? (
                    <input
                        type="number"
                        value={expense.cost}
                        onChange={updateExpenseCost}
                    />
                ) : (
                    <div>{!expense.cost ? 0.0 : expense.cost}</div>
                )}
            </div>
            {expense.cost}

            <div className="action">
                <button onClick={deleteExpense}>
                    <i className="fa-solid fa-x"></i>
                </button>

                <button onClick={handleEdit}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <button onClick={handleDoneEdit}>
                    <i className="fa-solid fa-check"></i>
                </button>
            </div>
        </div>
    );
}
export default EachExpenses;
