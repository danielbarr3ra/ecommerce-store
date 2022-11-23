import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'

function Product() {
    const [data, setProducts] = useState([]);
    useEffect(
        () => {
            function fetchData() {
                fetch("/api/products/637abb2fbdcb0c02eaa0dd0d", { method: "GET" }).then((res) => res.json()).then((data) => {
                    console.log(data)
                    setProducts(data)
                })
            }
            fetchData()
        }
        , [])
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="'subtitle1'" color="text.secondary">
                    ${data.price}
                </Typography>
                <Divider sx={{ m: 2, }} variant="middle"></Divider>
                <Typography variant="body2" color="text.secondary">
                    TODO ADD DESCRIPTION TO PRODUCTS
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add To Cart</Button>
                <Button size="small">Go Back</Button>
            </CardActions>
        </Card >
    )
}
export default Product