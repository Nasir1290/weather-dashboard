import React, { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { weatherContext } from "./context";

import ClearSkyImage from "./assets/backgrounds/clear-sky1.jpg";
import FewClouds from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatteredCloud from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import ThunderStorm from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

export default function Page() {
  const { weatherData, isLoading } = useContext(weatherContext);
  const [climate, setClimate] = useState("");

  const getBackgroundImage = (climate) => {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatteredCloud;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStorm;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewClouds;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  };

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimate(bgImage);
  }, [weatherData.climate]);

  return (
    <div
      style={{ backgroundImage: `url("${climate}")` }}
      className=" grid place-items-center  h-screen bg-no-repeat bg-cover bg-"
    >
      <Header />
      {isLoading.state ? (
        <p className="text-3xl font-bold ">{isLoading.message}</p>
      ) : (
        <>
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </>
      )}
    </div>
  );
}
