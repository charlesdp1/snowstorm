import axios from 'axios';
import React, { useEffect, useState } from "react";
import "./App.css";
import Banner from "./common/components/Banner";
import Button from "./common/components/buttons/Button";
import SunWidget from "./common/components/SunWidget";
import Title from "./common/components/Title";

const App = () => {
  const [state, setState] = useState(0);
  const [weather, setWeather] = useState();

  const handleButtonClick = () => {
    setState(state + 1);
  };

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Quebec&appid=e8fcae1222b8c37f34884b546ab09e77').then(res=>{
      setWeather(res.data);
    })
  }, [])

  return (
    <div className="App">
      <Title />
      <Button onClick={handleButtonClick}>
        {state}
      </Button>
      <Banner weather={weather} />
      <SunWidget weather={weather} />
    </div>
  );
};

export default App;
