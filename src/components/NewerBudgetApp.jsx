import React, { useEffect, useState } from "react";
import "./BudgetApp.css";

function NewerBudgetApp(props) {
    const [tabs, setTabs] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editCurrentTab, setEditCurrentTab] = useState(null);
    const [isTotalCost, setIsTotalCost] = useState(0);

    const [buttonClicked, setButtonClicked] = useState(0);

    useEffect(() => {
        totalCost();
    }, [buttonClicked]);

    const clicked = () => {
        setButtonClicked((prevCount) => prevCount + 1);
    }; //

    const addTab = () => {
        setTabs([...tabs, { inputItem: "", inputCost: "" }]);
        console.log(tabs);
    };

    const deleteTab = (index) => {
        const newTabs = [...tabs];
        newTabs.splice(index, 1);
        setTabs(newTabs);
        clicked();
    };

    const editTab = (index) => {
        setIsEditing(true);
        setEditCurrentTab(index);
    }; // use the index as a condition to edit specific tabs

    const totalCost = () => {
        const sum = tabs
            .map((tab) => Number(tab.inputCost))
            .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            ); // use .reduce to add all the number created by the .map
        console.log(sum);
        setIsTotalCost(sum);
        props.lessBalance(Number(sum));
    };

    const updateTotalExpenses = () => {
        setIsEditing(false);
        clicked();
    };

    const inputChange = (index, event) => {
        const { name, value } = event.target;
        const newTabs = [...tabs];
        newTabs[index] = {
            ...newTabs[index],
            [name]: value,
        };
        setTabs(newTabs);
    };

    console.log(tabs);

    return (
        <div>
            <h3>Budget App</h3>
            <h3>Total Expense: {isTotalCost}</h3>
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
            <div>
                {tabs.map((tab, index) => (
                    <div key={index} className="expense-label">
                        <div className="expense-item">
                            {isEditing && editCurrentTab === index ? (
                                <input
                                    type="text"
                                    name="inputItem"
                                    value={tab.inputItem}
                                    onChange={(event) =>
                                        inputChange(index, event)
                                    }
                                />
                            ) : (
                                <div>
                                    {!tab.inputItem ? "Food" : tab.inputItem}
                                </div>
                            )}
                        </div>
                        <div className="cost">
                            {isEditing && editCurrentTab === index ? (
                                <input
                                    type="number"
                                    name="inputCost"
                                    value={tab.inputCost}
                                    onChange={(event) =>
                                        inputChange(index, event)
                                    }
                                />
                            ) : (
                                <div>
                                    {!tab.inputCost ? 0.0 : tab.inputCost}
                                </div>
                            )}
                        </div>
                        <div className="action">
                            {isEditing && editCurrentTab === index ? (
                                <button onClick={updateTotalExpenses}>
                                    Save
                                </button>
                            ) : (
                                <button onClick={() => editTab(index)}>
                                    Edit
                                </button>
                            )}
                            <button onClick={() => deleteTab(index)}>
                                <i className="fa-solid fa-x"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={addTab}>Add Tab</button>
            </div>
        </div>
    );
}

export default NewerBudgetApp;
