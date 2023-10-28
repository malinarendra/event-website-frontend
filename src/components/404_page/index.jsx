import React from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();

    const goBack=()=>{
        navigate(-1)
    }

    return (
        <>
            <div className="container_404">
                <div className="center">
                    <section className="error">
                        <h1 className="error__title">404</h1>
                        <h2 className="error__type">Page not found</h2>
                        <p className="error__cta">We’re sorry, the page you have looked for does not exist in our database! Maybe go to our <br /> <button className="error__link error__link--purple" onClick={goBack}>Go Back</button></p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default PageNotFound
