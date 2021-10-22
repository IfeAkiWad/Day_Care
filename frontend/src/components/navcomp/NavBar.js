import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id="nav">
        <div>
                <Link to="/">HOME</Link> 🌻 
                <Link to="/daycares/toddlers/new"> NEW STUDENT</Link> 🌻
                <Link to="/toddlers"> TODDLERS</Link>

            {/* <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/daycares/toddlers/new">NEW STUDENT</Link></li>
                <li><Link to="/toddlers">TODDLERS</Link></li> 
            </ul> */}
        </div>
    </nav>
    )
}

export default NavBar
