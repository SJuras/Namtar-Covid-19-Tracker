import React from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>Namtar Covid-19 Tracker</h1>
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
    </div>
  );
}

export default App;
