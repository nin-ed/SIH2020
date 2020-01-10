import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button, Form, Label, Input, FormGroup} from 'reactstrap';

class Signup extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      name : ''
    }
  }

  onSubmit = e => {
    e.preventDefault();
  }

  onChange = e => {

  }

  render(){
    return(
      <div>
      <Form onSubmit={this.onSubmit}>
          <FormGroup>
          <Label for='text'>Name</Label>
          <Input
            type='text'
            name='text'
            id='text'
            placeholder='Name'
            className='mb-3'
            onChange={this.onChange}
          />

            <Label for='email'>Email</Label>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              className='mb-3'
              onChange={this.onChange}
            />

            <Label for='password'>Password</Label>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              className='mb-3'
              onChange={this.onChange}
            />
            <Button color='dark' style={{ marginTop: '2rem' }} block>
              Login
            </Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Signup;
