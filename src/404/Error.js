import React from 'react'
import './Error.css'

export default function Error() {
  return (
    <div className='error correction'>   
      <div className="error-container">
        <img src={require('../images/hamster.png')} alt="" />
        <p>404 Resource Not Found!</p>
      </div>
    </div>
  )
}
