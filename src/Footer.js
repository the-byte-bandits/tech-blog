import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <section class="footer">
        <div class="footercontent footer-logo">
            {/* <img src="logo.png" alt="logo" /> */}
            <i class="fa-brands fa-think-peaks"></i>
        </div>
        
        <div class="icons">
            <a href="#"><i class='bx bxl-facebook-circle'></i></a>
            <a href="#"><i class='bx bxl-twitter' ></i> </a>
            <a href="#"><i class='bx bxl-instagram' ></i></a>
            <a href="#"><i class='bx bxl-youtube' ></i></a>
        </div>

        
        <div class="footercontent">
            <h4>Information </h4>
                <li><a href="Solutions">Solutions</a></li>
                <li><a href="Tutorials">Tutorials</a></li>
                <li><a href="Pricing">Pricing</a></li>
                <li><a href="Releases ">Releases</a></li>
        </div>
        <div class="footercontent">
                <h4>Company</h4>
                <li><a href="Company ">Company</a></li>
                <li><a href="About us ">About us</a></li>
                <li><a href="Careers">Careers</a></li>
                <li><a href="Contact ">Contact</a></li>
        </div>
        <div class="footercontent">
                <h4>Learn About Us</h4>
                <li><a href="Resources ">Resources</a></li>
                <li><a href="Help centers ">Help Centers</a></li>
                <li><a href="Tutorials"> Tutorials</a></li>
                <li><a href="Support">Support</a></li>
        </div>
        
        
    </section>
  )
}

export default Footer
