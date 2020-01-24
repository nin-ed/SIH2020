import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "../modules/components/Typography";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import Button from "../modules/components/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ProductHeroLayout from "../modules/views/ProductHeroLayout";
import withRoot from "../modules/withRoot";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
const backgroundImage =
    "http://aitcofficial.org/wp-content/uploads/2017/03/paddy-procure.jpg";

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center"
    },
    button: {
        minWidth: 200
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginTop: theme.spacing(10)
        }
    },
    more: {
        marginTop: theme.spacing(2)
    }
}));

const SignUp = props => {
    const classes = useStyles();
    if (props.isAuthenticated) return <Redirect to='home' />;
    return (
        <React.Fragment>
            <AppAppBar />
            <ProductHeroLayout backgroundClassName={classes.background}>
                {/* Increase the network loading priority of the background image. */}
                <img
                    style={{ display: "none" }}
                    src={backgroundImage}
                    alt='increase priority'
                />
                <Typography
                    color='inherit'
                    align='center'
                    variant='h2'
                    marked='center'
                >
                    WHO ARE YOU ?
                </Typography>
                <br></br>
                <ButtonGroup
                    variant='contained'
                    color='primary'
                    aria-label='contained primary button group'
                >
                    <Button
                        color='secondary'
                        variant='contained'
                        size='large'
                        className={classes.button}
                        component='a'
                        href='/Signup/farmer'
                    >
                        Farmer
                    </Button>
                    <Button
                        color='secondary'
                        variant='contained'
                        size='large'
                        className={classes.button}
                        component='a'
                        href='/Signup/buyer'
                    >
                        Buyer
                    </Button>
                </ButtonGroup>

                <Typography
                    variant='body2'
                    color='inherit'
                    className={classes.more}
                >
                    Discover the experience
                </Typography>
            </ProductHeroLayout>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    auth: state.auth.isAuthenticated
});

export default withRoot(connect(mapStateToProps)(SignUp));
