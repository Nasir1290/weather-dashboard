import React, { useState } from "react";
import { locationContext } from "../context";

export default function LocationProvider({ children }) {
  const [searcedLocation, setSearchedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });
  return (
    <locationContext.Provider value={{ searcedLocation, setSearchedLocation }}>
      {children}
    </locationContext.Provider>
  );
}
