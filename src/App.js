import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Day from "./components/Day.jsx";
import React, { useState } from "react";
// @ts-check

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=15be78f39a6867e71d52493b66cce244"
    )
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      })
      .catch((error) => console.error(error));
  }

  function WeatherContent() {
    if (data) {
      const weatherItems = data.list.map((item) => {
        const date = new Date(item.dt * 1000).toDateString();
        console.log(`Date: ${date}`);
        const weatherDataPoint = item.weather[0];
        let iconUrl = `https://openweathermap.org/img/wn/${weatherDataPoint.icon}@2x.png`;
        return (
          <Day
            key={weatherDataPoint.dt}
            icon={iconUrl}
            dateTitle={date}
            weatherTitle={weatherDataPoint.main}
            weatherDescription={weatherDataPoint.description}
          />
        );
      });
      return weatherItems;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return <div>Tap button to fetch data</div>;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header title="Weather" />
        <button className="App-button" onClick={handleClick}>
          Get Data
        </button>
      </header>

      <ul className="Days-section">
        <WeatherContent />
      </ul>
    </div>
  );
}

export default App;
