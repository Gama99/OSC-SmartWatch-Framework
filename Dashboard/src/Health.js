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

class Health extends Component {
  constructor(props){
    super(props);
    this.state = { BPM: localStorage.getItem("globalBPM") };
    this.state = { Accuracy: localStorage.getItem("globalAccuracy") };
  }
  
  render(){
    var BPM = localStorage.getItem("globalBPM");
    var Accuracy = localStorage.getItem("globalAccuracy");

    return(
      <React.Fragment>
        <Title>Health Data</Title>
        <Typography component="p" variant="h4">
          {BPM} BPM
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          With {Accuracy}% certainty
        </Typography>
        <div>
          <Link href="javascript:window.open('healthdata.html','popup','width=600,height=600');">
            View Health Data
          </Link>
        </div>
      </React.Fragment>
    );
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({BPM: localStorage.getItem("globalBPM")});
      this.setState({Accuracy: localStorage.getItem("globalAccuracy")})
     }, 1000)
  }
}

export default Health;