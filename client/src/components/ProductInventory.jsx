import React, { useEffect, useState } from "react";
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Paper } from '@mui/material'
import SubmitProductForm from "./SubmitProductForm";

const ProductInventory = () => {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            function fetchData() {
                fetch("/api/products", { method: "GET" }).then((res) => res.json()).then((data) => {
                    console.log(data)
                    setData(data)
                })
            }
            fetchData()
        }
        , [])

    /** Modify useEffect to only update when there is a an event from context on cart etc */


    return (
        <><TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Thumbnail</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Categorie&nbsp;(g)</TableCell>
                        <TableCell align="right">Price&nbsp;(g)</TableCell>
                        <TableCell align="right">Description&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.thumbnail}
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.category}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            <SubmitProductForm />
        </>
    )
}

export default ProductInventory