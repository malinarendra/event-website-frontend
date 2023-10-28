import React, { useState } from 'react';
import "./index.css";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            alert("Enter all fields");
            return false;
        } else {
            try {
                const queryString = new URLSearchParams(formData).toString();
                const url = `http://localhost:3308/api/login?${queryString}`;
                const response = await axios.post(url);

                // Handle the response from the server here
                if (response.data.status === "true") {
                    setFormData(
                        {
                            username: '',
                            password: ''
                        }
                    )
                    if (response.data.role === "user") {
                        navigate("/user/home");
                    } else {
                        navigate("/admin/home");
                    }
                } else {
                    if (response.data.message === "user does not exist") {
                        alert("user does not exist")
                        return false;
                    } else {
                        alert("invalid credintials")
                    }
                }
            } catch (error) {
                // Handle any errors, e.g., show an error message
                console.error('Error submitting form:', error);
            }
        }
    };

    return (
        <>
            <div className="login">
                <div className="user-login-container">
                    <h2>Login</h2>
                    <form name="myform" onSubmit={handleSubmit}>
                        <div className="inner-user-login-container">
                            <div className="item">
                                <label htmlFor="user-username">Username</label>
                                <input id="user-username" name="username" type="text" onChange={handleInputChange} required />
                            </div>
                            <div className="item">
                                <label htmlFor="user-password">Password</label>
                                <input id="user-password" name="password" type="password" onChange={handleInputChange} required />
                            </div>
                            <div className="item">
                                <button type="submit">Login</button>
                            </div>
                            <div className="item signup">
                                <p>Don't have an account? <NavLink to="/signup">Create a new account</NavLink></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
