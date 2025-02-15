import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];

const mapContainerStyle = {
    width: "100%",
    height: "100%"
};

// Default center (New Delhi)
const defaultCenter = {
    lat: 28.6139,
    lng: 77.2090
};

const Map = ({ pickupCoordinates, dropCoordinates }) => {
    return (
        // <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" libraries={libraries}>
        <GoogleMap
            center={pickupCoordinates || dropCoordinates || defaultCenter}
            zoom={10}
            mapContainerStyle={mapContainerStyle}
        >
            {pickupCoordinates && <Marker position={pickupCoordinates} label="Pickup" />}
            {dropCoordinates && <Marker position={dropCoordinates} label="Drop" />}
        </GoogleMap>
        // </LoadScript>
    );
};

export default Map;
