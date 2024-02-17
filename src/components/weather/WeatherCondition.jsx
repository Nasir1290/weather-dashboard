import React, { useContext } from "react";

import TempMaxImage from "../../assets/icons/temp-max.svg";
import TempMinImage from "../../assets/icons/temp-min.svg";
import CloudImage from "../../assets/icons/cloud.svg";
import WindImage from "../../assets/icons/wind.svg";
import HumidityImage from "../../assets/icons/humidity.svg";
import { weatherContext } from "../../context";

export default function WeatherCondition() {
  const { weatherData } = useContext(weatherContext);

  const {
    maxTemperature,
    minTemperature,
    humidity,
    wind,
    cloudPercentage,
    climate,
  } = weatherData;
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The Climate is{" "}
        <b>
          <u> {climate} </u>
        </b>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemperature)}°</p>
            <img src={TempMaxImage} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemperature)}°</p>
            <img src={TempMinImage} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humidity</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(humidity)}%</p>
            <img src={HumidityImage} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(cloudPercentage)}%</p>
            <img src={CloudImage} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(wind)}km/h</p>
            <img src={WindImage} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
