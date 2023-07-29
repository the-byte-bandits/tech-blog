import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import AddCoverPhoto from '../addCoverPhoto'
import './blogEditor.css'
export default function BlogEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div>

        <h1 className="editorheading">Blog Editor</h1>
        <AddCoverPhoto/>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />

      <div>{HTMLReactParser(content)}</div>
    </div>
  );
}
