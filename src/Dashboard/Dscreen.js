import React from 'react'
import './Dscreen.css'
import Table from './Table'

export default function Dscreen() {
  return (
    <div className='dash-screen'>
        <div className="dash-screen-container">
            <div className="dash-search">
                <div className="dash-search-container">
                    <input type="text" placeholder='Search blog' />
                    <button><i class="fa-solid fa-search"></i></button>
                </div>
            </div>

            <Table />

        </div>
      
    </div>
  )
}
