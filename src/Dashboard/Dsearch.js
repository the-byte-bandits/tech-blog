import React from 'react'
import './Dsearch.css'

export default function Dsearch({id,placeholder}) {
    const searchBlog=()=>{

    }
    const searchComm=()=>{

    }
    const searchPendComm=()=>{

    }
  return (
    <div id={id} className="dash-search">
        <div className="dash-search-container">
                <input type="text" placeholder={placeholder} />
                {
                    id==='dashboard' &&
                    <button onClick={searchBlog}><i class="fa-solid fa-search"></i></button>
                }
                {
                    id==='all-comments' &&
                    <button onClick={searchComm}><i class="fa-solid fa-search"></i></button>
                }
                {
                    id==='pending-comments' &&
                    <button onClick={searchPendComm}><i class="fa-solid fa-search"></i></button>
                }
        </div>
    </div>
  )
}
