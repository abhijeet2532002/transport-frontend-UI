import React, { useEffect, useState } from 'react';
import Suggestion from '../SuggestionBox/Suggestion';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const TruckList = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const pickupLocation = queryParams.get('pickup');
    const dropLocation = queryParams.get('drop');
    const [truck, setTruck] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTruck = async () => {
            try {
                const response = await axios.get('http://localhost:9495/api/truck/getAll');
                setTruck(response.data);
            } catch (err) {
                console.error("Error fetching trucks:", err);
                setError("Failed to load trucks. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        loadTruck();
    }, []);

    return (
        <div className="p-5">
            <h3>Here are all available vehicles for your journey</h3>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : truck.length === 0 ? (
                <p>No trucks available</p>
            ) : (
                <Suggestion list={truck} location={[pickupLocation,dropLocation]} />
            )}
        </div>
    );
};

export default TruckList;