/*
import React from 'react';
import Title from './Title';

function iframe() {
  return {
      __html: '<iframe src="./health.html" width="300" height="125"></iframe>'
  }
}

export default function Health() {
  return (
      <div>
          <Title>Health Data</Title>

          <div dangerouslySetInnerHTML={iframe()} />
      </div>)
}

*/


import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Component } from 'react';

function preventDefault(event) {
  event.preventDefault();
}

class FHR extends Component {
  constructor(props){
    super(props);
    this.state = { BPM: localStorage.getItem("globalFHR") };
  }

  render(){
    var BPM = localStorage.getItem("globalFHR");

    return(
      <React.Fragment>
        <Title>Filtered Heart Rate</Title>
        <Typography component="p" variant="h4">
          {BPM} BPM
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            View Health Data
          </Link>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({BPM: localStorage.getItem("globalBPM")});
     }, 5000)
  }
}

export default FHR;