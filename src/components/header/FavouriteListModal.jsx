import React, { useContext } from "react";
import { favouriteContext } from "../../context";

export default function FavouriteListModal() {
  const { favourites } = useContext(favouriteContext);
  
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites.length > 0 ? (
          favourites.map((fav) => (
            <li key={fav.location} className="hover:bg-gray-200">
              <b>{fav.location}</b>
            </li>
          ))
        ) : (
          <b>No Favourite Loacation..!</b>
        )}
      </ul>
    </div>
  );
}
