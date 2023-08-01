// import React from 'react';

// export default function topCategory({ top3BlogsPerCategoryByRating }) {
//   // Check if the prop and the required category exist
//   if (!top3BlogsPerCategoryByRating || !top3BlogsPerCategoryByRating['Art History']) {
//     return <div>No data available.</div>;
//   }

//   // Get the first blog in the 'Art History' category
//   const firstBlogInArtHistory = top3BlogsPerCategoryByRating['Art History'][0];

//   return (
//     <div>
//       <h1>{firstBlogInArtHistory.id}</h1>
//       {/* Display other properties as needed */}
//       <h2>{firstBlogInArtHistory.title}</h2>
//       <p>Category: {firstBlogInArtHistory.category}</p>
//       <p>Author: {firstBlogInArtHistory.author}</p>
//       <p>Total Views: {firstBlogInArtHistory.totViews}</p>
//       {/* Add more details as required */}
//     </div>
//   );
// }
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
