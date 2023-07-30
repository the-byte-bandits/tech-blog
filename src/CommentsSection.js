import React from 'react'
import CommentComp from './CommentComp'
import './CommentsSection.css'
import { format } from 'date-fns';


function CommentsSection({comments}) {
  return (
    <div className="comments-section">
        <div className="comments-section-container">
            <h1>Reviews ({comments.length})</h1>
            <div className="add-comment">
                <img src={require('./images/user-img.png')} alt="" />
                <form action="">
                    <input type="text" placeholder="Add a review..." />
                    <button><i class="fa-solid fa-paper-plane"></i></button>
                </form>
                
            </div>

            {
              comments.map((comment) => 
                <CommentComp key={comment.id} userName={comment.userName} date={format(new Date(comment.date), 'dd MMM yyyy')} comment={comment.comment} />
              )
            }
        </div>
    </div>
  )
}

export default CommentsSection
