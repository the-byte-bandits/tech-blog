import React from 'react'
import './Dashboardd.css'
import Dnav from './Dnav'
import Dscreen from './Dscreen'

export default function Dashboardd() {
  return (
    <div className='dashboard'>
        <div className="dashboard-container">

          <Dnav />
          <Dscreen />
          
        </div>
      
    </div>
  )
}
