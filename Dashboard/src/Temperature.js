import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Component } from 'react';
import {useState} from "react";

function preventDefault(event) {
  event.preventDefault();
}

class Tester extends Component {
  constructor(props){
    super(props);
    this.state = { temp: localStorage.getItem("globaltemp") };
  }
  
  render(){
    var temp = localStorage.getItem("globaltemp");

    return(
      <React.Fragment>
        <Title>Temperature Data</Title>
        <Typography component="p" variant="h4" sx={{ flex: 1 }}>
          {temp/100} °C 
        </Typography>
        <div>
          <Link href="javascript:window.open('data.html','popup','width=600,height=600');">
            View Temperature Data
          </Link>
        </div>
      </React.Fragment>

    );
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({temp: localStorage.getItem("globaltemp")})
     }, 1000);
  }
}

export default Tester;