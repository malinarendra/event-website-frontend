import React from 'react'
import "./index.css"
import Navbar from '../Navbar'
import { NavLink } from 'react-router-dom'
import UserHomeCard from './user_home'

const UserHome = () => {
  return (
    <>
      <Navbar />
      <UserHomeCard/>
    </>
  )
}

export default UserHome
