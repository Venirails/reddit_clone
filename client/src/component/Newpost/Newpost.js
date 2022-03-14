import React,  { useState }  from 'react'
import axios from "../../utils/ajax_helper";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import Editor from "../Editor";
import { getJWT } from "../../utils/jwt";


export default function Newpost() {

    const [postTitle, setTitle] = useState("");
    const [postContent, setContent] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const handleEditorChange = ({ html, text }) => {
      const newValue = text.replace(/\d/g, "");
      setContent(newValue);
  };
    const newpost = (e) => {
      e.preventDefault();

      axios.post("/newpost",{title: postTitle,content: postContent}, { 
        headers: {
            'Authorization': `Bearer ${getJWT()}`,
          }  
        })
        .then((res) => {
          toast.success("Post Created Sucessfully!");
          setTimeout(() => {
            navigate("/listpost");
          }, 1500);
        })
        .catch((err) => {
          if (err.response) {
            setError(err.response.data.message);
          }
          if (err.response.data[0].msg) {
            setError(err.response.data[0].msg);
          } else {
            setError(err);
          }
        });
    };
    return (
      <div className="container">
        <Toaster />
        
        <div className="row">
          <div className="col-sm-9 col-md-8">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                {error ? (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                ) : (
                  <></>
                )}
                <h1 className="card-title text-center mb-5 fw-light fs-5">
                  <span>New Post</span>
                </h1>
                <form onSubmit={(e) => newpost(e)} className="form">
                  <div className="form-group">
                    <div className="form-floating mb-3">
                      <input
                        required={true}
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        id="first_name"
                        placeholder="Title"
                      />
                      <label htmlFor="first_name">Title *</label>
                    </div>
                    <div className="form-floating mb-3">
                    <Editor input={postContent} 
                    setContent={setContent}
                  
                  />
            
                      
                    </div>
                    <br /><br />
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg float-end">
                      Create Post
                    </button>
                  </div>  
                  </div>
                </form>
                
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    );
  }
  