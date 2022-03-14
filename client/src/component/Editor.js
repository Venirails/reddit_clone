import React from "react";
import ReactQuill from 'react-quill'; 

const Editor = ({input, setContent}) => {
  return (
    <div>
      <ReactQuill
        style={{ margin: "20px 0" , height: "250px"}}
        value={input}
        onChange={setContent}
      ></ReactQuill>
    </div>
  );
};

export default Editor;