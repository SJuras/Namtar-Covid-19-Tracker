import React from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './App.css';

import NamtarLogo from './assets/namtarLogo.png';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <div className="logo">
          <img src={NamtarLogo} alt="namtar covid 19 tracker logo" />
        </div>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">option2</MenuItem>
            <MenuItem value="worldwide">option3</MenuItem>
            <MenuItem value="worldwide">option4</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* Header */}

      {/* Title + Select input dropdown field */}

      {/* Infoboxes */}
      {/* Infoboxes */}
      {/* Infoboxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}

      {/* Footer */}
      <footer>
        <div className="footer-row">
          <div className="footer-box-smaller">
            <h2>NAMTAR</h2>
            <h1>COVID-19 Tracker</h1>
          </div>
          <div className="footer-box-bigger">
            <div className="bigger-box">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="https://covid19.who.int/">WHO COVID-19</a></li>
                <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">COVID-19 Safety Measures</a></li>
                <li><a href="https://www.who.int/">WHO</a></li>
                <li><a href="">Home</a></li>
              </ul>
            </div>
            <div className="bigger-box">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
              </ul>
            </div>
            <div className="bigger-box">
              <h4>Social</h4>
              <ul>
                <li><a href=""><FaFacebookF style={{marginBottom: "-3px", marginRight: "6px"}} />Facebook</a></li>
                <li><a href=""><FaInstagram style={{marginBottom: "-3px", marginRight: "6px"}} />Instagram</a></li>
                <li><a href=""><FaGithub style={{marginBottom: "-3px", marginRight: "6px"}} />GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-row-2">
          <p>&copy; Namtar COVID-19 Tracker 2021</p>
          <p>Created by: Sarif-Design</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
