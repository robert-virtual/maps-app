import { createContext } from "react";

export interface IPlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

export const PlacesContext = createContext<IPlacesState>({} as IPlacesState);
