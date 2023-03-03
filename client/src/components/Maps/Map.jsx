import { useState } from "react";
import GoogleMaps from "simple-react-google-maps";

function Map() {
  const [coord, setCoord] = useState({
    lat: -32.8458884,
    lng: -68.8229721,
  });
  const [mapKey, setMapKey] = useState(0);
  const handleChange = (e) => {
    if (e.target.value === "Rosario") {
      setCoord({
        lat: -32.9493944,
        lng: -60.6877909,
      });
    } else if (e.target.value === "Mendoza") {
      setCoord({
        lat: -32.8458884,
        lng: -68.8229721,
      });
    }
    setMapKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <div>
        <div>
          <select name="" id="" onChange={handleChange}>
            <option value="Mendoza">Mendoza</option>
            <option value="Rosario">Rosario</option>
          </select>
        </div>
      </div>
      <GoogleMaps
        key={mapKey}
        apiKey={"AIzaSyCIFTsxNQSPqEkgc9vjS8mpnB07Bf1MNDQ"}
        style={{ height: "900px", width: "900px" }}
        zoom={14}
        center={{
          lat: coord.lat,
          lng: coord.lng,
        }}
        markers={[
          { lat: -32.8523649, lng: -68.8205825 },
          { lat: -32.8624649, lng: -68.8408825 },
          { lat: -32.9545695, lng: -60.6890462 },
        ]}
      />
    </div>
  );
}

export default Map;
