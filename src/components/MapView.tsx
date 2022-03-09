import mapboxgl from "mapbox-gl";
import { FC, useContext, useEffect, useRef } from "react";
import { BtnLocation } from ".";
import { MapsContext, PlacesContext } from "../context";

interface Props {
  location: [number, number];
}

export const MapView: FC<Props> = ({ location }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { map, setMap } = useContext(MapsContext);
  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: location, // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
      setMap(map);
    }
  }, [location]);
  const { userLocation } = useContext(PlacesContext);
  function goToMyLocation() {
    if (!map) {
      return alert("Espere cargando mapa");
    }
    map.flyTo({
      duration: 2000,
      zoom: 14,
      center: userLocation,
    });
  }

  return (
    <div className="relative">
      <BtnLocation
        onClick={goToMyLocation}
        className="absolute rounded-sm top-5 right-10 bg-blue-600 p-2 z-50"
      >
        Mi Ubicacion
      </BtnLocation>
      <div ref={mapContainer} className="m-auto w-[95vw] h-screen"></div>;
    </div>
  );
};
