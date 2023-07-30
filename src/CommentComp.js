import React from 'react'
import './CommentComp.css'

export default function CommentComp({userName,date,comment}) {
  return (
    <div className='comment'>
        <div className="comment-container">
            <div className="comment-upper">
                <div className='comment-upper-left'>
                    <img src={require('./images/user-img.png')} alt="" />
                    <p>{userName}</p>
                </div>
                <div className='comment-upper-right'>
                    <p>{date}</p>
                </div>
            </div>
            <div className="comment-lower">
                <p>{comment}</p>
            </div>
        </div>
    </div>
  )
}
