import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminEventCard = (props) => {
    let isoDate = props.date; // Replace with your ISO date string
    let date = new Date(isoDate);

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    let formattedDate = `${day}/${month}/${year}`;
    return (
        <>
            <div className="inner-event-container">
                <div className="event">
                    <NavLink to={`/user/special-event/${props.id}`}>
                        <div className="upper down-space">
                            <h2>{(props.name.length > 15) ? <>{props.name.slice(0, 15)}...</> :
                                <>
                                    {props.name}
                                </>}</h2>
                            <p>{formattedDate}</p>
                        </div>
                        <div className="middle down-space">
                            <p>{(props.description.length > 200) ? <>{props.description.slice(0, 200)}...</> :
                                <>
                                    {props.description}
                                </>}</p>
                        </div>
                        <div className="lower">
                            <NavLink to={`/admin/delete-event/${props.id}`}><span
                                className="material-symbols-outlined delete">delete</span></NavLink>
                            <NavLink to={`/admin/update-event/${props.id}`}><span
                                className="material-symbols-outlined edit">edit</span></NavLink>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default AdminEventCard
