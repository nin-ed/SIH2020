import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";

// Redux
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <Container>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/Signup' component={Signup} />
                    <Redirect to='/home' />
                </Switch>
            </Container>
        </Provider>
    );
};

export default App;
