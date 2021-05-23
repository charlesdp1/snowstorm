import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./common/components/Title";
import Banner from "./common/components/widgets/Banner";
import SunWidget from "./common/components/widgets/SunWidget";
import VisibilityWidget from "./common/components/widgets/VisibilityWidget";

const urlQuebec =
  "https://api.openweathermap.org/data/2.5/weather?q=Quebec&appid=e8fcae1222b8c37f34884b546ab09e77";
const urlMontreal =
  "https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=e8fcae1222b8c37f34884b546ab09e77";
const urlToronto =
  "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=e8fcae1222b8c37f34884b546ab09e77";
const urlLondon =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e8fcae1222b8c37f34884b546ab09e77";

const App = () => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios.get(urlQuebec).then((res) => {
      setWeather(res.data);
    });
  }, []);

  if (!weather) return null;

  return (
    <div className="App">
      <Title />
      <Banner url={urlQuebec} />
      <Banner url={urlMontreal} />
      <Banner url={urlToronto} />
      <Banner url={urlLondon} />
      <SunWidget weather={weather} />
      <VisibilityWidget weather={weather} />
    </div>
  );
};

export default App;
