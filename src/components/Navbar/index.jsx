import React from 'react'
import "./index.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
                    <li><NavLink to="/user/home">Home</NavLink></li>
                    <li><NavLink to="/user/events">Events</NavLink></li>
                    <li><NavLink to="/user/contact">Contact</NavLink></li>
                    <button>Log out</button>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
