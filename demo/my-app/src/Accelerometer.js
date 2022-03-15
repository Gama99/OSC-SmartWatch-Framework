/*
import React from 'react';
import Title from './Title';

function iframe() {
  return {
      __html: '<iframe src="./accelerometer.html" width="700" height="500"></iframe>'
  }
}

export default function Accelerometer() {
  return (
      <div>
          <Title>Accelerometer Data</Title>

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

class Accelerometer extends Component {
  constructor(props){
    super(props);
    this.state = { AccelX: localStorage.getItem("globalAccelX") };
    this.state = { AccelY: localStorage.getItem("globalAccelY") };
    this.state = { AccelZ: localStorage.getItem("globalAccelZ") };
    this.state = { AccelMag: localStorage.getItem("globalAccelMag") };
  }
  
  render(){
    var AccelX = localStorage.getItem("globalAccelX");
    var AccelY = localStorage.getItem("globalAccelY");
    var AccelZ = localStorage.getItem("globalAccelZ");
    var AccelMag = localStorage.getItem("globalAccelMag");

    return(
      <React.Fragment>
        <Title>Accelerometer Data</Title>
        <Typography component="p" variant="h4" sx={{ flex: 1 }}>
          X-Axis (Left-Right): {AccelX/100} g
          <br></br>
          Y-Axis (Up-Down): {AccelY/100} g
          <br></br>
          Z-Axis (In-Out): {AccelZ/100} g
          <br></br>
          Magnitude of Acceleration: {AccelMag/100} g
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            View Accelerometer Data
          </Link>
        </div>
      </React.Fragment>
    );
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({AccelX: localStorage.getItem("globalAccelX")});
      this.setState({AccelY: localStorage.getItem("globalAccelY")});
      this.setState({AccelZ: localStorage.getItem("globalAccelZ")});
      this.setState({AccelMag: localStorage.getItem("globalAccelMag")})
     }, 100)
  }
}

export default Accelerometer;