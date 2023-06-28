import React, { useState } from 'react';
import WeatherCard from './WeatherCard ';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [userInput, setUserInput] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Call API to fetch weather data based on userInput
    // Update weatherData state with the retrieved data
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className='container'>
      <form onSubmit={handleFormSubmit}>
      <h1>Weather App</h1>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter location"
        />
        <button type="submit">Search</button>
      </form>

      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default WeatherApp;
