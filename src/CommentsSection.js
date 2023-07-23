import React from 'react'
import CommentComp from './CommentComp'
import './CommentsSection.css'

function CommentsSection() {
  return (
    <div className="comments-section">
        <div className="comments-section-container">
            <h1>Comments (6)</h1>
            <div className="add-comment">
                <img src={require('./images/user-img.png')} alt="" />
                <form action="">
                    <input type="text" placeholder="Add a comment..." />
                    <button><i class="fa-solid fa-paper-plane"></i></button>
                </form>
                
            </div>

            <CommentComp />
            <CommentComp />
            <CommentComp />
            <CommentComp />
        </div>
    </div>
  )
}

export default CommentsSection
