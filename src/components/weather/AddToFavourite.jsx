import React, { useContext, useEffect, useState } from "react";
import HeartImage from "../../assets/heart.svg";
import RedHeartImage from "../../assets/heart-red.svg";
import { favouriteContext, weatherContext } from "../../context";

export default function AddToFavourite() {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(favouriteContext);

  const { weatherData } = useContext(weatherContext);
  const [isFavourite, setIsFavourite] = useState(false);

  const { latitude, longitude, location } = weatherData;

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
  };

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  },[])

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img
            src={isFavourite ? RedHeartImage : HeartImage}
            alt="favouriteIcon"
          />
        </button>
      </div>
    </div>
  );
}
