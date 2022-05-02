import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';
import Dashboard from './Dashboard2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    var check = localStorage.getItem("globaltemp")
  }
  
  
  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
        <p className="App-intro"> {this.state.apiResponse}</p>
      </div>
    );
  }
}

/*
function App() {
  
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}*/

export default App;

/*

const express = require("express");
const { google } = require("googleapis");

const app = express();

app.get("/", (req, res) => {

res.send("Hello world!");
});

/*
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1wiTnFkZAMgVFLrQl0M8Ypxjj1OKLvPlAQ2oRTFs_B3w";

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  res.send(metaData);
});


*/


