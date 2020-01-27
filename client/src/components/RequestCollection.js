import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import withRoot from "./modules/withRoot";
import AppAppBar from "./modules/views/AppAppBar";
import { mainListItems, secondaryListItems } from "./listItems";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        marginLeft: drawerWidth,
        flexGrow: 1,
        padding: theme.spacing(1)
    },
    fixedHeight: {
        height: 240
    },
    toolbar: theme.mixins.toolbar
}));

const RequestCollection = props => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppAppBar className={classes.appBar} />

            <Drawer
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.toolbar} />

                {mainListItems}
                <Divider />
                {secondaryListItems}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Title>Enter Request For Collection</Title>
                <TextField
                    autoComplete='fname'
                    name='Area'
                    variant='outlined'
                    required
                    fullWidth
                    id='area'
                    label='Your Farm Area'
                    autoFocus
                    m={10}
                    p={10}
                />
                <br />
                <TextField
                    autoComplete='fname'
                    name='Area'
                    variant='outlined'
                    required
                    fullWidth
                    id='area'
                    label='Your Crop'
                    autoFocus
                    m={10}
                    p={10}
                />
                <br />
                <Button fullWidth variant='contained' color='primary'>
                    Add
                </Button>
            </main>
        </React.Fragment>
    );
};

export default withRoot(RequestCollection);
