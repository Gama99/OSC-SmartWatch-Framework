import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Component } from 'react';

class Light extends Component {

  render(){
    /*const ewelink = require('ewelink-api');
    const connection = new ewelink({
      email: 'leo.apollaro@gmail.com',
      password: '_T4w@PUapouw',
      region: 'us',
    });

    async function toggleFan() {
      await connection.toggleDevice('1000997eff');
    }
    */
    return(
      <React.Fragment>
        <Title>Wifi Control</Title>
      </React.Fragment>
    )
  }
}


export default Light;