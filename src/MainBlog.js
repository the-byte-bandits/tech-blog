import React from 'react'
import './MainBlog.css'
import Blog from './Blog'
import { hi } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import slugify from 'slugify';

export default function MainBlog({allBlogs}) {



  
  // function calculateAverageRating(reviews) { 
  //   if (reviews.length === 0) return 0;
    
  //   const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  //   return totalRating / reviews.length;
  // }
  
  // const findHighestRatedBlog=(blogs)=> {
  //   let highestRating = 0;
  //   let highestRatedBlog = null;
  
  //   for (const blog of blogs) {
  //     const averageRating = calculateAverageRating(blog.reviews);
  
  //     if (averageRating > highestRating) {
  //       highestRating = averageRating;
  //       highestRatedBlog = blog;
  //     }
  //   }
  
  //   return highestRatedBlog;
  // }
  

  // const hrb=findHighestRatedBlog(allBlogs)

  return (
    <main className="main">
        <div className="main-container">
{/* 
            <div className="main-blog">
              <div className="main-blog-container">
                <div className="main-blog-content">
                    <p><strong>Top Rated</strong></p>
                    <Link to={'/blog/'+slugify(hrb.title,{replacement:'-',lower:true})+'-'+hrb.id}>
                      <h1>{hrb.title.slice(0,80)}...</h1>
                    </Link>
                    <p>{hrb.blog.slice(0,250)}</p>
                </div>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div> */}

          <div className="blogs-all">
            <div className="blogs-all-container container">
              <h1>Recent blog posts</h1>

              <div className="blogs-all-row row">
                {allBlogs.map((blog)=> <Blog key={blog.id} blog={blog}/> )}
              </div>
              {/* <div className="ad-1"><p>Ads*</p></div> */}

              <button>Load More</button>
            </div>
          </div>
        </div>
    </main>
  )
}