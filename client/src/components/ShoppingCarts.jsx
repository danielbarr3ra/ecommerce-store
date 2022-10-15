import React, { useEffect, useState } from "react";
import CartInventoryDropDown from "./CartInventoryDropDown";


const ShoppingCarts = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        function fetchData() {
            fetch("/api/shoppingCarts", { method: "GET" }).then((res) => res.json()).then((data) => {
                console.log(data)
                setData(data)
            })
        }
        fetchData()
    }
        , []
    )
    return (
        <>
            <h1> Shopping Cart should go here</h1>
            <CartInventoryDropDown cartData={data} />
        </>
    )
}

export default ShoppingCarts