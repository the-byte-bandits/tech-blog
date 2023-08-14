  import React, { useState,useEffect } from 'react'
  import './Dashboardd.css'
  import Dnav from './Dnav'
  import Dscreen from './Dscreen'
  import axios from 'axios';

  export default function Dashboardd({user,allBlogs}) { 
    
    return (
      <div className='dashboard'>
          <div className="dashboard-container">
            <Dnav user={user}/>
            
            <Dscreen 
              id={'dashboard'}
              th={['ID','Title','Category','Cover','Actions']}
              td={allBlogs}   
            
            />
            <Dscreen 
              id={'all-comments'}
              th={['ID','Date','Comment','Actions']}
              td={allBlogs.flatMap((blog) => blog.comments)}              
            />
            <Dscreen 
              id={'pending-comments'}
              th={['ID','Date','Comment','Actions']}
              td={allBlogs.flatMap((blog) => blog.comments.filter((item) => item.pending === true))}
            />
          
          </div>

      </div>
    )
  }
