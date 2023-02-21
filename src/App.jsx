import axios from "axios";
import React, { useEffect, useState } from "react";
import Data from "./components/Data";
import Inputs from "./components/Inputs";
import Topbuttons from "./components/Topbuttons";




function App() {

  const [cityName, setCityName] = useState('paris')
  const [weather, setWeather] = useState('')
  const [units, setUnits] = useState('metric')
 
  const getData = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=5476766e86450fff39da1502218a3376`;
    axios.get(url).then((res) => {
      setWeather(res.data);
      console.log(weather)
    });
  };

  useEffect(() => {
    getData();
  }, [cityName,units]);


  return <div className="bg-slate-900 h-screen">

    {weather && (
      <div>
        <Topbuttons setCityName={setCityName} getData={getData} />
      <Inputs setCityName={setCityName} setUnits={setUnits} />
        <Data weather={weather} />
      </div>
    )}


  </div>;
}

export default App;
