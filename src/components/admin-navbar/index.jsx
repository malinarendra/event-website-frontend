import React from 'react'
import "./index.css"
import { NavLink } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
        <nav>
                <div className="logo">
                    <NavLink to="/user/home">MyEvents</NavLink>
                </div>
                <input type="checkbox" id="click" />
                <label for="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><NavLink to="/admin/home">Home</NavLink></li>
                    <li><NavLink to="/admin/add-event">Add Event</NavLink></li>
                    <li><NavLink to="/admin/query">Queries</NavLink></li>
                    <li><button to="/admin/log-out">Log out</button></li>
                </ul>
            </nav>
    </>
  )
}

export default AdminNavbar
