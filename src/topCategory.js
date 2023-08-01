import React from 'react';
import './topCategory.css';

export default function TopCategory({ top3BlogsPerCategoryByRating }) {
  if (!top3BlogsPerCategoryByRating) {
    return <div>No data available.</div>;
  }

  return (
    <div className="top-category-container">
      <h2 className="top-category-heading">Top Blogs by Category</h2>
      <div className="grid-container">
        {Object.entries(top3BlogsPerCategoryByRating).map(([category, blogs]) => (
          <div key={category} className="category-card">
            <h3 className="category-heading">{category}</h3>
            {blogs.map((blog, index) => (
              <div key={index}>
                {blog.image && <img className="blog-image" src={blog.image} alt={blog.title} />}
                <p className="blog-item">
                  <strong>{blog.title}</strong> 
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
