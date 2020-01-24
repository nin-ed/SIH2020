import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loadUser } from "../actions/auth";
const Dashboard = props => {
    console.log(props);

    const { isAuthenticated, user, loading } = props.auth;
    if (!isAuthenticated) return <Redirect to='/login' />;
    if (!user) return <Redirect to='/dashboard' />;
    //if (!loading) {
    const link = `/${user.category}`;
    console.log(link);
    return <Redirect to={link} />;
    //}
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { loadUser })(Dashboard);
