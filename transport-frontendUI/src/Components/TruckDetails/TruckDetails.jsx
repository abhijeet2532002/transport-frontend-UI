import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';

const TruckDetails = ({ selectedTruck, location }) => {

    const [user, setUser] = useState(null);
    const token = localStorage.getItem('authToken');
    useEffect(() => {
        if (token) {
            const decodedUser = jwtDecode(token);
            setUser(decodedUser);
        }
    }, [token]); // Add `token` as a dependency to update state when it changes.


    if (location) {
        var [pickupLocation, dropLocation] = location;
    }

    const handleOrder = async (e) => {
        const orderData = {
            customer: user.userId,
            truck: e.target.value,
            pickupLocation,
            dropoffLocation: dropLocation,
            totalCost: 5000
        }

        try {
            const response = await axios.post(
                "http://localhost:9495/api/order/create",
                orderData,  // This is the body
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
        } catch (err) {
            console.error("Error placing order:", err);
        }

    }

    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    {selectedTruck ? selectedTruck.title || 'Truck Details' : 'Loading...'}
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column">
                {selectedTruck ? (
                    <>
                        <div className='flex-grow-1'>
                            <p><strong>Truck Number:</strong> {selectedTruck?.truckNumber || 'xxx00000xxx'}</p>
                            <p><strong>Truck Type:</strong> {selectedTruck?.truckType || 'Medium'}</p>
                            <p><strong>Availability:</strong> {selectedTruck?.status || 'Unavailable'}</p>
                            <p><strong>Owner:</strong> {selectedTruck?.owner?.userName || 'N/A'}</p>
                            <p><strong>Contact:</strong> {selectedTruck?.owner?.phone || 'N/A'}</p>
                        </div>
                        <button
                            className='btn text-bg-dark px-4'
                            value={selectedTruck?._id}
                            onClick={(e) => handleOrder(e)}
                            disabled={selectedTruck?.status != 'available'}
                        >
                            Hire Me
                        </button>
                    </>
                ) : (
                    <p>Loading...</p>
                )}


            </div>
        </div>
    );
};

export default TruckDetails;
