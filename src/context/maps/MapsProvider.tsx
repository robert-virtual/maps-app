import mapboxgl, { Marker, Popup } from "mapbox-gl";
import { useReducer } from "react";
import { MapsContext } from "./MapsContext";
import { MapsReducer } from "./MapsReducer";

interface Props {}
export interface MapState {
  map?: mapboxgl.Map;
  isMapReady: boolean;
}
export const MapsProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(MapsReducer, {
    isMapReady: false,
    map: undefined,
  } as MapState);
  function setMap(map: mapboxgl.Map) {
    const myLocationPopup = new Popup().setHTML(`
    <div class="text-black">
      <h4>Tu ubicacion</h4>
      <p>Nice place</p>
    </div>
  `);

    new Marker({ color: "red" })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);

    dispatch({ type: "set", payload: map });
  }
  return (
    <MapsContext.Provider value={{ ...state, setMap }}>
      {children}
    </MapsContext.Provider>
  );
};
