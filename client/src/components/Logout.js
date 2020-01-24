import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { Redirect } from "react-router-dom";
const Logout = props => {
    props.logout();
    return <Redirect to='/home' />;
};

Logout.propTypes = {
    logout: PropTypes.func.isRequired
};

export default connect(null, { logout })(Logout);
