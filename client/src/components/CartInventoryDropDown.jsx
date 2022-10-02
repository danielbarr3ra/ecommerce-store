import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CartInventoryDropDown = () => {


    /**
     * TODO update handle change to update context from the server side
     */

    const handleChange = () => {
        return alert('hey this hould be updated ')
    }
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={'age'}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}

export default CartInventoryDropDown