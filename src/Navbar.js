import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <header class="header">
        <div class="left"> 
            <img src={require('./images/logo.png')} alt="image not available " />
            {/* <div>
                <h4>Blogspiration </h4>
            </div> */}
        </div>
        
        <div class="mid">
            <ul class="navbar">
                <li> <a href="#"> Home </a> </li>
                <li> <a href="#">Products </a></li>
                <li> <a href="#">Blog </a> </li>
                <li> <a href="#">Pricing </a></li>
                <li> <a href="#">about us </a></li>

            </ul>
        </div>
        
        <div class="right" > 
            <button class="btn1">
                Log in
            </button>    
            <button class="btn2">
                Sign Up
            </button>
        </div>
    </header>
  )
}
