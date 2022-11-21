import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CartInventoryDropDown = ({ cartData }) => {
    const [activeCartID, setActiveCart] = useState();
    const [activeProducts, setActiveProducts] = useState([]);

    const handleCartChange = (event) => {
        console.log(`event ${event.target.value}`) // THE VALUE BEING PASSED IS THE ID TO THEN FETCH
        setActiveCart(event.target.value)
    }

    const handleProductChange = (event) => {
        console.log(`event ${event}`)
        setActiveProducts(event.target.value)
    }
    // will get updated everytime the active cart changes
    useEffect(
        () => {
            async function fetchItemsCart() {
                if (activeCartID) {
                    let url = `/api/shppingCarts/${activeCartID}/products`
                    let items = fetch(url, { method: "GET" }).then((res) => res.json())
                    return items
                }
                return [];
            }
            let products = fetchItemsCart()
            console.log('debugging useEffect')
            console.log(activeCartID)
            setActiveProducts(products)
        }, [activeCartID])
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="shoppingCart-select-label">ShoppingCart</InputLabel>
                <Select
                    labelId="shoppingCart-dropdwon"
                    id="shoppingCart-dropdown-select"
                    value={''}
                    label="Cart"
                    onChange={handleCartChange}
                >
                    {cartData.map((row) => (<MenuItem key={row.id} value={row.id}>{row.title}</MenuItem>)
                    )}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="cartProducts-select-label">ShoppingCart</InputLabel>
                <Select
                    labelId="cartProducts-dropdwon"
                    id="shoppingCart-dropdown-select"
                    value={''}
                    label="CartProducts"
                    onChange={handleProductChange}
                >

                </Select>
            </FormControl>
        </>
    )
}

export default CartInventoryDropDown