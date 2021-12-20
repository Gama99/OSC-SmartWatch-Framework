import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function GPS() {
  return (
    <React.Fragment>
      <Title>GPS Tracker</Title>
      <Typography component="p" variant="h4">
        Current Location
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        
        as of: {new Date().getHours() + ":" + new Date().getMinutes()} on {(new Date().getMonth()+1)+'/'+(new Date().getDate())+'/'+new Date().getFullYear()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Location Data
        </Link>
      </div>
    </React.Fragment>
  );
}
