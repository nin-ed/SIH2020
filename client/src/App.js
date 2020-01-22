import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";

import PrivateRoute from "./components/routing/PrivateRoute";

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
                    <Route path='/Signup' component={Signup} />
                    <PrivateRoute
                        path='/private'
                        component={() => <h1> This is 1</h1>}
                    />
                    <Redirect to='/home' />
                </Switch>
            </Container>
        </Provider>
    );
};

export default App;
