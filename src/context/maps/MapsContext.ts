import mapboxgl from "mapbox-gl";
import { createContext } from "react";
interface IMapsContext {
  map?: mapboxgl.Map;
  isMapReady: boolean;
  setMap: (map: mapboxgl.Map) => void;
}

export const MapsContext = createContext<IMapsContext>({} as IMapsContext);
