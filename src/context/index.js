import { createContext } from "react";

const weatherContext = createContext(null);
const favouriteContext = createContext(null);
const locationContext = createContext(null);

export { weatherContext, favouriteContext ,locationContext};