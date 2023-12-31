import React from 'react'
import './Blog.css'
import {Link} from "react-router-dom";
import slugify from 'slugify';
import { format } from 'date-fns';



export default function Blog({blog}) {
  return (
    <div className="blog col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="blog-container">
            <img src={require('./images/1.png')} alt="" ></img>
            <div className="blog-content">
              <Link to={'/blog/'+slugify(blog.title,{replacement:'-',lower:true})+'-'+blog.id}>
                <h1>{blog.title.slice(0,40)+'...'}</h1>
              </Link>
                <p>{blog.blog.slice(0,110)+'...'}</p>
                <div className="blog-info">
                    <img src={require('./images/user-img.png')} alt=""  className='blog-user-img'/>
                    <p>{blog.author}</p>
                    <i class="fa-solid fa-circle"></i>
                    <p>{format(new Date(blog.date), 'dd MMM yyyy')}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
