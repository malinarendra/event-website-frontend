import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDeleteEventCard = (props) => {
    
    let isoDate = props.date; // Replace with your ISO date string
    let date = new Date(isoDate);

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    let formattedDate = `${day}/${month}/${year}`;
    const navigate = useNavigate();
    // delete me function
    const deleteMe = async (id) => {
        let url = `http://localhost:3308/api/event/?eid=${id}`
        const isConfirmed = window.confirm("Are you sure to delete event? Event will never restore.");

        if (isConfirmed) {
            try {
                const res = await axios.delete(url);
                if (res.data.status === "true") {
                    window.history.replaceState(null, null, "/admin/home");
                    navigate("/admin/home");
                } else {
                    return false;
                }
            } catch (error) {
                console.error("An error occurred:", error);
                return false;
            }
            console.log("confirm")
        } else {
            return false;
        }
    }
    const sendMeBack = () => {
        navigate(-1)
    }
    return (
        <>
            <div className="special-event-container-delete">
                <button className="back" onClick={sendMeBack}><span className="material-symbols-outlined">
                    arrow_back
                </span></button>
                <div className="upper">
                    <img src={props.imageUrl} alt="special-event-img" />
                </div>
                <div className="lower">
                    <div className="item name-date-combo">
                        <h1 className="event-name">{props.name}</h1>
                        <p>{formattedDate}</p>
                    </div>
                    <div className="item">
                        <p className='location'>{props.location}</p>
                    </div>
                    <div className="item">
                        <p>{props.description}</p>
                    </div>
                    <div className="item btn">
                        <button onClick={() => {
                            deleteMe(props.id)
                        }}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDeleteEventCard
