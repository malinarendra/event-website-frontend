import React from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const AdminUpdateEventCard = (props) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    let isoDate = props.edate; // Replace with your ISO date string
    let date = new Date(isoDate);

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    let formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate)


    let [formData, setFormData] = useState({
        eid: props.eid,
        ename: props.ename,
        edate: formattedDate,
        elocation: props.elocation,
        edescription: props.edescription,
        eaction: props.eaction
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const queryString = new URLSearchParams(formData).toString();
            console.log(queryString)
            const url = `http://localhost:3308/api/event/?${queryString}`;

            const response = await axios.put(url);

            // Handle the response from the server, e.g., show a success message
            if (response.data.status === "true") {
                alert("Event updated!");
                window.history.replaceState(null, null, "/admin/home");
                navigate("/admin/home");
            } else {
                setLoading(false);
            }
        } catch (error) {
            // Handle any errors, e.g., show an error message
            console.error('Error submitting form:', error);
            setLoading(false);
        }
    };
    return (
        <>
            <div className="add-event-main-container">
                <div className="add-event-form">
                    <div className="signup">
                        <div className="user-login-container">
                            <h2>Update Event</h2>
                            <form name="myform">
                                <div className="inner-user-login-container">
                                    <div className="sign-item">
                                        <label htmlFor="user-firstname">Name</label>
                                        <input id="user-firstname" value={formData.ename} name="ename" type="text" onChange={handleInputChange} required />
                                    </div>
                                    <div className="sign-item">
                                        <label htmlFor="user-lastname">Location</label>
                                        <input id="user-lastname" value={formData.elocation} name="elocation" type="text" onChange={handleInputChange} required />
                                    </div>
                                    <div className="sign-item">
                                        <label htmlFor="user-email">Date</label>
                                        <input id="user-email" value={formData.edate} name="edate" type="date" onChange={handleInputChange} required />
                                    </div>
                                    <div className="sign-item">
                                        <label htmlFor="user-confirm-password">Description</label>
                                        <textarea value={formData.edescription} rows="5" id="user-confirm-password" name="edescription" type="text" onChange={handleInputChange} required />
                                    </div>
                                    <div className="sign-item">
                                        <label htmlFor="action">Link to apply for event</label>
                                        <input id="action" value={formData.eaction} name="eaction" type="text" onChange={handleInputChange} required />
                                    </div>
                                    <div className="sign-item btn-signup">
                                        <button onClick={handleUpdateSubmit}>Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    loading ? <>
                        <div id="spinner-container">
                            <div id="spinner"></div>
                        </div>
                    </> :
                        <>
                            null
                        </>
                }
            </div>
        </>
    )
}

export default AdminUpdateEventCard
