import axios from "axios";
import { useEffect, useState } from "react";

const Driver = () => {
    const [Driver, setDriver] = useState(null)

    const getDriver = async () => {
        try {
            const authToken = localStorage.getItem("authToken");

            const response = await axios.get("http://localhost:9495/api/driver/list", {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            setDriver(response.data)
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };
    useEffect(() => {
        getDriver()
    }, [])
    return <>

        <table className="table table-bordered table-striped">
            <thead className="table-dark">
                <tr>
                    <th>Availability Status</th>
                    <th>License Number</th>
                    <th>Username</th>
                    <th>User Role</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {Driver && Driver.map((item, index) => (
                    <tr key={index}>
                        <td>{item.availability_status}</td>
                        <td>{item.license_number}</td>
                        <td>{item.user_id.userName}</td>
                        <td>{item.user_id.userRole}</td>
                        <td>{item.user_id.email}</td>
                        <td>{item.user_id.phone}</td>
                        <td>{item.user_id.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
export default Driver;