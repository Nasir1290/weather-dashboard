import React, { useContext, useState } from "react";
import SearchImage from "../../assets/search.svg";
import getLocationByName from "../../utils/getLocationByName";
import { locationContext } from "../../context";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const {setSearchedLocation} = useContext(locationContext);

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const capitalizedSearchTerm = searchTerm.charAt(0).toUpperCase()+searchTerm.slice(1);

    setSearchTerm("")
    const fetchedLocation =await getLocationByName(capitalizedSearchTerm);
    
    setSearchedLocation({...fetchedLocation});
    
  }
  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none font-bold"
          type="search"
          placeholder="Search Location"
          required
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <img className="" src={SearchImage} alt="searchIcon" />
        </button>
      </div>
    </form>
  );
}
