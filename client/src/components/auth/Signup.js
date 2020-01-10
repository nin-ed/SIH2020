import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button, Form, Label, Input, FormGroup } from "reactstrap";

import { connect } from "react-redux";
import { register } from "../../actions/auth";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
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
        const { name, password, email } = this.state;
        this.props.register({ name, password, email });
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='text'>Name</Label>
                        <Input
                            type='text'
                            name='name'
                            id='text'
                            placeholder='Name'
                            className='mb-3'
                            onChange={this.handleChange}
                            required
                        />

                        <Label for='email'>Email</Label>
                        <Input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            className='mb-3'
                            onChange={this.handleChange}
                            required
                        />

                        <Label for='password'>Password</Label>
                        <Input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Password'
                            className='mb-3'
                            onChange={this.handleChange}
                            minLength={6}
                            required
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

Signup.propTypes = {
    register: PropTypes.func.isRequired
};
export default connect(null, { register })(Signup);
