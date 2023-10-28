import React from 'react'
import "./index.css"
import AdminNavbar from '../admin-navbar'
import AdminEventCard from '../admin-event-card'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AdminEvents = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        let url = "http://localhost:3308/api/event/"
        let response = await axios.get(url)
        setLoading(false)
        if (response.data.status === "true") {
            setData(JSON.parse(response.data.data))
            console.log(JSON.parse(response.data.data))
        }
        else {
            setData([])
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [])
    return (
        <>
            <AdminNavbar />
            <div className="event-container">
                <div className="add-event">
                    {data.length > 0 ? <>
                        <NavLink to="/admin/add-event"><span className="material-symbols-outlined">add</span></NavLink></> : null}
                </div>
                {loading ? <>
                    <div id="spinner"></div>
                </> :
                    <>
                        {data.length > 0 ? <>
                            {data.map((val, i) => {
                                return <AdminEventCard key={i} id={val.id} name={val.name} date={val.date} description={val.description} />
                            })}
                        </> :
                            <>
                                <div className="no-events">
                                    <img src="/images/no-event.jpg" alt='no-event' />
                                    <h2 style={{ "textAlign": "center" }}>No events found!<NavLink to="/admin/add-event" style={{ "margin-left": "10px" }}>Create One</NavLink></h2>
                                </div>
                            </>}
                    </>}
            </div>
        </>
    )
}

export default AdminEvents
