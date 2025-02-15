import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignIn = ({setFlag}) => {
    const [formData, setFormData] = useState({
        UserId: "jk",
        password: "Ak2532002@",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:9495/api/user/login", formData);
            if (response?.data?.token) {
                localStorage.setItem("authToken", response.data.token); // Store token in localStorage
                setFlag(Math.random())
                history("/"); // Redirect to home if no token is found
            }
            setFormData({
                UserId: "",
                password: "",
            })
        } catch (error) {
            console.error("Error Login user:", error);
           
        }
    };



    return (
         
<div className="row">
<div className="col-md-4"></div>
       <div className="col-md-4 py-3">
       <form
            onSubmit={handleSubmit}
            className="bg-light rounded  p-4"
        >
            <h2 className="text-center mb-4">Login</h2>
            <div className="mb-3">
                <input type="text" name="UserId" value={formData.UserId} onChange={handleChange} placeholder="Enter phone or username or email" required className="form-control" />
            </div>
            <div className="mb-3">
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="form-control" />
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

export default SignIn;