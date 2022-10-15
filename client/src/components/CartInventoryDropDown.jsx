import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CartInventoryDropDown = ({ cartData }) => {


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
                {
                    cartData.map((row) =>
                        (<MenuItem key={row.id} value={row.id}>{row.title}</MenuItem>)
                    )
                }
            </Select>
        </FormControl>
    )
}

export default CartInventoryDropDown