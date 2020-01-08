import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import { Container } from 'reactstrap';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';

function App() {
  return (
    <Container>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/Signup" component={Signup}/>
      <Redirect to="/home"/>
    </Switch>
    </Container>
  );
}

export default App;
