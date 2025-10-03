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
      .catch((error) => {
        console.error(error);
      });
  }

  function WeatherContent() {
    if (data) {
      // Ideally this should be broken down by days - each "Day" object would be filled with
      // WeatherTime objects for that day
      const weatherItems = data.list.map((item) => {
        const date = new Date(item.dt * 1000).toDateString();
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
      // This isn't ideal, rather this should update a string instead of returning the HTML item
      return <div className="Loading-text">Loading...</div>;
    } else {
      return <div className="Loading-text">Tap button to fetch data</div>;
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
      <body>
        <ul className="Days-section">
          <WeatherContent />
        </ul>
      </body>
    </div>
  );
}

export default App;
