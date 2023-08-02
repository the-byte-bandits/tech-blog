import React from 'react'
import './BlogPage.css'
import CommentsSection from './CommentsSection'
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { format } from 'date-fns';


export default function BlogPage({blog}) {

    // useEffect(()=>{
    //     const ratingBtnInit=()=>{
    //         document.querySelectorAll('.rating-button').forEach((button) => {
    //         button.addEventListener('click', (event) => {
    //           document.querySelectorAll('.rating-button').forEach((btn) => {
    //             btn.classList.remove('clicked');
    //           });
    //           event.target.classList.add('clicked');
    //         });
    //       });
    //     }

    //     ratingBtnInit()
    // },[])

    const showRatingAlert = () => {
        const ratings = [1, 2, 3, 4, 5];
      
        Swal.fire({
          title: 'Rate This',
          showCancelButton: true,
          html: `
            <div style="display: flex; justify-content: space-around;">
              ${ratings
                .map(
                  (rating) => `
                    <button class="rating-button" value="${rating}">
                    <i class="fa-regular fa-star"></i>
                    </button>`
                )
                .join('')}
            </div>
          `,
          preConfirm: (result) => {
            const clickedButton = document.querySelector('.rating-button.clicked');
            if (clickedButton) {
              return parseInt(clickedButton.value);
            } else {
              return null;
            }
          },
        }).then((result) => {
          if (result.isConfirmed && result.value !== null) {
            console.log('Rating:', result.value);
          }
        });

        // Add event listeners to handle button clicks
        document.querySelectorAll('.rating-button').forEach((button) => {
            button.addEventListener('click', (event) => {
              document.querySelectorAll('.rating-button').forEach((btn) => {
                btn.classList.remove('clicked');
              });
              event.target.classList.add('clicked');
            });
          });
      };

    const rating=()=>{
        let rating=0
        blog.reviews.forEach((review)=>{
            rating+=review.rating
        })
        return rating/blog.reviews.length
    }
      
    
  return (
    <div className="blog-page">
        <div className="blog-page-container">
            <div className="blog-page-upper">
                <p>{blog.category}.</p>
                <h1>{blog.title}</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum facere accusantium dolores maiores hic, ipsum consequuntur saepe repellat repellendus. Odio deserunt ipsum delectus. Modi quisquam nulla asperiores harum odit.</p>
                
                <div className="blog-page-info">
                    <p>By&nbsp;<section>{blog.author}.</section></p>
                    <p>{format(new Date(blog.date), 'dd MMM yyyy')}</p>
                </div>
                
                
                <div className="blog-page-btn">
                    <div>
                        <button onClick={showRatingAlert}><i class="fa-regular fa-star"></i></button>
                        &nbsp;<strong>{parseFloat(rating().toFixed(1))}</strong>&nbsp;
                        <button onClick={()=>document.getElementById('comments-section').scrollIntoView({ behavior: 'smooth' })}><i class="fa-regular fa-comment"></i></button>
                        &nbsp;<strong>{blog.comments.length}</strong>
                    </div>
                    <div>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
            </div>
            <div className="blog-page-middle">
                <img src={require('./images/1.png')} alt="" />
            </div>
            <div className="blog-page-bottom">
                {blog.blog}
            </div>
        </div>


        <CommentsSection comments={blog.comments} blogId={blog.id}/>
    </div>
  )
}
