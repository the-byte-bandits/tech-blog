import React from 'react'
import './BlogPage.css'

export default function BlogPage() {
  return (
    <div className="blog-page">
        <div className="blog-page-container">
            <div className="blog-page-upper">
                <p>Style.</p>
                <h1>The Versatile Cardigan: How to Style and Wear this Classic Wardrobe Staple</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum facere accusantium dolores maiores hic, ipsum consequuntur saepe repellat repellendus. Odio deserunt ipsum delectus. Modi quisquam nulla asperiores harum odit.</p>
                
                <div className="blog-page-info">
                    <p>By&nbsp;<section>Barbara Keen.</section></p>
                    <p>12 June 2023</p>
                </div>
                
                
                <div className="blog-page-btn">
                    <div>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-comment"></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
            </div>
            <div className="blog-page-middle">
                <img src={require('./images/1.png')} alt="" />
            </div>
            <div className="blog-page-bottom">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ea minima, autem explicabo enim tempora doloribus corporis quasi reiciendis illo quas sed velit voluptas? Eligendi ullam earum omnis unde maxime.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa odio itaque sapiente ratione, quos ea id. Maxime exercitationem, deleniti eveniet aspernatur in at nobis, officiis aliquid beatae expedita nesciunt natus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, enim facilis! Error deleniti, accusamus est, distinctio beatae earum molestiae itaque ipsam eius neque odio? Enim, optio? Mollitia, itaque excepturi? Deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis incidunt voluptatibus aliquid rerum, perspiciatis optio labore odit. Provident maiores, dolorum voluptatem deleniti quia amet vel mollitia temporibus ab pariatur ratione?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ea minima, autem explicabo enim tempora doloribus corporis quasi reiciendis illo quas sed velit voluptas? Eligendi ullam earum omnis unde maxime.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa odio itaque sapiente ratione, quos ea id. Maxime exercitationem, deleniti eveniet aspernatur in at nobis, officiis aliquid beatae expedita nesciunt natus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, enim facilis! Error deleniti, accusamus est, distinctio beatae earum molestiae itaque ipsam eius neque odio? Enim, optio? Mollitia, itaque excepturi? Deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis incidunt voluptatibus aliquid rerum, perspiciatis optio labore odit. Provident maiores, dolorum voluptatem deleniti quia amet vel mollitia temporibus ab pariatur ratione?</p>
            </div>
        </div>
    </div>
  )
}
