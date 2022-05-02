import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  callAPI() {
      fetch("http://localhost:9000/redBulb")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

}


export default App;
