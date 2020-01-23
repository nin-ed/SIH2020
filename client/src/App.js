import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import SignupFarmer from "./components/auth/SignupFarmer";
import SignupBuyer from "./components/auth/SignupBuyer";
import Home from "./components/Home";
import Buyer from "./components/Buyer";

// Redux
import store from "./store";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>
            <Container>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route exact path='/Signup' component={SignUp} />
                    <Route path='/Signup/farmer' component={SignupFarmer} />
                    <Route path='/Signup/buyer' component={SignupBuyer} />
                    <Route exact path='/buyer' component={Buyer} />
                    <Redirect to='/home' />
                </Switch>
            </Container>
        </Provider>
    );
};

export default App;
