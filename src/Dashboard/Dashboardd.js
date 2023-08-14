  import React, { useState,useEffect } from 'react'
  import './Dashboardd.css'
  import Dnav from './Dnav'
  import Dscreen from './Dscreen'
  import axios from 'axios';

  export default function Dashboardd({user,allBlogs}) {

    const [blogs, setBlogs] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:5000/getdata')
    .then(blogs=>setBlogs(blogs.data))
    .catch(err=>console.log(err))
    console.log(blogs);
  },[])
  
    
    
    return (
      <div className='dashboard'>
          <div className="dashboard-container">
            <Dnav user={user}/>
            
            <Dscreen 
              id={'dashboard'}
              th={['ID','Title','Category','Cover','Actions']}
              td={blogs}   
            
            />
            <Dscreen 
              id={'all-comments'}
              th={['ID','Date','Comment','Actions']}
              td={allBlogs.flatMap((blog) => blog.comments)}              
            />
            <Dscreen 
              id={'pending-comments'}
              th={['ID','Date','Comment','Actions']}
              td={allBlogs.flatMap((blog) => blog.comments.filter((item) => item.pending === true))}
            />
          
          </div>

      </div>
    )
  }
