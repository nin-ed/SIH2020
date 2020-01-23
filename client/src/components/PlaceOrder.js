import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PlaceOrder = (props) => {
  return (
    <React.Fragment>
      <Title>Place Order for Stubble</Title>
      <TextField
        autoComplete="fname"
        name="quantity"
        variant="outlined"
        required
        fullWidth
        id="quantity"
        label="Quantity in Kg"
        autoFocus
      />
      <br></br>
      <Button
        fullWidth
        variant="contained"
        color="primary"
      >
        Order
      </Button>
    </React.Fragment>
  );
}

export default PlaceOrder
