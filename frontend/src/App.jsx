import axios from 'axios';
import React, { useEffect, useState } from "react";
import "./App.css";
import Banner from "./common/components/Banner";
import Banner1 from "./common/components/Banner1";
import Banner2 from "./common/components/Banner2";
import Button from "./common/components/buttons/Button";
import SunWidget from "./common/components/SunWidget";
import Title from "./common/components/Title";
import View from "./common/components/View";

let one = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=e8fcae1222b8c37f34884b546ab09e77"

const App = () => {
  const [state, setState] = useState(0);
  const [weather, setWeather] = useState();

  const handleButtonClick = () => {
    setState(state + 1);
  };

  useEffect(() => {
    axios.get(one).then(res=>{
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
      <Banner1 weather={weather} />
      <Banner2 weather={weather} />
      <SunWidget weather={weather} />
      <View weather={weather} />
    </div>
  );
};

export default App;
