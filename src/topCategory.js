import React from 'react';
import './topCategory.css';
import { Link } from 'react-router-dom';
import slugify from 'slugify';


export default function TopCategory({ top3BlogsPerCategoryByRating }) {
  if (!top3BlogsPerCategoryByRating) {
    return <div>No data available.</div>;
  }
  
  const averageRating = (blog) => {
    if (blog.reviews.length === 0) return 0;
    
    const totalRating = blog.reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / blog.reviews.length;
  }

  return (
    <div className="top-category-container correction">
      <h2 className="top-category-heading">Top 3 Blogs by Category</h2>
      <div className="grid-container">
        {Object.entries(top3BlogsPerCategoryByRating).map(([category, blogs]) => (
          <div key={category} className="category-card">
            <h3 className="category-heading">{category}</h3>
            {blogs.map((blog, index) => (
              <div className='each-blog' key={index}>
                {/* { <img className="blog-image" src={require('./images/1.png')} alt={blog.title} />} */}
                {/* {blog.image && <img className="blog-image" src={blog.image} alt={blog.title} />} */}
                  <div className="blog-item">
                    <Link to={'/blog/'+slugify(blog.title,{replacement:'-',lower:true})+'-'+blog.id}>
                      <p>{blog.title.slice(0,25)}... </p>
                      
                    </Link>
                  </div>
                  <div >
                    <i class="fa-regular fa-star"></i>
                    <p>&nbsp;{parseFloat(averageRating(blog).toFixed(1))}</p>
                  </div> 
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
