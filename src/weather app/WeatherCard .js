import React from 'react';

const WeatherCard = ({ data }) => {
  const { temperature, description, icon } = data;

  return (
    <div>
      <h2>Current Weather</h2>
      <div>
        <img src={`weather-icons/${icon}.svg`} alt="Weather Icon" />
        <p>{temperature}°C</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
