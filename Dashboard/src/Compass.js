/*
import React from 'react';
import Title from './Title';

function iframe() {
  return {
      __html: '<iframe src="./compass.html" width="700" height="500"></iframe>'
  }
}

export default function Compass() {
  return (
      <div>
          <Title>Magnetometer Data</Title>

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

class Compass extends Component {
  constructor(props){
    super(props);
    this.state = { MagX: localStorage.getItem("globalMagX") };
    this.state = { MagY: localStorage.getItem("globalMagY") };
    this.state = { MagZ: localStorage.getItem("globalMagZ") };
    this.state = { MagAngle: localStorage.getItem("globalMagAngle") };
  }
  
  render(){
    var MagX = localStorage.getItem("globalMagX");
    var MagY = localStorage.getItem("globalMagY");
    var MagZ = localStorage.getItem("globalMagZ");
    var MagAngle = localStorage.getItem("globalMagAngle");

    return(
      <React.Fragment>
        <Title>Magnetometer Data</Title>
        <Typography component="p" variant="h4" sx={{ flex: 1 }}>
          X (raw): {MagX}
          <br></br>
          Y (raw): {MagY}
          <br></br>
          Z (raw): {MagZ}
          <br></br>
          Angle (raw): {MagAngle}°
        </Typography>
        <div>
        <Link href="javascript:window.open('magdata.html','popup','width=600,height=600');">
            View Magnetometer Data
          </Link>
        </div>
      </React.Fragment>
    );
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({MagX: localStorage.getItem("globalMagX")});
      this.setState({MagY: localStorage.getItem("globalMagY")});
      this.setState({MagZ: localStorage.getItem("globalMagZ")});
      this.setState({MagAngle: localStorage.getItem("globalMagAngle")})
     }, 100)
  }
}

export default Compass;