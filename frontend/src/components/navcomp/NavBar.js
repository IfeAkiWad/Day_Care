import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id="nav">
        <div>
             🌻 <Link to="/">HOME</Link> 🌻 
                <Link to="/daycares/toddlers/new"> NEW STUDENT</Link> 🌻
                <Link to="/toddlers"> TODDLERS</Link> 🌻 
                <Link to='/gallery'> PHOTO GALLERY</Link> 🌻
        </div>
    </nav>
    )
}

export default NavBar
