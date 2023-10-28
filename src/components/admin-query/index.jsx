import React, { useEffect, useState } from 'react'
import "./index.css"
import AdminNavbar from '../admin-navbar'
import AdminQueryCard from '../admin-query-card'
import axios from 'axios'

const AdminQuery = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let url = "http://localhost:3308/api/contact"
    let res = await axios.get(url)
    // console.log(JSON.parse(res.data.data))
    if (res.data.status === "true") {
      setData(JSON.parse(res.data.data))
    }
    else{
      setData([])
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  setInterval(fetchData, 10000)

  //delete query
  const deleteQuery = async (id) => {
    let url = `http://localhost:3308/api/contact?queryid=${id}`
    try {
      await axios.delete(url)
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <AdminNavbar />
      <div className="query-container">
        {(data.length > 0) ? <>
          <table>
            <thead>
              <th>Name</th>
              <th>Date</th>
              <th>Message</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Action</th>
            </thead>
            <tbody>
              {data.map((val, i) => {
                return <AdminQueryCard key={i} fname={val.fname} lname={val.lname} date={val.date} message={val.query} email={val.email} mobile={val.mobileno} id={val.id} deleteQuery={deleteQuery} />
              })}
            </tbody>
          </table>
        </>
          : <>
            <h2 className='no-query'>No Queries!</h2>
          </>}
      </div>
    </>
  )
}

export default AdminQuery
