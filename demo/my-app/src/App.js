
import './App.css';
import Dashboard from './Dashboard2';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

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


