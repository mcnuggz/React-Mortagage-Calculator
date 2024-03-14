import React from "react";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
    const bankLoanLimit = 100000;
    const stepCount = 100;
    const currencyType = "$";
    return (
        <div>
            <SliderComponent
                onChange={(e, value) => {
                    setData({
                        ...data,
                        homeValue: value.toFixed(0),
                        downPayment: (0.2 * value).toFixed(0),
                        loanLimit: (0.8 * value).toFixed(0),
                    });
                }}
                defaultValue={data.homeValue}
                min={1000}
                max={bankLoanLimit}
                steps={stepCount}
                unit={currencyType}
                amount={data.homeValue}
                label="Home Value"
                value={data.homeValue}
            />
            <SliderComponent
                onChange={(e, value) => {
                    setData({
                        ...data,
                        loanAmount: (data.homeValue - value).toFixed(0),
                        downPayment: value.toFixed(0),
                    });
                }}
                defaultValue={data.downPayment}
                min={0}
                max={data.homeValue}
                steps={stepCount}
                unit={currencyType}
                amount={data.downPayment}
                label="Down Payment"
                value={data.downPayment}
            />
            <SliderComponent
                onChange={(e, value) => {
                    setData({
                        ...data,
                        downPayment: (data.homeValue - value).toFixed(0),
                        loanLimit: value.toFixed(0),
                    });
                }}
                defaultValue={data.loanAmount}
                min={0}
                max={data.homeValue}
                steps={stepCount}
                unit={currencyType}
                amount={data.loanAmount}
                label="Loan Value"
                value={data.loanAmount}
            />
            <SliderComponent
                onChange={(e, value) => {
                    setData({
                        ...data,
                        interestRate: value,
                    });
                }}
                defaultValue={data.interestRate}
                min={2}
                max={18}
                steps={0.25}
                unit=""
                amount={data.interestRate}
                label="Interest Rate (%)"
                value={data.interestRate}
            />
        </div>
    );
};

export default SliderSelect;
