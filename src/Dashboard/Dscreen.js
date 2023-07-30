import React from 'react'
import './Dscreen.css'
import Table from './Table'
import Dsearch from './Dsearch'

export default function Dscreen({id,th,td}) {

  return (
    <div id={id} className='dash-screen'>
        <div className="dash-screen-container">
            
            <Dsearch id={id+'-search'} placeholder={'Search blog title'}/>
            <Table id={id} th={th} td={td}/>

        </div>
      
    </div>
  )
}
