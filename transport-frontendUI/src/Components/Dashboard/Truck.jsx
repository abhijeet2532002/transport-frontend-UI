import axios from "axios";
import { useEffect, useState } from "react";

const Truck = () => {
    const [trucks, setTrucks] = useState([]);

    const getTrucks = async () => {
        try {
            const authToken = localStorage.getItem("authToken"); // Assuming authToken is stored in localStorage
            const response = await axios.get("http://localhost:9495/api/truck/getAll", {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });

            setTrucks(response.data);
        } catch (error) {
            console.error("Error fetching trucks:", error);
        }
    };

    useEffect(() => {
        getTrucks();
    }, []);

    return (
        <>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Truck Number</th>
                        <th>Owner Name</th>
                        <th>Mobile</th>
                        <th>Capacity (Tons)</th>
                        <th>Status</th>
                        <th>Truck Type</th>
                    </tr>
                </thead>
                <tbody>
                    {trucks.length > 0 ? (
                        trucks.map((truck, index) => (
                            <tr key={index}>
                                <td>{truck.truckNumber}</td>
                                <td>{truck.owner?.userName || "N/A"}</td>
                                <td>{truck.owner?.phone || "N/A"}</td>
                                <td>{truck.capacity}</td>
                                <td>{truck.status}</td>
                                <td>{truck.truckType}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No trucks available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default Truck;