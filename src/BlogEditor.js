import './BlogEditor.css';
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
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
  const [content, setContent] = useState('');
  const [blog, setBlog] = useState({ category: '', title: '', content: '' });

  const showInputAlert = () => {
    Swal.fire({
      title: 'Enter Category',
      input: 'text',
      inputPlaceholder: 'Enter Category',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (category) => {
        setBlog({ ...blog, category }); // Set the selected category
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  // Data submission / processing 

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { category, title, content } = blog;
    
  };

  return (
    <div className="correction blog-editor">
      <form>
        <div>
          <div className="blog-dropdown">
            <CDropdown>
              <CDropdownToggle color="secondary">
                Select Blog Category
              </CDropdownToggle>
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
          <form method="POST">
            <div className="form-group">
              <input
                name="title"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter blog title"
                value={blog.title}
                onChange={handleInputs}
              />
            </div>
          </form>
          <br />
          <ImageUpload />
          <br />
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
            name="content"
            value={blog.content}
          />
          <div>
            <input
              type="submit"
              name="submit"
              value="register"
              onClick={PostData}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
