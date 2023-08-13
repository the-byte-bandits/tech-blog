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

export default function BlogEditor() {
  const editor = useRef(null);
  // const [content, setContent] = useState("");


  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


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
        content: content
    };

    fetch('http://localhost:3000/write-blog', {
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
        // Handle the category value here (e.g., save to state, display, etc.)
        // For this example, we simply display an alert with the entered value.
        
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
      <button type="button" onClick={handleButtonClick}>
        Log Form Data
      </button>
    </form>
    </div>
)}