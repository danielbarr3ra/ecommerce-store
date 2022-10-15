import React from "react"
import { Paper, TextField, Button, Typography, Icon } from "@mui/material"


const SubmitProductForm = () => {

    /**
     * TODO make function that handles inputs and updates the context server
     */

    const handleInput = () => {
        return alert('handle input later')
    }
    return (
        <div>
            <Paper className={"Form"}>
                <Typography variant="h5" component="h3">
                    Submit/Update your own product
                </Typography>
                <Typography component="p"> description </Typography>

                <form onSubmit={handleInput}>
                    <TextField
                        label="Name"
                        id="margin-normal"
                        name="name"
                        defaultValue={'email'}
                        className='update classes'
                        helperText="Enter your full name"
                        onChange={handleInput}
                    />
                    <TextField
                        label="Email"
                        id="margin-normal"
                        name="email"
                        defaultValue={'email'}
                        className={'update clasess later'}
                        helperText="e.g. name@gmail.com"
                        onChange={handleInput}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={'update classes later'}
                    >
                        Subscribe <Icon className={'update classes later'}>send</Icon>
                    </Button>
                </form>
            </Paper>
        </div>
    )
}

export default SubmitProductForm
