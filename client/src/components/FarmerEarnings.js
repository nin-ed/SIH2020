import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const earnings = '$500';

const FarmerEarnings = (props) => {
  return (
    <React.Fragment>
      <Title>Earnings So Far</Title>
      <Typography variant="h1" gutterBottom>
        {earnings}
      </Typography>

    </React.Fragment>
  );
}

export default FarmerEarnings
