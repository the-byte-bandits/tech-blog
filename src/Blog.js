import React from 'react'
import './Blog.css'

export default function Blog() {
  return (
    <div className="blog col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="blog-container">
            <img src={require('./images/1.png')} alt="" />
            <div className="blog-content">
                <h1>Building your API stack</h1>
                <p>Lorem ipsum, dolor sit amet cons consectetur adipisicing elit. Quibusdam corrupti amet assumenda.</p>
                <div className="blog-info">
                    <img src={require('./images/user-img.png')} alt=""  className='blog-user-img'/>
                    <p>Jonathan Wills</p>
                    <i class="fa-solid fa-circle"></i>
                    <p>19 Jan 2022</p>
                </div>
            </div>
        </div>
    </div>
  )
}
