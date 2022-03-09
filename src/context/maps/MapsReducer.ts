import mapboxgl from "mapbox-gl";
import { MapState } from "./MapsProvider";
export type MapsReducerAction = {
  type: "set" | "adios";
  payload: mapboxgl.Map;
};

export const MapsReducer = (
  state: MapState,
  action: MapsReducerAction
): MapState => {
  switch (action.type) {
    case "set":
      return { ...state, isMapReady: true, map: action.payload };
    case "adios":
      return state;

    default:
      return state;
  }
};
