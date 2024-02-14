import { useState } from "react";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humedity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",

    })

    const [isLoading, setIsLoading] = useState({
        state: false,
        message: "",
    })

    const [error, setError] = useState(null);

    const fetchWeather = (longitude,latitude)=> {

    };
}