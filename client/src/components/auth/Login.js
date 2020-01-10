import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button, Form, Label, Input, FormGroup } from "reactstrap";

import { connect } from "react-redux";
import { login } from "../../actions/auth";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.login({ email, password });
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            className='mb-3'
                            onChange={this.handleChange}
                        />

                        <Label for='password'>Password</Label>
                        <Input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Password'
                            className='mb-3'
                            onChange={this.handleChange}
                        />
                        <Button
                            color='dark'
                            style={{ marginTop: "2rem" }}
                            block
                        >
                            Login
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(Login);
