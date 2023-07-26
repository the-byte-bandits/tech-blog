import React from 'react'
import './Dnav.css'

function Dnav() {
  return (
    <div className="dashboard-nav">
        <div className="dashboard-nav-container">
            <div className="dashboard-nav-logo">
                <i class="fa-brands fa-think-peaks"></i>
                <h1>Blogspiration</h1>
            </div>
            <div className="dashboard-nav-btn">
                <button id='nav-btn-1' onClick={()=>{
                    document.getElementById('nav-btn-1').classList.add('dashboard-nav-btn-selected')
                    document.getElementById('nav-btn-2').classList.remove('dashboard-nav-btn-selected')
                }} className='dashboard-nav-btn-selected'><i class="fa-solid fa-house"></i> Dashboard</button>
                <button id='nav-btn-2' onClick={()=>{
                    document.getElementById('nav-btn-2').classList.add('dashboard-nav-btn-selected')
                    document.getElementById('nav-btn-1').classList.remove('dashboard-nav-btn-selected')
                }}><i class="fa-solid fa-comment"></i> Pending</button>                
            </div>
            <div className="dashboard-nav-profile">
                <img src={require('../images/hamster.png')} alt="" />
                <h1>Gloria Borger</h1>
                <p>gloria@gmail.com</p>
                <div>
                    <button><i class="fa-solid fa-gear"></i></button>
                    <button>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dnav
