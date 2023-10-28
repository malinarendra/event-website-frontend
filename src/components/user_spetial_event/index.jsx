import React from 'react'
import "./index.css"
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import SpecialCard from '../userspecialcard'

const UserSpecialEvent = () => {
  const { eventid } = useParams();

  const [data, setData] = useState([]);


  const fetchData = async () => {
    let url = `http://localhost:3308/api/event/${eventid}`
    let response = await axios.get(url)
    // console.log(JSON.parse(response.data.data))
    setData(JSON.parse(response.data.data))
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <>
      {data ? <>
        {data.map((val, i) => {
          return <>
            <SpecialCard key={i} date={val.date} name={val.name} location={val.location} description={val.description} action={val.action} imageUrl={val.imageUrl}/>
          </>
        })}
      </> : <><h1 style={{ "color": "red" }}>No data found!</h1></>}
    </>
  )
}

export default UserSpecialEvent
