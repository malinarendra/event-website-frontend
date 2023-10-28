import React from 'react'
import "./index.css"
import { NavLink } from "react-router-dom"

const GoBack = () => {
  return (
    <div>
      <div className="parent">
        <div className="child">
          <h1>Thanks!</h1>
          <p>The form was submitted successfully.</p>
          <NavLink to="/user/home" >Go back</NavLink>
        </div>
      </div>
    </div>
  )
}

export default GoBack
