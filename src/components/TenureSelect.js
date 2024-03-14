import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";

const TenureSelect = ({ data, setData }) => {
    const handleChange = (e) => {
        setData({ ...data, loanTerm: e.target.value });
    };
    return (
        <FormControl fullWidth>
            <InputLabel id="iTenure">Tenure</InputLabel>
            <Select
                labelId="iTenure"
                id="iTenureSelect"
                value={data.loanTerm ? data.loanTerm : 0}
                label="Tenure"
                defaultValue={5}
                onChange={handleChange}>
                <MenuItem value={5}>5 Years</MenuItem>
                <MenuItem value={10}>10 Years</MenuItem>
                <MenuItem value={15}>15 Years</MenuItem>
                <MenuItem value={20}>20 Years</MenuItem>
                <MenuItem value={25}>25 Years</MenuItem>
            </Select>
        </FormControl>
    );
};

export default TenureSelect;
