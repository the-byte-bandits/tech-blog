import React from 'react'
import './Table.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import slugify from 'slugify';


export default function Table({id,th,td}) {

    const disclaimerToDeleteBlog=()=>{
        Swal.fire({
            title: 'Do you want to proceed?',
            showCancelButton: true,
            confirmButtonText: '✓', // Tick button
            cancelButtonText: '✗', // Cross button
            confirmButtonColor: '#38a169', // Custom color for tick button
            cancelButtonColor: '#e53e3e', // Custom color for cross button
        }).then((result) => {
            if (result.isConfirmed) {
            // Code to execute if the tick button is clicked
            console.log('Tick button clicked!');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Code to execute if the cross button is clicked
            console.log('Cross button clicked!');
            }
        });
    }

    const disclaimerToDeleteComm=()=>{
        Swal.fire({
            title: 'Do you want to proceed?',
            showCancelButton: true,
            confirmButtonText: '✓', // Tick button
            cancelButtonText: '✗', // Cross button
            confirmButtonColor: '#38a169', // Custom color for tick button
            cancelButtonColor: '#e53e3e', // Custom color for cross button
        }).then((result) => {
            if (result.isConfirmed) {
            // Code to execute if the tick button is clicked
            console.log('Tick button clicked!');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Code to execute if the cross button is clicked
            console.log('Cross button clicked!');
            }
        });
    }

    const showFullComment = (text) => {
        Swal.fire({
          title: 'Comment',
          text: text,
          icon: 'info',
          confirmButtonText: 'OK'
        });
      };

  return (
    <div className="dash-table">
        <div className="dash-table-container">
            {
                id === 'dashboard' &&
                <div>
                    <h1>All Blogs</h1>
                    <Link to='/write-blog' ><i class="fa-solid fa-plus"></i> Add Blog</Link>
                </div>
            }
            {
                id === 'all-comments' &&
                <div>
                    <h1>All Comments</h1>
                </div>
            }
            {
                id === 'pending-comments' &&
                <div>
                    <h1>Pending Comments</h1>
                </div>
            }
            <div className="dash-table-wrapper">                
                <table>
                    <tr>
                        {th.map((item)=><th>{item}</th>)}
                    </tr>
                    {
                        td.map((item)=>{
                            return(
                                <tr key={item.id}>
                                    {
                                        id === 'dashboard' &&
                                        <>
                                        <td>{item.id}</td>
                                        <td>{item.title.slice(0,7)}...</td>
                                        <td>{item.category}</td>
                                        <td>{item.totViews}</td>
                                        <td>{item.currViews}</td>
                                        <td>{item.date}</td>
                                        <td>
                                            <Link to='' ><i class="fa-solid fa-pen"></i></Link>
                                            <Link to={'/blog/'+slugify(item.title,{replacement:'-',lower:true})+'-'+item.id}><i class="fa-solid fa-eye"></i></Link>
                                            <button onClick={disclaimerToDeleteBlog}><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                        </>
                                    }
                                    {
                                        id === 'all-comments' &&
                                        <>
                                        <td>{item.id}</td>
                                        <td>{item.date}</td>
                                        <td className='comment-btn'><button onClick={()=>showFullComment(item.comment)}>{item.comment.slice(0,12)}...</button></td>
                                        <td><button onClick={disclaimerToDeleteComm}><i class="fa-solid fa-trash"></i></button></td>

                                        </>
                                    }
                                    {
                                        id === 'pending-comments' &&
                                        <>
                                        <td>{item.id}</td>
                                        <td>{item.date}</td>
                                        <td className='comment-btn'><button onClick={()=>showFullComment(item.comment)}>{item.comment.slice(0,12)}...</button></td>
                                        <td><button><i class="fa-solid fa-check"></i></button><button><i class="fa-solid fa-xmark"></i></button></td>

                                        </>
                                    }
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    </div>
  )
}
