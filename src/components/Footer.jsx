import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <Link to="/"> <div className="name">FindFlixCodes<span className="red">.com</span></div></Link>
                <div></div>
                <span>Made With <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg> In India</span>
                <p>© 2022 FindFlixCodes<span className="red">.com</span></p>
            </div>
        </>
    )
}

export default Footer