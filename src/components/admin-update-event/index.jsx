import React from 'react'
import AdminNavbar from '../admin-navbar'
import AdminUpdateEventCard from '../admin-update-event-card'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const AdminUpdateEvents = () => {
  const {id}= useParams();
  const [oldData,setOldData]=useState([])
  
  const getOldData=async ()=>{
    let url = `http://localhost:3308/api/event/${id}`;
    let res = await axios.get(url)
    if(res.data.status==="true"){
        setOldData(JSON.parse(res.data.data))
        console.log(JSON.parse(res.data.data))
    }
    else{
        setOldData([])
    }
    // console.log("old response")
    // console.log((res))       
}

useEffect(()=>{
    getOldData();
},[])
  return (
    <>
        <AdminNavbar/>
        {oldData.length>0? oldData.map((val,i)=>{
          return <AdminUpdateEventCard key={i} eid={id} ename={val.name} edate={val.date} elocation={val.location} edescription={val.description} eaction={val.action}/>
        }) : null}
    </>
  )
}

export default AdminUpdateEvents
