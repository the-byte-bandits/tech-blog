import './BlogEditor.css'
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Swal from 'sweetalert2';
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react';
import ImageUpload from './ImageUpload';
import { convertLength } from '@mui/material/styles/cssUtils';

export default function BlogEditor() {
  const editor = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image,setImage]=useState('');

  const convertToBase64=(e)=>{
  console.log(e)
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=()=>{
    console.log(reader.result);
    setImage(reader.result)
  };
  reader.onerror=error=>{
    console.log("Error",error);

  };
  }


  const handleDropdownSelect = (value) => {
    setSelectedCategory(value)
   
    console.log("Selected :",selectedCategory);

  };
  const handleButtonClick = () => {
    console.log('Category:',selectedCategory);
    console.log('Title:', title);
    console.log('Content:', content);

    const dataToSend = {
        selectedCategory:selectedCategory,
        title: title,
        content: content,
        Base64:image
    };

    fetch('http://localhost:5000/write-blog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data sent successfully:', data);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
    Swal.fire(
      'Blog Data Added',
      'New Blog Added',
      'success'
    )


  };

  const _onSelect = (option) => {
    console.log("Selected option:", option);
    // Do something with the selected option if needed
  };

  const showInputAlert = () => {
    Swal.fire({
      title: 'Enter Category',
      input: 'text',
      inputPlaceholder: 'Enter Category',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (category) => {
        
    setSelectedCategory(category);
        
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  };



  return (
    <div className='correction blog-editor'>

    

<form>
      <div>
        <div className="blog-dropdown">
        <CDropdown defaultValue={""}>
                <CDropdownToggle name="BlogCategory" color="secondary">Select Blog Category</CDropdownToggle>
                <CDropdownMenu>
                    <CDropdownItem onClick={() => handleDropdownSelect("Latest Tech")}>Latest Tech</CDropdownItem>
                    <CDropdownItem onClick={() => handleDropdownSelect("AI")}>AI</CDropdownItem>
                    <CDropdownItem onClick={() => handleDropdownSelect("Programming")}>Programming</CDropdownItem>
                    <CDropdownItem onClick={() => handleDropdownSelect("Mobiles")}>Mobiles</CDropdownItem>
                    <CDropdownItem onClick={() => handleDropdownSelect("Laptops")}>Laptops</CDropdownItem>
                    {/* <CDropdownItem onClick={showInputAlert}>Others</CDropdownItem> */}
                </CDropdownMenu>
            </CDropdown>
        </div>


        <br />
        {/* Image upload */}
        <div>
  <input
    accept="image/*"
    type="file"
    onChange={convertToBase64}
  />

  {image === "" || image === null ? null : (
    <img width={100} height={100} src={image} alt="Uploaded" />
  )}
</div>
     
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
            />
          </div>
        </form>
        <br />
        <br />
        <JoditEditor
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>
      <button type="button" class="btn btn-secondary mt-4" onClick={handleButtonClick}>
        Add Blog
      </button>
    </form>
    </div>
)}