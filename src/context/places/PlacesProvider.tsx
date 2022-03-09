import { FC, useEffect, useReducer } from "react";
import { IPlacesState, PlacesContext } from "./PlacesContext";
import { PlacesReducer } from "./PlacesReducer";

interface Props {}
const initState: IPlacesState = {
  isLoading: true,
  userLocation: undefined,
};
export const PlacesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(PlacesReducer, initState);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        dispatch({ type: "setUserLocation", payload: [longitude, latitude] });
      },
      (err) => {
        alert("No se pudo obtener la localizacion");
        throw new Error(err.message);
      }
    );
  }, []);

  return (
    <PlacesContext.Provider value={{ ...state }}>
      {children}
    </PlacesContext.Provider>
  );
};
