import React from "react";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
    const { homeValue, loanAmount, loanTerm, interestRate } = data;

    // Holy math Batman!
    const totalLoanMonths = loanTerm * 12;
    const interestPerMonth = interestRate / 100 / 12;
    const monthlyPaymentAmount =
        (loanAmount *
            interestPerMonth *
            (1 + interestPerMonth) ** totalLoanMonths) /
        ((1 + interestPerMonth) ** totalLoanMonths - 1);
    const totalGeneratedInterest = (
        monthlyPaymentAmount * totalLoanMonths -
        loanAmount
    ).toFixed(2);

    // Setting up the Pie
    // mmmm.... pie

    const pieChartData = {
        labels: ["Principal", "Interest"],
        datasets: [
            {
                label: "Ratio of Principle and Interest",
                data: [homeValue, totalGeneratedInterest],
                backgroundColor: [
                    "rgba(35, 206, 107,0.2)",
                    "rgba(255, 99, 132,0.2)",
                ],
                borderColor: ["rgb(35, 206, 107)", "rgb(255, 99, 132)"],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Stack gap={3}>
            <Typography textAlign="center" variant="h5">
                Monthly Payment: $ {monthlyPaymentAmount.toFixed(2)}
            </Typography>
            <Stack direction="row" justifyContent="center">
                <div>
                    <Pie data={pieChartData} />
                </div>
            </Stack>
        </Stack>
    );
};

export default Result;
