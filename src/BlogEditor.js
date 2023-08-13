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

  const handleEditorChange = (newContent) => {
    // Perform any necessary operations with the newContent here
    // For example, you can send it to a function
    const contentWithoutPTag = newContent.replace(/<p>/g, '').replace(/<\/p>/g, '');

    sendDataToFunction(contentWithoutPTag);

    // Update the state with the new content
    setContent(newContent);
  };

  const sendDataToFunction = (data) => {
    // Implement your logic to send the data to the desired function
    console.log('Sending data:', data);
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
  const [selectedValue, setSelectedValue] = useState("");



  const handleDropdownSelect = (value) => {
    setSelectedValue(value);
    // Do something with the selected value
     console.log("Selected Value:", value);
};



const handleForm=(e)=>{
  console.log(e.target.name)
}

  return (
    <div className='correction blog-editor'>
      <form>
            <div>
                <div className="blog-dropdown">

                     {/* <CDropdown defaultValue={""} >
                        <CDropdownToggle color="secondary">Select Blog Category</CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem href="#">Latest Tech</CDropdownItem>
                            <CDropdownItem href="#">AI</CDropdownItem>
                            <CDropdownItem href="#">Programming</CDropdownItem>
                            <CDropdownItem href="#">Mobiles</CDropdownItem>
                            <CDropdownItem href="#">Laptops</CDropdownItem>
                            <CDropdownItem onClick={showInputAlert}>Others</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>  */}
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
                
                    <div className="form-group">
                        <input name="BlogTitle" onChange={handleForm} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter blog title" />
                    </div>
                
                <br />
                <ImageUpload/>
                <br />
                <JoditEditor
                name="BlogEditor"
                    ref={editor}
                    value={content}
                    onChange={handleEditorChange}
                />

                {/* <div>{HTMLReactParser(content)}</div> */}
            </div>
            <button  type="submit" class="btn btn-primary mt-6 pt-2">Primary</button>
        </form>
    </div>
)}