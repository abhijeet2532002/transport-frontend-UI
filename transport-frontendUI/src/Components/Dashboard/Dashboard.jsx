import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Truck from "./Truck";
import Driver from "./Driver";
import Order from "./Order";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Order");
  const [authToken, setAuthToken] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
    } else {
      setAuthToken(token);
    }
  }, [navigate]);

  return (
    <div className="container mt-4 mb-5">
      <h1 className="fw-bold fs-2"><u>Dashboard</u></h1>
      <ul className="nav nav-tabs mt-4">
        <li className="nav-item">
          <button
            className={`fw-medium fs-5 nav-link ${activeTab === "Order" ? "active" : ""}`}
            onClick={() => setActiveTab("Order")}
          >
            Order
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`fw-medium fs-5 nav-link ${activeTab === "Truck" ? "active" : ""}`}
            onClick={() => setActiveTab("Truck")}
          >
            Truck
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`fw-medium fs-5 nav-link ${activeTab === "Driver" ? "active" : ""}`}
            onClick={() => setActiveTab("Driver")}
          >
            Driver
          </button>
        </li>
      </ul>

      <div className="tab-content p-3 border border-top-0">
        {activeTab === "Order" && <div><Order /></div>}
        {activeTab === "Truck" && <div><Truck /></div>}
        {activeTab === "Driver" && <div><Driver /></div>}
        {activeTab === "Profile" && <div><Profile /></div>}
      </div>
    </div>
  );
};

export default Dashboard;
