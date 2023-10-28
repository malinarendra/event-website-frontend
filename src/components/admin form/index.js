import React, { useState } from 'react';
import axios from 'axios';
import "./index.css";
import { useNavigate } from 'react-router-dom';

const AdminForm = () => {
  const [formData, setFormData] = useState(new FormData());
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    // Check if the input element is a file input
    if (type === 'file') {
      formData.append(name, files[0]);
    } else {
      formData.set(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.get("ename") ||
      !formData.get("elocation") ||
      !formData.get("edate") ||
      !formData.get("eaction") ||
      !formData.get("edescription") ||
      !formData.get("myimage")
    ) {
      alert("Please fill all fields");
      return;
    } else {
      setLoading(true);
      await axios
        .post('http://localhost:3308/api/event', formData)
        .then((response) => {
          if (response.data.status === "true") {
            alert("Event added!");
            window.history.replaceState(null, null, "/admin/home");
            navigate("/admin/home");
          } else {
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="add-event-main-container">
        <div className="add-event-form">
          <div className="signup">
            <div className="user-login-container">
              <h2>Add Event</h2>
              <form name="myform">
                <div className="inner-user-login-container">
                  <div className="sign-item">
                    <label htmlFor="user-firstname">Name</label>
                    <input id="user-firstname" name="ename" type="text" onChange={handleInputChange} required />
                  </div>
                  <div className="sign-item">
                    <label htmlFor="user-lastname">Location</label>
                    <input id="user-lastname" name="elocation" type="text" onChange={handleInputChange} required />
                  </div>
                  <div className="sign-item">
                    <label htmlFor="user-email">Date</label>
                    <input id="user-email" name="edate" type="date" onChange={handleInputChange} required />
                  </div>
                  <div className="sign-item">
                    <label htmlFor="user-password">Image</label>
                    <input id="user-password" name="myimage" type="file" onChange={handleInputChange} required />
                  </div>
                  <div className="sign-item">
                    <label htmlFor="user-confirm-password">Description</label>
                    <textarea rows="5" id="user-confirm-password" name="edescription" type="text" onChange={handleInputChange} required />
                  </div>
                  <div className="sign-item">
                    <label htmlFor="action">Link to apply for event</label>
                    <input id="action" name="eaction" type="text" onChange={handleInputChange} required />
                  </div>
                  <div className="sign-item btn-signup">
                    <button onClick={handleSubmit}>Add</button>
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
  );
};

export default AdminForm;
