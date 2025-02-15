import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Profile() {
    const [authToken, setAuthToken] = useState(null);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            navigate("/"); // Redirect to home if no token is found
        } else {
            setAuthToken(token);
            console.log("Retrieved Token:", token);
        }
    }, [navigate]); // Depend on navigate to avoid infinite loop

    const getUserProfile = async () => {
        try {
            const response = await axios.get("http://localhost:9495/api/user/get", {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            console.log("User Profile:", response.data);
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };

    return (
        <div onClick={() => getUserProfile()}>
            Get Profile
        </div>
    );
}