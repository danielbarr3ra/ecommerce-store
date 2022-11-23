import React, { useEffect, useState } from "react";
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Paper } from '@mui/material'

function Inventory() {
    const [products, setProducts] = useState([]);
    useEffect(
        () => {
            function fetchData() {
                fetch("/api/products", { method: "GET" }).then((res) => res.json()).then((data) => {
                    console.log(data)
                    setProducts(data)
                })
            }
            fetchData()
        }
        , [])
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">price</TableCell>
                        <TableCell align="right">id</TableCell>
                        <TableCell align="right">timeStamp</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">{row.timeStamp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default Inventory