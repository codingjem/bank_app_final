import React, { useState } from "react";
import "./Feature.css";

function Feature(props) {
    const { feature, featureLabel } = props;
    const [depositAmount, setDepositAmount] = useState(0);

    const handleAmountChange = (e) => {
        const amountChange = parseFloat(e.target.value); // use parseFloat to turn it to numbers
        setDepositAmount(isNaN(amountChange) ? "" : amountChange);
        console.log(depositAmount);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        feature(depositAmount);

        // Needed so it will not refresh the page
    };
    return (
        <div className="">
            <div className="">
                <form onSubmit={handleSubmit}>
                    <label htmlFor={featureLabel}>
                        <h3>{featureLabel}</h3>
                    </label>
                    <div className="feature-inputs">
                        <input
                            type="number"
                            id={featureLabel}
                            value={depositAmount}
                            onChange={handleAmountChange}
                        />
                        <button type="submit">{featureLabel}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Feature;
