import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

function App() {
    let initValue = 3000;
    const [data, setData] = useState({
        homeValue: initValue,
        downPayment: initValue * 0.2,
        loanAmount: initValue * 0.8,
        loanTerm: 5,
        interestRate: 5,
    });
    return (
        <div className="App" id="App">
            <Navbar />
            <Container maxWidth="xl" sx={{ marginTop: 4 }}>
                <Grid container spacing={5} alignItems="center">
                    <Grid item sx={12} md={6}>
                        <SliderSelect data={data} setData={setData} />
                        <TenureSelect data={data} setData={setData} />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <Result data={data} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
