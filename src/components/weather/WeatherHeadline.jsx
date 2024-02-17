import React, { useContext } from "react";

import { weatherContext } from "../../context";
import { getFormattedDateTime } from "../../utils/date-time-Util";

import CloudImage from "../../assets/cloud.svg";
import HazeImage from "../../assets/haze.svg";
import SnowImage from "../../assets/icons/snow.svg";
import SunnyImage from "../../assets/icons/sunny.svg";
import RainImage from "../../assets/rainy.svg";
import ThunderImage from "../../assets/thunder.svg";
import PinImage from "../../assets/pin.svg";

export default function WeatherHeadline() {
  const { weatherData } = useContext(weatherContext);
  const { climate, location, temperature, time } = weatherData;

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Rain":
        return RainImage;
      case "Clouds":
        return CloudImage;
      case "Clear":
        return SunnyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderImage;
      case "Fog":
        return HazeImage;
      case "Haze":
        return HazeImage;
      case "Mist":
        return HazeImage;
      default:
        return SunnyImage;
    }
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature > 0 ? temperature : 5)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinImage} alt="pin" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDateTime(time, "time", false)} -{" "}
        {getFormattedDateTime(time, "date", false)}
      </p>
    </div>
  );
}
