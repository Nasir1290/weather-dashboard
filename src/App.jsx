import React from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import WeatherProvider from "./provider/WeatherProvider";
import FavouriteProvider from "./provider/FavouriteProvider";

export default function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className=" grid place-items-center  h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
}
