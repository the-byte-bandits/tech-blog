import React from 'react'
import './MainBlog.css'
import Blog from './Blog'
import { hi } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import slugify from 'slugify';


export default function MainBlog({allBlogs,allRatings}) {

  const highestRating=()=>{
    let highestRating=0
    let highestRatingBlog
    allBlogs.forEach((blog)=>{
      let blogRating=0
      allRatings.forEach((rating)=>{
        if(rating.blogId===blog.id){
          blogRating+=rating.rating
        }
      })
      if(blogRating>highestRating){
        highestRating=blogRating
        highestRatingBlog=blog
      }
    })
    return highestRatingBlog
  }

  const hrb=highestRating()

  return (
    <main className="main">
        <div className="main-container">

            <div className="main-blog">
              <div className="main-blog-container">
                <div className="main-blog-content">
                    <p>Featured</p>
                    <Link to={'/blog/'+slugify(hrb.title,{replacement:'-',lower:true})+'-'+hrb.id}>
                      <h1>{hrb.title.slice(0,80)}...</h1>
                    </Link>
                    <p>{hrb.blog.slice(0,250)}</p>
                </div>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>

          <div className="blogs-all">
            <div className="blogs-all-container container">
              <h1>Recent blog posts</h1>

              <div className="blogs-all-row row">
                <Blog blog={allBlogs[0]}/>
                <Blog blog={allBlogs[1]}/>
                <Blog blog={allBlogs[2]}/>
                <Blog blog={allBlogs[3]}/>
                <Blog blog={allBlogs[4]}/>
                <Blog blog={allBlogs[4]}/>
                <Blog blog={allBlogs[4]}/>
                <Blog blog={allBlogs[4]}/>
                <Blog blog={allBlogs[4]}/>  

              </div>
              {/* <div className="ad-1"><p>Ads*</p></div> */}

              <button>Load More</button>
            </div>
          </div>
        </div>
    </main>
  )
}
