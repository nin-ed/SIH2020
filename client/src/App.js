import React, { useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import SignupFarmer from "./components/auth/SignupFarmer";
import SignupBuyer from "./components/auth/SignupBuyer";
import Home from "./components/Home";
import Buyer from "./components/Buyer";
import Farmer from "./components/farmer";
import AddFarm from "./components/AddFarmer";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
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
    console.log(store.getState());

    return (
        <Provider store={store}>
            <BrowserRouter>
            <Container>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/Signup' component={SignUp} />
                    <Route
                        exact
                        path='/Signup/farmer'
                        component={SignupFarmer}
                    />
                    <Route exact path='/Signup/buyer' component={SignupBuyer} />
                    <Route exact path='/buyer' component={Buyer} />
                    <Route exact path='/farmer' component={Farmer} />
                    <Route exact path='/farmer/AddFarm' component={AddFarm} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/logout' component={Logout} />
                    {/* <PrivateRoute exact path='/buyer' component={Buyer} /> */}

                    <Redirect to='/home' />
                </Switch>
            </Container>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
