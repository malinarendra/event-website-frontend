import React from 'react'
import "./index.css"
import { useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AdminDeleteEventCard from '../admin-delete-event-card';

const AdminDeleteEvents = () => {

  const { id } = useParams();

  const [data, setData] = useState([]);


  const fetchData = async () => {
    let url = `http://localhost:3308/api/event/${id}`
    let response = await axios.get(url)
    // console.log(JSON.parse(response.data.data))
    setData(JSON.parse(response.data.data))
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
    {data.map((val,i)=>{
      return <AdminDeleteEventCard key={i} id={val.id} name={val.name} date={val.date} description={val.description} location={val.location} imageUrl={val.imageUrl}/>
    })}
    </>)
}

export default AdminDeleteEvents
