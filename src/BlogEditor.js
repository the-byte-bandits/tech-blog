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


  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };


  const handleButtonClick = () => {
    console.log('Selected Category:', selectedCategory);
    console.log('Title:', title);
    console.log('Content:', content);
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
          <CDropdown>
            <CDropdownToggle color="secondary">
              Select Blog Category
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem onClick={() => handleCategorySelect('Latest Tech')}>
                Latest Tech
              </CDropdownItem>
              <CDropdownItem onClick={() => handleCategorySelect('AI')}>
                AI
              </CDropdownItem>
              {/* ... Other dropdown items */}
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