import React from "react";
import "./App.css";
import Button from "./common/components/buttons/Button";
import logo from "./logo.svg";

const App = () => {
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
