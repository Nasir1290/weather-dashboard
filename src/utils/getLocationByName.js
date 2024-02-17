const getLocationByName = async (location) => {

    if (!location) {
        return null;
    }
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location},{country code}&limit=1&appid=84cb0aab497caa19c1619f8df5efdfc6
        `)
        const result = await response.json();
        

        if (result[0]) {
            const searchedLocation = {
                location: result[0].name,
                latitude: result[0].lat,
                longitude: result[0].lon,
            }
            return searchedLocation;
        } else {
            const defaultLocation = {
                location: "",
                latitude: 0,
                longitude: 0,
            }
            return defaultLocation;
        }
    }
    catch (error) {
        console.log("Error at GetLocationByName: " + error.message);
    }

}

export default getLocationByName;