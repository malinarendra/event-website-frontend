import React from 'react'
import { Routes, Route } from 'react-router-dom'

// login component
import Login from './components/login'
// signup component
import Signup from './components/signup'

// user
import UserHome from './components/user_home'
import UserEvents from './components/user_events'
import UserSpecialEvent from './components/user_spetial_event'
import UserContact from './components/user_contact'
import GoBack from './components/go back'

// admin

import AdminEvents from './components/admin-home'
import AdminQuery from './components/admin-query'
import AdminAddEvents from './components/admin-add-event'
import AdminDeleteEvents from './components/admin-delete-event'
import AdminUpdateEvents from './components/admin-update-event'


// page not found
import PageNotFound from './components/404_page'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={Login}></Route>
        <Route path="/signup" exact Component={Signup}></Route>
        {/* user */}
        <Route path="/user/home" exact Component={UserHome}></Route>
        <Route path="/user/events" exact Component={UserEvents}></Route>
        <Route path="/user/special-event/:eventid" exact Component={UserSpecialEvent}></Route>
        <Route path="/user/contact" exact Component={UserContact}></Route>
        <Route path="/user/goback" exact Component={GoBack}></Route>
        {/* admin */}
        <Route path="/admin/home" exact Component={AdminEvents}></Route>
        <Route path="/admin/query" exact Component={AdminQuery}></Route>
        <Route path="/admin/add-event" exact Component={AdminAddEvents}></Route>
        <Route path="/admin/delete-event/:id" exact Component={AdminDeleteEvents}></Route>
        <Route path="/admin/update-event/:id" exact Component={AdminUpdateEvents}></Route>
        {/* 404 page not found */}
        <Route path ="*"Component={PageNotFound}></Route>

      </Routes>
    </>
  )
}

export default App
