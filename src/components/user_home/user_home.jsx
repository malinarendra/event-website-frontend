import React from 'react'
import { NavLink } from 'react-router-dom'

const UserHomeCard = () => {
  return (
    <>
      <div className="user-home">
        <div className="left">
          <h1>Explore, <br /> Engage, and <br /> Embrace the College Experience with us! </h1>
          <p>Step into the world of MyEvents, your go-to hub for staying updated on the most exciting occurrences across our dynamic campus. Count on us to provide you with the freshest details on a wide spectrum of events that add vibrancy to your college experience.</p>
          <NavLink to="/user/events">Get Started</NavLink>
        </div>
        <div className="right">
          <img src="/images/slider-img3.png" alt="event-img" />
        </div>
      </div>
      <div className="user-about">
        <div className="right">
          <img src="/images/aboutus.jpg" alt="event" />
        </div>
        <div className="left">
          <h1>ABOUT US</h1>
          <p>Welcome to MyEvents Events, your ultimate destination for staying in the loop about the latest and greatest happenings on our vibrant campus. We are your trusted source for up-to-date information on a diverse range of events that make college life memorable.</p>
          <NavLink to="/user/events">Read More</NavLink>
        </div>
      </div>
      <div className="user-home user-keep">
        <div className="left">
          <h1>WE KEEP YOU<br />CURRENT WITH EVENT UPDATES</h1>
          <p>At MyEvents, we keep you in the loop with real-time event updates. Never miss a beat on your vibrant college campus with our user-friendly platform. From cultural festivals to academic seminars, we've got you covered. Join us in making your college experience extraordinary, one event update at a time.</p>
          <NavLink to="/user/events">Get Started</NavLink>
        </div>
        <div className="right">
          <img src="/images/provide.png" alt="event-img" />
        </div>
      </div>
      <div className="user-follow">
        <h1>FOLLOW US</h1>
        <p>Stay connected with us through our social media channels for the latest updates, exciting event highlights, and community engagement.</p>
        <div className="icons-container">
          <i class='bx bxl-facebook-square' style={{"color":"#3A5694"}}></i>
          <i class='bx bxl-instagram' style={{"color":"#C435AB"}}></i>
          <i class='bx bxl-twitter' style={{"color":"#57ABE9"}}></i>
          <i class='bx bxl-linkedin' style={{"color":"#037EB1"}}></i>
        </div>
      </div>
    </>
  )
}

export default UserHomeCard
