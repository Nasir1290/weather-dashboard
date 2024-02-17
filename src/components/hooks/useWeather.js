import { useContext, useEffect, useState } from "react";
import { locationContext } from "../../context";

const useWeather = () => {

    const { searcedLocation } = useContext(locationContext);


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

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setIsLoading({
                ...isLoading,
                state: true,
                message: "Fetching Weather Data..."
            })

            // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=84cb0aab497caa19c1619f8df5efdfc6&units=metric`);
            if (!response.ok) {
                const errorMessage = `fetching weather data failed ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            const updatedWeatherData = {

                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,

            }

            setWeatherData(updatedWeatherData);



        } catch (error) {
            setError(error);

        } finally {
            setIsLoading({
                ...isLoading,
                state: false,
                message: "",
            })
        }
    };

    useEffect(() => {
        setIsLoading({
            state: true,
            message: "Finding Location...",
        })

        if (searcedLocation.latitude && searcedLocation.longitude) {
            fetchWeatherData(searcedLocation.latitude, searcedLocation.longitude);
        }
        else {

            navigator.geolocation.getCurrentPosition((position) => {
                fetchWeatherData(position.coords.latitude, position.coords.longitude);
            })
        }
    }, [searcedLocation])

    return {
        weatherData,
        error,
        isLoading,
    }

}

export default useWeather;


