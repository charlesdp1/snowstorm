import React, { useState } from "react";
import "./App.css";
import Banner from "./common/components/Banner";
import Button from "./common/components/buttons/Button";
import Test from "./Test";

const App = () => {
  const [state, setState] = useState(0);

  const handleButtonClick = () => {
    setState(state + 1);
  };

  return (
    <div className="App">
      <Test />
      <Button onClick={handleButtonClick}>
        {state}
      </Button>
      <Banner />
    </div>
  );
};

export default App;
