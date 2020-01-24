import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import withRoot from "../modules/withRoot";

//import { Button, Form, Label, Input, FormGroup } from "reactstrap";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppAppBar from "../modules/views/AppAppBar";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../../actions/auth";
function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {"Copyright © "}
            <Link color='inherit' href='https://material-ui.com/'>
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    image: {
        backgroundImage:
            "url(https://www.cimmyt.org/content/uploads/2019/08/e3167ffc-e5bb-4fcd-8f5d-aa2cc93105b0.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=2560&h=1440)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.grey[900]
                : theme.palette.grey[50],
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const Login = props => {
    // if (props.isAuthenticated) return <Redirect to='/dashboard' />;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        props.login({ email, password });
        props.history.push("/home");
    };
    if (props.isAuthenticated) return <Redirect to='/dashboard' />;
    return (
        <React.Fragment>
            <AppAppBar />
            <Grid container component='main' className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component='h1' variant='h5'>
                            Sign in
                        </Typography>
                        <form
                            onSubmit={e => handleSubmit(e)}
                            className={classes.form}
                            noValidate
                        >
                            <TextField
                                variant='outlined'
                                margin='normal'
                                required
                                fullWidth
                                id='email'
                                label='Email Address'
                                name='email'
                                onChange={e => setEmail(e.target.value)}
                                autoComplete='email'
                                autoFocus
                            />
                            <TextField
                                variant='outlined'
                                margin='normal'
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                id='password'
                                onChange={e => setPassword(e.target.value)}
                                autoComplete='current-password'
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value='remember'
                                        color='primary'
                                    />
                                }
                                label='Remember me'
                            />
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                color='primary'
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href='/home' variant='body2'>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href='/Signup' variant='body2'>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default withRoot(connect(mapStateToProps, { login })(Login));
