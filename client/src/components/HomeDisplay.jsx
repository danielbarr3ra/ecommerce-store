import React from "react";
import Card from '@mui/material/Card'
import { CardContent, Typography, CardActions, Button } from "@mui/material";

const HomeDisplay = () => {
    return (<Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography sx={{ fontsize: 14 }} color="text.secondary" gutterButton>
                Welcome to our shop
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Products</Button>
            <Button size="small">Cart</Button>
        </CardActions>
    </Card>)
}

export default HomeDisplay;