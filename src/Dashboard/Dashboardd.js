import React, { useState } from 'react'
import './Dashboardd.css'
import Dnav from './Dnav'
import Dscreen from './Dscreen'

export default function Dashboardd({allBlogs,user}) {

  return (
    <div className='dashboard'>
        <div className="dashboard-container">
          <Dnav user={user}/>
          <Dscreen 
            id={'dashboard'}
            th={['ID','Title','Category','Tot. Views','Curr. Views','Date','Actions']}
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
