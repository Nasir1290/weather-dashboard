import React, { useContext } from "react";
import AddToFavourite from "./AddToFavourite";
import WeatherHeadline from "./WeatherHeadline";
import WeatherCondition from "./WeatherCondition";
import useWeather from "../hooks/useWeather";
import { weatherContext } from "../../context";

export default function WeatherBoard() {
  const { weatherData, error, isLoading } = useContext(weatherContext);
  return (
    <div className="container mt-[7rem]">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          {isLoading.state ? (
            <p className="text-3xl font-bold ">{isLoading.message}</p>
          ) : (
            <>
              <AddToFavourite />
              <WeatherHeadline />
              <WeatherCondition />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
