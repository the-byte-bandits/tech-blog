import React from 'react';
import './topCategory.css';

export default function TopCategory({ top3BlogsPerCategoryByRating }) {
  if (!top3BlogsPerCategoryByRating) {
    return <div>No data available.</div>;
  }

  return (
    <div className="top-category-container">
      <h2 className="top-category-heading">Top Blogs by Category</h2>
      {Object.entries(top3BlogsPerCategoryByRating).map(([category, blogs]) => (
        <div key={category}>
          <h3 className="category-heading">{category}</h3>
          <ul>
            {blogs.map((blog, index) => (
              <li key={index} className="blog-item">
                <strong>{blog.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
