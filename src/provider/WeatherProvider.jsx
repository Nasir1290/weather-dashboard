import React from "react";
import { weatherContext } from "../context";
import useWeather from "../components/hooks/useWeather";

export default function WeatherProvider({ children }) {
  const { weatherData, error, isLoading } = useWeather();
  return <weatherContext.Provider value={{weatherData,error,isLoading}}>{children}</weatherContext.Provider>;
}

export {WeatherProvider};