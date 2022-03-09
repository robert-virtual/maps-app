import { MapsProvider, PlacesProvider } from "./context";
import { HomePage } from "./pages";

function App() {
  return (
    <PlacesProvider>
      <MapsProvider>
        <HomePage />
      </MapsProvider>
    </PlacesProvider>
  );
}

export default App;
