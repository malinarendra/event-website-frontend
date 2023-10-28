import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const SpecialCard = (props) => {
    let isoDate = props.date; // Replace with your ISO date string
    let date = new Date(isoDate);

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    let formattedDate = `${day}/${month}/${year}`;
    const navigate= useNavigate();
    const sendMeBack = ()=>{
        navigate(-1)
    }
    return (
        <>
            <div className="special-event-container">
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
                        <NavLink to={props.action} target='_blank'>Participate</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialCard
