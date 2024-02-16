import React from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";
import { favouriteContext } from "../context";

export default function FavouriteProvider({ children }) {
  const { favourites, setFavourites } = useLocalStorage("favourites", []);
  return (
    <favouriteContext.Provider value={{ favourites }}>
      {children}
    </favouriteContext.Provider>
  );
}
