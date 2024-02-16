import React from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";
import { favouriteContext } from "../context";

export default function FavouriteProvider({ children }) {
  const { favourites, setFavourites } = useLocalStorage("favourites", []);
  

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter((fav) => {
      return fav.location !== location;
    });
    setFavourites(restFavourites); 
  };

  return (
    <favouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </favouriteContext.Provider>
  );
}
