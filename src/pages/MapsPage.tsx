import { FC, useContext } from "react";
import { Loading, MapView } from "../components";
import { PlacesContext } from "../context";

interface Props {}

const MapsPage: FC<Props> = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h2 className="">Hola</h2>
      <MapView location={userLocation!} />
    </>
  );
};

export default MapsPage;
