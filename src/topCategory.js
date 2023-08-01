
import React from 'react';

export default function topCategory({ top3BlogsPerCategoryByRating }) {
  if (!top3BlogsPerCategoryByRating) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <h2>Top Blogs by Category</h2>
      {Object.entries(top3BlogsPerCategoryByRating).map(([category, blogs]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {blogs.map((blog, index) => (
              <li key={index}>
                <strong>{blog.title}</strong> (Rating: {blog.rating})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
