import React from 'react'
import './Navbarr.css'
import {Link} from "react-router-dom";


function Navbarr() {

  return (
    <header>
      <div className='navbar'>
          <div className="navbar-container">
            <Link to='/' >
              <div className="navbar-logo">
                  <i class="fa-brands fa-think-peaks"></i>
                  <p>Blogspiration</p>
              </div>
            </Link>
              <ul>
                  <li><Link to='/trending'>Trending</Link></li>
                  <li><Link to='/contact-us'>Contact</Link></li>
                  <li><Link to='/about-us'>About</Link></li>
                  <li><Link to='/terms-of-service'>Terms</Link></li>
                  {/* <li className='navbar-admin'>Admin</li> */}
              </ul>
          </div>
      </div>
    </header>
    
  )
}

export default Navbarr
