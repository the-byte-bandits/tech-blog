import React, { useEffect } from 'react'
import './Dnav.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


function Dnav() {

    useEffect(()=>{
        const dashInit=()=>{
            document.getElementById('dashboard').style.display='block'
            document.getElementById('all-comments').style.display='none'
            document.getElementById('pending-comments').style.display='none'
        }

        dashInit()
    })

    const dashboardSelect=()=>{
        document.getElementById('nav-btn-1').classList.add('dashboard-nav-btn-selected')
        document.getElementById('nav-btn-2').classList.remove('dashboard-nav-btn-selected')
        document.getElementById('nav-btn-3').classList.remove('dashboard-nav-btn-selected')

        document.getElementById('dashboard-search').style.display='block'
        document.getElementById('all-comments-search').style.display='none'
        document.getElementById('pending-comments-search').style.display='none'

        document.getElementById('dashboard').style.display='block'
        document.getElementById('all-comments').style.display='none'
        document.getElementById('pending-comments').style.display='none'
    }

    const allCommentsSelect=()=>{
        document.getElementById('nav-btn-2').classList.add('dashboard-nav-btn-selected')
        document.getElementById('nav-btn-1').classList.remove('dashboard-nav-btn-selected')
        document.getElementById('nav-btn-3').classList.remove('dashboard-nav-btn-selected')

        document.getElementById('dashboard-search').style.display='none'
        document.getElementById('all-comments-search').style.display='block'
        document.getElementById('pending-comments-search').style.display='none'

        document.getElementById('dashboard').style.display='none'
        document.getElementById('all-comments').style.display='block'
        document.getElementById('pending-comments').style.display='none'
    }

    const pendingCommentsSelect=()=>{
        document.getElementById('nav-btn-3').classList.add('dashboard-nav-btn-selected')
        document.getElementById('nav-btn-2').classList.remove('dashboard-nav-btn-selected')
        document.getElementById('nav-btn-1').classList.remove('dashboard-nav-btn-selected')

        document.getElementById('dashboard-search').style.display='none'
        document.getElementById('all-comments-search').style.display='none'
        document.getElementById('pending-comments-search').style.display='block'

        document.getElementById('dashboard').style.display='none'
        document.getElementById('all-comments').style.display='none'
        document.getElementById('pending-comments').style.display='block'
    }


    const showProfileUpdateAlert = () => {
        Swal.fire({
          title: 'Update Profile',
          html: `
            <input type="text" id="name" class="swal2-input" placeholder="Name" />
            <input type="email" id="email" class="swal2-input" placeholder="Email" />
            <input type="password" id="password" class="swal2-input" placeholder="Password" />
            <input type="file" id="profileImage" class="swal2-file" />
          `,
          showCancelButton: true,
          confirmButtonText: 'Save Changes',
          cancelButtonText: 'Cancel',
          showCloseButton: true,
          preConfirm: () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const profileImage = document.getElementById('profileImage').files[0];
            // Code to handle the form data (e.g., send it to the server)
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Profile Image:', profileImage);
          },
        });
      };

    



  return (
    <div className="dashboard-nav">
        <div className="dashboard-nav-container">
            <div className="dashboard-nav-logo">
                <Link to='/'>
                    <i class="fa-brands fa-think-peaks"></i>
                </Link>
                <h1>Blogspiration</h1>
            </div>
            <div className="dashboard-nav-btn">
                <button id='nav-btn-1' onClick={dashboardSelect} className='dashboard-nav-btn-selected'><i class="fa-solid fa-house"></i> Dashboard</button>
                <button id='nav-btn-2' onClick={allCommentsSelect}><i class="fa-solid fa-comment"></i> All Comments</button>   
                <button id='nav-btn-3' onClick={pendingCommentsSelect}><i class="fa-solid fa-clock"></i> Pending Comments</button>        
            </div>
            <div className="dashboard-nav-profile">
                <img src={require('../images/hamster.png')} alt="" />
                <h1>Gloria Borger</h1>
                <p>gloria@gmail.com</p>
                <div>
                    <button onClick={showProfileUpdateAlert}>
                        <i class="fa-solid fa-gear"></i>
                    </button>
                    <button>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dnav
