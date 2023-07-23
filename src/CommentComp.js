import React from 'react'
import './CommentComp.css'

export default function CommentComp() {
  return (
    <div className='comment'>
        <div className="comment-container">
            <div className="comment-upper">
                <div className='comment-upper-left'>
                    <img src={require('./images/user-img.png')} alt="" />
                    <p>Gloria Borger</p>
                </div>
                <div className='comment-upper-right'>
                    <p>3w ago</p>
                </div>
            </div>
            <div className="comment-lower">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora modi odit voluptatum nisi molestiae, porro possimus assumenda sapiente, consectetur dolor. Quia incidunt illum dignissimos optio. Harum error iste nam.</p>
            </div>
        </div>
    </div>
  )
}
