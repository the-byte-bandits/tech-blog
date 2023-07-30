import React from 'react'
import './MainBlog.css'
import Blog from './Blog'

export default function MainBlog({allBlogs}) {
  return (
    <main className="main">
        <div className="main-container">

            <div className="main-blog">
              <div className="main-blog-container">
                <div className="main-blog-content">
                    <p>Featured</p>
                    <h1>Breaking Into Product Design: Advice From Untitled Founders</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis molestiae rem labore accusamus ut voluptatem necessitatibus ex vitae quasi excepturi. Incidunt vero nobis reiciendis, quia corporis nostrum eveniet error accusamus?</p>
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
