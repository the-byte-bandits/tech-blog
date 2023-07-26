import React from 'react'
import './Table.css'

export default function Table() {
  return (
    <div className="dash-table">
        <div className="dash-table-container">
            <div>
                <h1>All Blogs</h1>
                <button><i class="fa-solid fa-plus"></i> Add Blog</button>
            </div>
            <div className="dash-table-wrapper">
                
                <table>
                    <tr>
                        <th>Sr #</th>
                        <th>Title</th>                            
                        <th>Category</th>                            
                        <th>Likes</th>                            
                        <th>Comments</th>     
                        <th>Tot. Views</th>                       
                        <th>Curr. Views</th>                       
                        <th>Date</th>                            
                        <th>Actions</th> 
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='table-blog-title'><a href="">Lorem ipsum do...</a></td>
                        <td>Programming</td>
                        <td>23</td>
                        <td className='table-blog-comm'><a href="">11</a></td>
                        <td>123</td>
                        <td>43</td>
                        <td>12/12/2021</td>
                        <td><button><i class="fa-solid fa-pen"></i></button><button><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='table-blog-title'><a href="">Lorem ipsum do...</a></td>
                        <td>Programming</td>
                        <td>23</td>
                        <td className='table-blog-comm'><a href="">11</a></td>
                        <td>123</td>
                        <td>43</td>
                        <td>12/12/2021</td>
                        <td><button><i class="fa-solid fa-pen"></i></button><button><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='table-blog-title'><a href="">Lorem ipsum do...</a></td>
                        <td>Programming</td>
                        <td>23</td>
                        <td className='table-blog-comm'><a href="">11</a></td>
                        <td>123</td>
                        <td>43</td>
                        <td>12/12/2021</td>
                        <td><button><i class="fa-solid fa-pen"></i></button><button><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='table-blog-title'><a href="">Lorem ipsum do...</a></td>
                        <td>Programming</td>
                        <td>23</td>
                        <td className='table-blog-comm'><a href="">11</a></td>
                        <td>123</td>
                        <td>43</td>
                        <td>12/12/2021</td>
                        <td><button><i class="fa-solid fa-pen"></i></button><button><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='table-blog-title'><a href="">Lorem ipsum do...</a></td>
                        <td>Programming</td>
                        <td>23</td>
                        <td className='table-blog-comm'><a href="">11</a></td>
                        <td>123</td>
                        <td>43</td>
                        <td>12/12/2021</td>
                        <td><button><i class="fa-solid fa-pen"></i></button><button><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='table-blog-title'><a href="">Lorem ipsum do...</a></td>
                        <td>Programming</td>
                        <td>23</td>
                        <td className='table-blog-comm'><a href="">11</a></td>
                        <td>123</td>
                        <td>43</td>
                        <td>12/12/2021</td>
                        <td><button><i class="fa-solid fa-pen"></i></button><button><i class="fa-solid fa-trash"></i></button></td>
                    </tr>












                    {/* <tr>
                        <td>1</td>
                        <td><a href="">Lorem ipsum do...</a></td>
                        <td>Programming</td>
                        <td>23  <i class="fa-regular fa-heart"></i></td>
                        <td><a href="">11 <i class="fa-regular fa-comment"></i></a></td>
                        <td>123 <i class="fa-regular fa-eye"></i></td>
                        <td>43 <i class="fa-regular fa-eye"></i></td>
                        <td>12/12/2021 <i class="fa-regular fa-calendar"></i></td>
                        <td><button><i class="fa-solid fa-pen"></i></button><button><i class="fa-solid fa-trash"></i></button></td>
                    </tr> */}
                </table>
            </div>
        </div>
    </div>
  )
}
