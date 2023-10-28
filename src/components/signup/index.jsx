import React, { useState } from 'react';
import "../login/index.css";
import "./index.css";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        password: '',
        confirm_password: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !formData.fname ||
            !formData.lname ||
            !formData.email ||
            !formData.mobile ||
            !formData.username ||
            !formData.password ||
            !formData.confirm_password
        ) {
            alert("Please fill in all fields.");
            return false;
        }
        else {
            if (formData.password !== formData.confirm_password) {
                alert("Password and Confirm Password do not match.");
                return false;
            } else {
                try {
                    const queryString = new URLSearchParams(formData).toString();
                    const url = `http://localhost:3308/api/register?${queryString}`;
                    const response = await axios.post(url);

                    if (response.data.status === "true") {
                        alert("Registration successful");
                        setFormData(
                            {
                                username: '',
                                firstname: '',
                                lastname: '',
                                email: '',
                                mobile: '',
                                password: '',
                                confirm_password: ''
                            }
                        )
                        navigate("/user/home");
                    } else {
                        alert("Registration failed. Please try again.");
                        return false;
                    }
                } catch (error) {
                    console.error('Error submitting form:', error);
                }
            }
        }
    };

    return (
        <>
            <div className="signup">
                <div className="user-login-container">
                    <h2>Signup</h2>
                    <form name="myform" onSubmit={handleSubmit}>
                        <div className="inner-user-login-container">
                            <div className="sign-item">
                                <label htmlFor="user-firstname">First Name</label>
                                <input id="user-firstname" name="fname" type="text" onChange={handleInputChange} required />
                            </div>
                            <div className="sign-item">
                                <label htmlFor="user-lastname">Last Name</label>
                                <input id="user-lastname" name="lname" type="text" onChange={handleInputChange} required />
                            </div>
                            <div className="sign-item">
                                <label htmlFor="user-email">Email</label>
                                <input id="user-email" name="email" type="email" onChange={handleInputChange} required />
                            </div>
                            <div className="sign-item">
                                <label htmlFor="user-mobile">Mobile Number</label>
                                <input id="user-mobile" name="mobile" type="tel" onChange={handleInputChange} required />
                            </div>
                            <div className="sign-item">
                                <label htmlFor="user-username">Username</label>
                                <input id="user-username" name="username" type="text" onChange={handleInputChange} required />
                            </div>
                            <div className="sign-item">
                                <label htmlFor="user-password">Password</label>
                                <input id="user-password" name="password" type="password" onChange={handleInputChange} required />
                            </div>
                            <div className="sign-item">
                                <label htmlFor="user-confirm-password">Confirm Password</label>
                                <input id="user-confirm-password" name="confirm_password" type="password" onChange={handleInputChange} required />
                            </div>
                            <div className="sign-item btn-signup">
                                <button type="submit">Signup</button>
                            </div>
                            <div className="sign-item signup">
                                <p>Already have an account? <NavLink to="/">Login</NavLink></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
