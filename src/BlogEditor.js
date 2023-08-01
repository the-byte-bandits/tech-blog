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
  const [content, setContent] = useState("");

  


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
            <div >
                <div className="blog-dropdown">
                    <CDropdown>
                        <CDropdownToggle color="secondary">Select Blog Category</CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem href="#">Latest Tech</CDropdownItem>
                            <CDropdownItem href="#">AI</CDropdownItem>
                            <CDropdownItem href="#">Programming</CDropdownItem>
                            <CDropdownItem href="#">Mobiles</CDropdownItem>
                            <CDropdownItem href="#">Laptops</CDropdownItem>
                            <CDropdownItem onClick={showInputAlert}>Others</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </div>
                <br />
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter blog title" />
                    </div>
                </form>
                <br />
                <ImageUpload />
                <br />
                <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                />

                {/* <div>{HTMLReactParser(content)}</div> */}
            </div>
        </form>
    </div>
)}