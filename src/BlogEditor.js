import './BlogEditor.css'
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react';

export default function BlogEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");


  const _onSelect = (option) => {
    console.log("Selected option:", option);
    // Do something with the selected option if needed
  };

  return (
    <div className='correction blog-editor'>

      <form>
            <div >
                <div className="blog-dropdown">

                    {/* <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter blog title"></input>
                    </div> */}
                    <CDropdown>
                        <CDropdownToggle color="secondary">Select Blog Category</CDropdownToggle>
                        <CDropdownMenu>
                        <CDropdownItem href="#">Latest Tech</CDropdownItem>
                        <CDropdownItem href="#">AI</CDropdownItem>
                        <CDropdownItem href="#">Programming</CDropdownItem>
                        <CDropdownItem href="#">Mobiles</CDropdownItem>
                        <CDropdownItem href="#">Laptops</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </div>
                <br />
                <form>
                    <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter blog title" />
                    </div>
                </form>
                <br></br>
                <br />
                <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                />

                <div>{HTMLReactParser(content)}</div>
            </div>
        </form>
    </div>
)}