import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useReportStore } from "../store/reportStore";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 40.7128,
  lng: -74.006,
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    language: "en",
  });

  const navigate = useNavigate();
  const setCoordinates = useReportStore((state) => state.setCoordinates);
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };
      setSelected(coords);
    }
  };

  const geocodeAddress = (coords: { lat: number; lng: number }) => {
    return new Promise<string | undefined>((resolve) => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: coords }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const address = results[0].formatted_address;
          console.log("📍 Geocoded address:", address); // ← 여기 추가
          resolve(address);
        } else {
          console.warn("⚠️ Failed to geocode:", status, results); // ← 실패 로그
          resolve(undefined);
        }
      });
    });
  };

  const handleSubmit = async () => {
    if (!selected) {
      alert("Please select a location on the map first.");
      return;
    }

    const address = await geocodeAddress(selected);
    setCoordinates({ ...selected, address });
    navigate("/recent");
  };

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 relative">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onClick={handleMapClick}
        >
          {selected && <Marker position={selected} />}
        </GoogleMap>
        <button
          onClick={handleSubmit}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-600 text-sm sm:text-base active:scale-95 transition duration-150"
        >
          Report Here
        </button>
      </div>
    </div>
  );
};

export default Map;
