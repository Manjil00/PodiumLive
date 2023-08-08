import { Box, Container, Grid, Paper } from "@material-ui-core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";


const useStyles=makeStyles((theme)=>({
    root:{
        width:'100vw',
        height:'100vh',
        backgroundColor: theme.palette.primary.main,
        paddingTop:theme.spacing(5),

    }
}))
function Theme(){
    const classes=userStyles();
    return (
        <Container className={classes.root}>
            <Paper component={Box} width="30%" p={4} mx="auto">
               <Grid container>
                <Grid item md={4}>
                <TextField
                label="Group Name"
                placeholder="Enter Group Name Here"
                variant="outlined"
                fullwidth
                />
                </Grid>
                <Grid item md={4}>
                <TextField
                label="Group Name"
                placeholder="Enter Group Name Here"
                variant="outlined"
                fullwidth
                />
                </Grid>
                <Grid item md={4}>
                <TextField
                label="Group Name"
                placeholder="Enter Group Name Here"
                variant="outlined"
                fullwidth
                />
                </Grid>
                <Grid item md={4}>
                <TextField
                label="Group Name"
                placeholder="Enter Group Name Here"
                variant="outlined"
                fullwidth
                />
                </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}
export default Theme