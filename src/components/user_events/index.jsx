import React, { useEffect, useState } from 'react'
import "./index.css"
import UserEventCard from '../user_ecard'
import axios from 'axios'
import Navbar from '../Navbar'

const UserEvents = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    let url = "http://localhost:3308/api/event/"
    let response = await axios.get(url)
    setLoading(false)
    if (response.data.status === "true") {
      setData(JSON.parse(response.data.data))
      console.log(JSON.parse(response.data.data))
    } else {
      setData([])
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])


  return (
    <>
      <Navbar />
      <div className="news-container">
        <div className="header">
          <h1>Upcoming Events</h1>
          <span></span>
        </div>
        <p className="subheading">Explore the future of fun and learning with our Upcoming Events section. Get ready to dive into a world of exciting opportunities and memorable experiences.</p>

        <div className="card-container">
          {loading ? <>
            <div id="spinner-container">
              <div id="spinner"></div>
            </div>
          </> :
            <>
              {data.length > 0 ? <>
                {data.map((val, i) => {
                  return <UserEventCard key={i} id={val.id} date={val.date} name={val.name} description={val.description} imageUrl={val.imageUrl} />
                })}
              </> : <>
                <div className="no-events">
                  <img src="/images/no-event.jpg" alt='no-event-img' />
                  <h2 style={{ "textAlign": "center" }}>No upcoming events!</h2>
                </div>
              </>}
            </>}
        </div>
      </div>
    </>
  )
}

export default UserEvents
