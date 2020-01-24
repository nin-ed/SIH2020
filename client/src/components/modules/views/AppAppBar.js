import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth";
import Dashboard from "../../Dashboard";
import Logout from "../../Logout";
const styles = theme => ({
    title: {
        fontSize: 24
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: "space-between"
    },
    left: {
        flex: 1
    },
    leftLinkActive: {
        color: theme.palette.common.white
    },
    right: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end"
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3)
    },
    linkSecondary: {
        color: theme.palette.secondary.main
    }
});

function AppAppBar(props) {
    const { classes, auth } = props;
    const { isAuthenticated, loading, user } = auth;
    const links =
        isAuthenticated && !loading ? (
            <div className={classes.right}>
                <Link
                    color='inherit'
                    variant='h6'
                    underline='none'
                    className={classes.rightLink}
                    component={RouterLink}
                    to='/dashboard'
                >
                    {"Dashboard"}
                </Link>
                {/* {console.log(user)}
            {user.category === "farmer" ? (
                <Link
                    color='inherit'
                    variant='h6'
                    underline='none'
                    className={classes.rightLink}
                    onClick={e => e.preventDefault()}
                    href='/farmer'
                >
                    {"Dashboard"}
                </Link>
            ) : (
                <Link
                    color='inherit'
                    variant='h6'
                    underline='none'
                    className={classes.rightLink}
                    onClick={e => e.preventDefault()}
                    component={Dashboard}
                    href='/buyer'
                >
                    {"Dashboard"}
                </Link>
            )} */}

                <Link
                    variant='h6'
                    underline='none'
                    className={clsx(classes.rightLink, classes.linkSecondary)}
                    component={RouterLink}
                    to='/logout'
                >
                    {"Logout"}
                </Link>
            </div>
        ) : (
            <div className={classes.right}>
                <Link
                    color='inherit'
                    variant='h6'
                    underline='none'
                    className={classes.rightLink}
                    component={RouterLink}
                    to='/login'
                >
                    {"Sign In"}
                </Link>
                <Link
                    variant='h6'
                    underline='none'
                    className={clsx(classes.rightLink, classes.linkSecondary)}
                    component={RouterLink}
                    to='/Signup'
                >
                    {"Sign Up"}
                </Link>
            </div>
        );
    return (
        <div>
            <AppBar position='fixed'>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left} />
                    <Link
                        variant='h6'
                        underline='none'
                        color='inherit'
                        className={classes.title}
                        component={RouterLink}
                        to='/home'
                    >
                        {"STUBBLE MARKETPLACE"}
                    </Link>
                    {!loading && links}
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
}

AppAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { logout })(
    withStyles(styles)(AppAppBar)
);
