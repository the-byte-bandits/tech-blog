import React,{useState,useEffect} from 'react'
import CommentComp from './CommentComp'
import './CommentsSection.css'
import { format } from 'date-fns';


function CommentsSection({comments,blogId}) {

  const [comment,setComment]=useState({})
  const [userName,setUserName]=useState('')
  const [userComment,setUserComment]=useState('')
  

  
    const handleCommentSubmit=(e)=>{
        e.preventDefault()
        if(userName==='' || userComment===''){
            alert('Please enter your name and comment')
        }else{
            setComment({
                id:comments.length+1,
                blogId:blogId,
                title:'Lorem ipsum do...',
                userName:userName,
                comment:userComment,
                date:new Date()
            })
            console.log(comment)
            setUserName('')
            setUserComment('')
        }
    }


    // useEffect to log the updated comment state
  useEffect(() => {
    console.log(comment);
  }, [comment]); // This will log the comment whenever the comment state changes


  
  return (
    <div id='comments-section' className="comments-section">
        <div className="comments-section-container">
            <h1>Reviews ({comments.length})</h1>
            <div className="add-comment">
                <img src={require('./images/user-img.png')} alt="" />
                <form action="">
                    <input name='userName' type="text" placeholder="Name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                    <input name='userComment' type="text" placeholder="Add a review..." value={userComment} onChange={(e)=>setUserComment(e.target.value)}/>
                    <button onClick={handleCommentSubmit}><i class="fa-solid fa-paper-plane"></i></button>
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
