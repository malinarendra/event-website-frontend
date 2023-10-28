import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminQueryCard = (props) => {
    let isoDate = props.date; // Replace with your ISO date string
    let date = new Date(isoDate);

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    let formattedDate = `${day}/${month}/${year}`;
    return (
        <>
            <tr>
                <td>{props.fname+" "+props.lname}</td>
                <td>{formattedDate}</td>
                <td>{props.message}</td>
                <td><NavLink to={`https://mail.google.com/mail/?view=cm&to=${props.email}`} target='_blank'>{props.email}</NavLink></td>
                <td>{props.mobile}</td>
                <td className='action'><span
                    className="material-symbols-outlined delete" onClick={()=>{
                        props.deleteQuery(props.id)
                    }}>delete</span></td>
            </tr>
        </>
    )
}

export default AdminQueryCard
