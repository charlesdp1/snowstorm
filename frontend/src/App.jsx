import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";
import Button from "./common/components/buttons/Button";
import logo from "./logo.svg";

const App = () => {
  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Button>TOTOOTOTOTO</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
