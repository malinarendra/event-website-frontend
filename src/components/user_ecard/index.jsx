import React from 'react'
import { NavLink } from 'react-router-dom'

const UserEventCard = (props) => {
    let isoDate = props.date; // Replace with your ISO date string
    let date = new Date(isoDate);

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    let formattedDate = `${day}/${month}/${year}`;
    return (
        <>
            <NavLink to={`/user/special-event/${props.id}`}>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="img">
                            <img src={props.imageUrl} alt="event_image" />
                        </div>
                        <div className="info">
                            <p className="date">{formattedDate}</p>
                            <p className="heading">{props.name.length>20?<>{props.name.slice(0,20)+"..."}</>:<>{props.name}</>}</p>
                            <p className="heading-info">{props.description.length>150? <>
                                {props.description.slice(0,150)+"..."}
                            </>:<>{props.description}</>}</p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default UserEventCard
