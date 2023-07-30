import React, { useState } from 'react'
import './Dashboardd.css'
import Dnav from './Dnav'
import Dscreen from './Dscreen'

export default function Dashboardd({allBlogs,allComments,pendingComments}) {

  return (
    <div className='dashboard'>
        <div className="dashboard-container">
          <Dnav />
          <Dscreen 
            id={'dashboard'}
            th={['ID','Title','Category','Likes','Comments','Tot. Views','Curr. Views','Date','Actions']}
            td={allBlogs}
          />
          <Dscreen 
            id={'all-comments'}
            th={['ID','Blog ID','Title','Date','Comment','Actions']}
            td={allComments}              
          />
          <Dscreen 
            id={'pending-comments'}
            th={['ID','Blog ID','Title','Date','Comment','Actions']}
            td={pendingComments}
          />
        </div>
    </div>
  )
}
