import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
        
        <div><h1>Let's get started on something great </h1></div>
        <div><h2>join over 4,000 startups already growing with Untitled </h2></div>
        <div class="buttons" > 
            <button class="btn">
                Chat to us 
            </button>    
            <button class="btn">
                Get started
            </button>
        </div>
        
      <div class="container">
        <div class="left-section">
            <ul>
                <li><a href="Products">Products</a></li>
                <li><a href="Overview">Overview</a></li>
                <li><a href="Features">Features</a></li>
                <li><a href="Solutions">Solutions</a></li>
                <li><a href="Tutorials">Tutorials</a></li>
                <li><a href="Pricing">Pricing</a></li>
                <li><a href="Releases ">Releases</a></li>

            </ul>
        </div>
        <div class="mid-section">
            <ul>
                <li><a href="Company ">Company</a></li>
                <li><a href="About us ">About us</a></li>
                <li><a href="Careers">Careers</a></li>
                <li><a href="Press">Press</a></li>
                <li><a href="News">News</a></li>
                <li><a href="Media kit">Media kit</a></li>
                <li><a href="Contact ">Contact</a></li>

            </ul>
        </div>
        <div class="mid2-section">
            <ul>
                <li><a href="Resources ">Resources</a></li>
                <li><a href="Blogs ">Blogs</a></li>
                <li><a href="Newsletters">Newsletters</a></li>
                <li><a href="Events">Events</a></li>
                <li><a href="Help centers ">Help Centers</a></li>
                <li><a href="Tutorials"> Tutorials</a></li>
                <li><a href="Support">Support</a></li>

            </ul>
        </div>
        <div class="mid3-section">
            <ul>
                <li><a href="Use cases ">Resources</a></li>
                <li><a href="Start ups ">Blogs</a></li>
                <li><a href="Enterprise">Newsletters</a></li>
                <li><a href="Government">Events</a></li>
                <li><a href="SaaS centers">Help Centers</a></li>
                <li><a href="Market places "> Tutorials</a></li>
                <li><a href="Ecommerce ">Support</a></li>

            </ul>
        </div>
        <div class="mid4-section">
            <ul>
                <li><a href="Social ">Social</a></li>
                <li><a href="Twitter ">Twitter</a></li>
                <li><a href="Linkedin">Linkedin</a></li>
                <li><a href="Facebook">Facebook</a></li>
                <li><a href="Github">Github</a></li>
                <li><a href="AngerList "> AngerList</a></li>
                <li><a href="Dribbble  ">Dribbble</a></li>

            </ul>
        </div>
        <div class="right-section">
            <ul>
                <li><a href="Legal ">Legal</a></li>
                <li><a href="Terms ">Terms</a></li>
                <li><a href="Privacy">Privacy</a></li>
                <li><a href="Cookies">Cookies</a></li>
                <li><a href="licences">licences</a></li>
                <li><a href="settings "> settings</a></li>
                <li><a href="Contact  ">Contact</a></li>

            </ul>
        </div>

        </div>
            <div class="logo">
                <img src={require('./images/logo.png')} alt="no logo found" />
          </div>

        <div class="copyright">
            <p>&copy; all rights reserved</p>
        </div>
    </footer>
  )
}
