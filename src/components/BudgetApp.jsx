import React, { useState } from "react";
import "./BudgetApp.css";

function BudgetApp() {
    return (
        <div className="">
            <h3>Budget App</h3>
            <div className="budget-app">
                <div className="expense-item">
                    <h5>Expense Name</h5>
                </div>
                <div className="cost">
                    <h5>Cost</h5>
                </div>
                <div className="action">
                    <h5>Action</h5>
                </div>
            </div>
        </div>
    );
}
export default BudgetApp;
