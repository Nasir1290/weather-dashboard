import React from "react";
import HeartImage from "../../assets/heart-red.svg";

import { favouriteContext } from "../../context";

export default function Favourite({onShow}) {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
    onClick={onShow}
    >
      <img src={HeartImage} alt="favourite" />
      <span><b>Favourite Locations</b></span>
    </div>
  );
}
