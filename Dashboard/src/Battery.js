import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Component } from 'react';

function preventDefault(event) {
  event.preventDefault();
}

class Battery extends Component {
  constructor(props){
    super(props);
    this.state = { disp: localStorage.getItem("globalBatt") };
  }
  
  render(){
    var disp = localStorage.getItem("globalBatt");

    return(
      <React.Fragment>
        <Title>Battery Level</Title>
        <Typography component="p" variant="h4" sx={{ flex: 1 }}>
          {disp/100}%
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            View Battery Data
          </Link>
        </div>
      </React.Fragment>
    );
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({disp: localStorage.getItem("globalBatt")})
     }, 1000)
  }
}

export default Battery;