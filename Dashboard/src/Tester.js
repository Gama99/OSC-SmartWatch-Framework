import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Component } from 'react';

function preventDefault(event) {
  event.preventDefault();
}

class Tester extends Component {
  constructor(props){
    super(props);
    this.state = { time: Date.now() };
    this.state = { disp: localStorage.getItem("globaltemp") };
  }
  
  render(){
    var disp = localStorage.getItem("globaltemp");

    return(
      <React.Fragment>
        <Title>Temperature Data</Title>
        <Typography component="p" variant="h4" sx={{ flex: 1 }}>
          {disp} Celsius
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            View Temperature Data
          </Link>
        </div>
      </React.Fragment>
    );
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({disp: localStorage.getItem("globaltemp")})
     }, 1000)
  }
}

export default Tester;