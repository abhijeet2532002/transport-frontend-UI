import axios from "axios";
import { useEffect, useState } from "react";

const Order = () => {
    const [Order, setOrder] = useState([]);

    const getOrder = async () => {
        try {
            const authToken = localStorage.getItem("authToken");

            const response = await axios.get("http://localhost:9495/api/order/", {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            setOrder(response.data);
        } catch (error) {
            console.error("Error fetching Order:", error);
        }
    };

    useEffect(() => {
        getOrder();
    }, []);

    return (
        <>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Truck Number</th>
                        <th>Pickup Location</th>
                        <th>Dropoff Location</th>
                        <th>Total Cost</th>
                        <th>Booking Status</th>
                        <th>Customer Name</th>
                    </tr>
                </thead>
                <tbody>
                    {Order.map((item, index) => (
                        <tr key={index}>
                            <td>{item.truck?.truckNumber || "N/A"}</td>
                            <td>{item.pickupLocation}</td>
                            <td>{item.dropoffLocation}</td>
                            <td>{item.totalCost}</td>
                            <td>{item.bookingStatus}</td>
                            <td>{item.customer?.userName || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Order;