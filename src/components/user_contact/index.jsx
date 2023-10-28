import React, { useState } from 'react'
import "./index.css"
import Navbar from '../Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserContact = () => {
    const [input, setInput] = useState(
        {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            message: ""
        }
    );
    const navigate = useNavigate()

    const setData = (e) => {
        let inputName = e.target.name
        let inputValue = e.target.value
        setInput((input) => {
            return {
                ...input,
                [inputName]: inputValue
            }
        })
    }

    const submitData = async (e) => {
        e.preventDefault()
        let url = `http://localhost:3308/api/contact?fname=${input.fname}&lname=${input.lname}&email=${input.email}&phoneno=${input.phone}&message=${input.message}`
        if (input.fname === "" || input.lname === "" || input.email === "" || input.phone === "" || input.message === "") {
            alert("enter all details")
            return false
            // myform.focus()
        } else {
            let res = await axios.post(url)
            console.log(res)
            try {
                if (res.data.status === "true") {
                    setInput(
                        () => {
                            return {
                                fname: "",
                                lname: "",
                                email: "",
                                phone: "",
                                message: ""
                            }
                        }
                    )
                    navigate("/user/goback")
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <>
            <Navbar />
            <div className="contact-combinator">
                <div className="contact-left">
                    <div className="vertical-space">
                        <h1>For More Details</h1>
                        <h1>Contact Us!</h1>
                        <span></span>
                    </div>
                    <div className="vertical-space">
                        <p>For more details or inquiries, please don't hesitate to contact us. We're here to assist you and provide any information you need about our events and services.</p>
                    </div>
                    <div className="vertical-space">
                        <p><em>NMIMS Shirpur Campus <br />
                            Near Tapi Bridge, Shirpur Road,<br />
                            Shirpur, Shirpur - 425406,<br />
                            Maharashtra, India</em></p>
                    </div>
                </div>
                <div className="contact-right">
                    <form name="myform" >
                        <div className="item flex-name">
                            <div className="inner-flex-name flex-name-margin">
                                <label for="fname">First Name</label>
                                <input id="fname" type="text" name="fname" onChange={setData} value={input.fname} required />
                            </div>
                            <div className="inner-flex-name">
                                <label for="lname">Last Name</label>
                                <input id="lname" type="text" name="lname" onChange={setData} value={input.lname} required />
                            </div>
                        </div>
                        <div className="item">
                            <label for="email">Email</label>
                            <input id="email" type="email" name="email" onChange={setData} value={input.email} required />
                        </div>
                        <div className="item">
                            <label for="phone">Phone</label>
                            <input id="phone" type="number" name="phone" onChange={setData} value={input.phone} required />
                        </div>
                        <div className="item">
                            <label for="message">Comment or Message</label>
                            <textarea id="message" cols="30" rows="7" name="message" onChange={setData} value={input.message} required></textarea>
                        </div>
                        <div className="item">
                            <button onClick={submitData}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserContact
