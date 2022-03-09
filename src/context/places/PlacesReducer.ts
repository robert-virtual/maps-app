import { IPlacesState } from "./PlacesContext";

type Action = { type: "setUserLocation"; payload: [number, number] };

export const PlacesReducer = (
  state: IPlacesState,
  action: Action
): IPlacesState => {
  switch (action.type) {
    case "setUserLocation":
      return { isLoading: false, userLocation: action.payload };

    default:
      return state;
  }
};
