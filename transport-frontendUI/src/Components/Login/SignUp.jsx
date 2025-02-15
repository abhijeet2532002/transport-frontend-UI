import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        userRole: "customer",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:9495/api/user/signUp", formData);
            console.log("User Created:", response.data);
            setFormData({
                userName: "",
                email: "",
                password: "",
                userRole: "customer",
                phone: "",
                address: "",
            })
        } catch (error) {
            console.error("Error creating user:", error);
            alert("Failed to register user.");
        }
    };

    return (
        <div className="row">
 <div className="col-md-4"></div>
        <div className="col-md-4 py-3">
            <form
        onSubmit={handleSubmit}
        className="  p-4 bg-light rounded "
    >
        <h2 className="text-center mb-4">User Registration</h2>
        <div className="mb-3">
            <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Username" required className="form-control" />
        </div>
        <div className="mb-3">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="form-control" />
        </div>
        <div className="mb-3">
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="form-control" />
        </div>
        <div className="mb-3">
            <select name="userRole" value={formData.userRole} onChange={handleChange} className="form-select">
                <option value="customer">Customer</option>
                <option value="driver">Driver</option>
                <option value="truckOwner">Truck Owner</option>
                <option value="admin">Admin</option>
            </select>
        </div>
        <div className="mb-3">
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="form-control" />
        </div>
        <div className="mb-3">
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required className="form-control" />
        </div>
        <button type="submit" className="btn btn-dark w-100">
            Submit
        </button>
    </form>
        </div>

     
         <div className="col-md-4"></div>

        </div>
       
        
    );
};

export default SignUp;